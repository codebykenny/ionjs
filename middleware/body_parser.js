var body = require('koa-better-body');

module.exports.setup = function (app) {
	app.use(body({
		multipart: true,
		jsonLimit: '1mb',
		formLimit: '1mb'
	}));
};