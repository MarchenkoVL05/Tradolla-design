const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));

var cssMinify = require("gulp-css-minify");
const babel = require("gulp-babel");

const imagemin = require("gulp-imagemin");
const terser = require("gulp-terser");
const browsersync = require("browser-sync").create();

// Sass Task
function scssTask() {
  return src("app/scss/style.scss").pipe(sass()).pipe(cssMinify()).pipe(dest("dist"));
}

// JavaScript Task
function jsTask() {
  return src("app/js/*.js").pipe(terser()).pipe(dest("dist/js"));
}

// HTML Task
function HTMLTask() {
  return src("app/*.*html").pipe(dest("dist"));
}

function imageMin() {
  return src("app/images/*.**").pipe(imagemin()).pipe(dest("dist/images"));
}

// Browsersync Tasks
function browsersyncServe(cb) {
  browsersync.init({
    server: {
      baseDir: "dist/",
    },
  });
  cb();
}

function browsersyncReload(cb) {
  browsersync.reload();
  cb();
}

// Watch Task
function watchTask() {
  watch("app/images/*.**", imageMin, browsersyncReload);
  watch(
    ["app/*.html", "app/scss/**/*.scss", "app/js/**/*.js", "app/*.html"],
    series(HTMLTask, scssTask, jsTask, browsersyncReload)
  );
}

// Default Gulp task
exports.default = series(imageMin, HTMLTask, scssTask, jsTask, browsersyncServe, watchTask);
