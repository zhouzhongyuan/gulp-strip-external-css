# gulp-strip-external-css [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]
> A exteral css deleting plugin for gulp

## Usage

First, install `gulp-strip-external-css` as a development dependency:

```shell
npm install --save-dev gulp-strip-external-css
```

Then, add it to your `gulpfile.js`:

### Strip external css
```javascript
var stripExternalCSS = require('gulp-strip-external-css');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(stripExternalCSS())
    .pipe(gulp.dest('build/file.txt'));
});
```

### gulp-strip-external-css options

An optional argument, `options`, can be passed.

#### options
Type: `Object`

##### options.skipBinary
Type: `boolean`  
Default: `false`

Skip binary files


[MDN documentation for RegExp]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
[MDN documentation for String.replace]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/replace#Specifying_a_string_as_a_parameter

[travis-url]: http://travis-ci.org/lazd/gulp-strip-external-css
[travis-image]: https://secure.travis-ci.org/lazd/gulp-strip-external-css.svg?branch=master
[npm-url]: https://npmjs.org/package/gulp-strip-external-css
[npm-image]: https://badge.fury.io/js/gulp-strip-external-css.svg
