'use strict';
var concatStream = require('concat-stream');
var stripExternalCSSPlugin = require('../');
var fs = require('fs');
var should = require('should');
var File = require('vinyl');
describe('gulp-strip-external-css', function () {
    describe('stripExternalCSS()', function () {
        describe('buffered input', function () {
            var file, check;
            beforeEach(function () {
                file = new File({
                    path: 'test/fixtures/lu.html',
                    contents: fs.readFileSync('test/fixtures/lu.html')
                });
                check = function (stream, done, cb) {
                    stream.on('data', function (newFile) {
                        cb(newFile);
                        done();
                    });
                    stream.write(file);
                    stream.end();
                };
            });
            it('should strip external css on a buffer', function (done) {
                var stream = stripExternalCSSPlugin();
                check(stream, done, function (newFile) {
                    String(newFile.contents).should.equal(fs.readFileSync('test/expected/lu.html', 'utf8'));
                });
            });
            it('should trigger events on a buffer', function (done) {
                var stream = stripExternalCSSPlugin();
                stream.on('finish', function () {
                    // No assertion required, we should end up here, if we don't the test will time out
                    done();
                });
                stream.write(file);
                stream.end();
            });
        });
        describe('streamed input', function () {
            var file, check;
            beforeEach(function () {
                file = new File({
                    path: 'test/fixtures/lu.html',
                    contents: fs.createReadStream('test/fixtures/lu.html')
                });
                check = function (stream, done, cb) {
                    stream.on('data', function (newFile) {
                        newFile.contents.pipe(concatStream({ encoding: 'string' }, function (data) {
                            cb(data);
                            done();
                        }));
                    });
                    stream.write(file);
                    stream.end();
                };
            });
            it('should strip external css on a stream', function (done) {
                var stream = stripExternalCSSPlugin();
                check(stream, done, function (data) {
                    data.should.equal(fs.readFileSync('test/expected/lu.html', 'utf8'));
                });
            });
        });
        describe('options', function () {
            describe('skipBinary', function () {
                var stream;
                beforeEach(function () {
                    stream = stripExternalCSSPlugin({ skipBinary: true });
                });
                it('should ignore binary files when skipBinary is enabled', function (done) {
                    var file = new File({
                        path: 'test/fixtures/binary.png',
                        contents: fs.readFileSync('test/fixtures/binary.png')
                    });
                    stream.on('data', function (newFile) {
                        newFile.contents.should.eql(fs.readFileSync('test/expected/binary.png'));
                        done();
                    });
                    stream.write(file);
                    stream.end();
                });
                it('should strip external css on non binary files when skipBinary is enabled', function (done) {
                    var file = new File({
                        path: 'test/fixtures/lu.html',
                        contents: fs.createReadStream('test/fixtures/lu.html')
                    });
                    stream.on('data', function (newFile) {
                        newFile.contents.pipe(concatStream({ encoding: 'string' }, function (data) {
                            data.should.equal(fs.readFileSync('test/expected/lu.html', 'utf8'));
                            done();
                        }));
                    });
                    stream.write(file);
                    stream.end();
                });
            });
        });
    });
});
