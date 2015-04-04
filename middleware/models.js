var fs		= require('fs'),
	path	= require('path'),
	base	= path.dirname(require.main.filename);


module.exports  = {
	setup: function setup () {
		var files, folder, i, directory,
			collection = {};

			directory = fs.readdirSync(config.dirname + '/models');

			for (i in directory) {
				file = directory[i];

				global[file.split('.')[0]] = db.import(config.dirname + '/models/' + file);
			}
	}
}