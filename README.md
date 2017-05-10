# gulp-strip-external-css
<p align="center">
 <a href="https://travis-ci.org/zhouzhongyuan/gulp-strip-external-css"><img src="https://travis-ci.org/zhouzhongyuan/gulp-strip-external-css.svg?branch=master" alt="Build Status"></a>
 <a href="https://www.npmjs.com/package/gulp-strip-external-css"><img src="https://img.shields.io/npm/v/gulp-strip-external-css.svg?style=flat" alt="Version"></a>
 <a href="https://www.npmjs.com/package/gulp-strip-external-css"><img src="https://img.shields.io/npm/dm/gulp-strip-external-css.svg" alt="Downloads Monthly"></a>
 <a href="https://www.npmjs.com/package/gulp-strip-external-css"><img src="https://img.shields.io/npm/dt/gulp-strip-external-css.svg" alt="Downloads Totally"></a>
 <a href="https://www.npmjs.com/package/gulp-strip-external-css"><img src="https://img.shields.io/npm/l/gulp-strip-external-css.svg" alt="License"></a>
</p>

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
