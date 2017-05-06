var Transform = require('readable-stream/transform');
var rs = require('replacestream');
var istextorbinary = require('istextorbinary');
var parse5 = require('parse5');
module.exports = function (search, replacement, options) {
    return new Transform({
        objectMode: true,
        transform: function (file, enc, callback) {
            if (file.isNull()) {
                return callback(null, file);
            }

            function doReplace() {
                if (file.isStream()) {
                    file.contents = file.contents.pipe(rs(search, replacement));
                    return callback(null, file);
                }

                if (file.isBuffer()) {
                    if (search instanceof RegExp) {
                        file.contents = new Buffer(String(file.contents).replace(search, replacement));
                    } else {
                        var htmlString = file.contents.toString();
                        var exCSSReg = /(\s*<link.*(type="text\/css")+.*(href=(http[s]{0,1}:\/\/)|(\/\/)).*\n?)/mig;
                        htmlString = htmlString.replace(exCSSReg, '');
                        file.contents = new Buffer(htmlString);
                    }
                    return callback(null, file);
                }

                callback(null, file);
            }

            if (options && options.skipBinary) {
                istextorbinary.isText(file.path, file.contents, function (err, result) {
                    if (err) {
                        return callback(err, file);
                    }

                    if (!result) {
                        callback(null, file);
                    } else {
                        doReplace();
                    }
                });

                return;
            }

            doReplace();
        }
    });
};
