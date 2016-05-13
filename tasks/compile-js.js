'use strict';

const utils = require('./utils');

exports = module.exports = (gulp, plugins, config) => {
	return () => {
        config.process.forEach(asset => {
            console.log(`Running script compilation for ${asset.name} ...`);
            if(asset.name !== 'dependencies') {
                asset.scripts = asset.scripts.concat(utils.getComponentFiles('js'))
            }

            gulp.src(asset.scripts)
                .pipe(plugins.plumber())
                .pipe(plugins.cached(`${asset.name}:js`))
                .pipe(plugins.sourcemaps.init({loadMaps: true}))
                .pipe(plugins.remember(`${asset.name}:js`))
                .pipe(plugins.concat(`${asset.name}.js`))
                .pipe(plugins.sourcemaps.write('.'))
                .pipe(gulp.dest(config.release));
        });

        return gulp;
	};
};
