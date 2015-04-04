var config, controllers,
	http		= require('http'),
	url			= require('url'),
	path		= require('path'),
	base		= require('./lib/base.js'),
	koaBody		= require('koa-body'),
	app			= require('koa')();

config		= global.config			= require('./config/core.js');
controllers	= global.controllers	= base.load('controllers', true);
components	= global.components		= base.load('components');
middleware	= base.load('middleware');

app.use(koaBody({formidable:{uploadDir: __dirname}}));
middleware.database.setup(app);
middleware.models.setup(app);
middleware.routing.setup(app);

models		= base.load('models');

app.listen(process.env.PORT || 8000);

console.log("Now Running...");