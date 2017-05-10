# gulp-strip-external-css
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
