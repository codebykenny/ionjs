var fs		= require('fs'),
	path	= require('path'),
	// log		= require('./log.js'),
	// loadLog	= log.create('fileLoader', 'File Loader'),
	base	= path.dirname(require.main.filename);

module.exports.load = function (directory, hierarchy) {
	var files, directories, folder, i,
		collection = {};

	if (!directory || ~directory.indexOf('..')) {
		throw new Error('Invalid directory to load (`' + directory + '`)');
	}

	if (hierarchy) {
		directory	= path.join(config.dirname, directory);
		directories = fs.readdirSync(directory);

		for (i in directories) {
			folder = directories[i];
			files = fs.readdirSync(directory + '/' + folder);

			files.forEach(function (file) {
				if (file[0] === '.') {
					return;
				}

				collection[folder + '_' + path.basename(file, path.extname(file))] = require(path.join(directory + '/' + folder, file));
			});
		}
	} else {
		directory	= path.join(config.dirname, directory);
		files		= fs.readdirSync(directory);

		files.forEach(function (file) {
			if (file[0] === '.') {
				return;
			}

			collection[path.basename(file, path.extname(file))] = require(path.join(directory, file));
		});
	}

	return collection;
};