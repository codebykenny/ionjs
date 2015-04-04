var http	= require('http'),
	url		= require('url'),
	path	= require('path'),
	router	= require('./router.js');


module.exports  = {
	setup: function setup (app) {
		app.use(function *() {
			var mapping,
				uri			= url.parse(this.request.url).pathname,
				filename	= path.join(process.cwd(), uri);

			mapping = getRoute(this.request, this.request.url);
			this.queries = mapping.queries;

			if (controllers[mapping.controller]) {
				if (controllers[mapping.controller][mapping.method]) {
					yield controllers[mapping.controller][mapping.method].call(this);
				} else {
					console.log(mapping.method);
				}
			}
		});
	}
}

function getRoute (request, path) 	{
	return router.resolve(request, path);
}