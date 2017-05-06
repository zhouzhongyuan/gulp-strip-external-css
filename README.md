# gulp-strip-external-css [![NPM version][npm-image]][npm-url] [![Build status][travis-image]][travis-url]
> A exteral css deleting plugin for gulp

## Usage

First, install `gulp-strip-external-css` as a development dependency:

```shell
npm install --save-dev gulp-strip-external-css
```

Then, add it to your `gulpfile.js`:

### Regex Replace
```javascript
var replace = require('gulp-strip-external-css');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace(/foo(.{3})/g, '$1foo'))
    .pipe(gulp.dest('build/file.txt'));
});
```
### String Replace
```javascript
var replace = require('gulp-strip-external-css');

gulp.task('templates', function(){
  gulp.src(['file.txt'])
    .pipe(replace('bar', 'foo'))
    .pipe(gulp.dest('build/file.txt'));
});
```


## API

gulp-strip-external-css can be called with a string or regex.

### replace(string, replacement[, options])

#### string
Type: `String`

The string to search for.

#### replacement
Type: `String` or `Function`

The replacement string or function. If `replacement` is a function, it will be called once for each match and will be passed the string that is to be replaced.

### replace(regex, replacement[, options])

#### regex
Type: `RegExp`

The regex pattern to search for. See the [MDN documentation for RegExp] for details.

#### replacement
Type: `String` or `Function`

The replacement string or function. See the [MDN documentation for String.replace] for details.

### gulp-strip-external-css options

An optional third argument, `options`, can be passed.

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
