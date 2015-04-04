var Router;

Router = {
	resolve: map
};

module.exports = Router;


/*
	/test
	controller_parent: test
	controller_action: index
	controller: test_index
	queries: {
		a: b
	}
*/

function map (request, path) {
	var controller,
		mapped = {};

	path = path.split('/');
	path.shift();

	mapped.queries = getUrlParameters(path);

	if (path) {
		if (!path[0]) {
			mapped.controller_parent = 'index';
			mapped.controller_action = 'index';
		} else if (path[0]) {
			mapped.controller_parent = path[0].split(/[?&#]/)[0];

			if (path[1] ) {
				mapped.controller_action = path[1].split(/[?&#]/)[0];
			} else if (!path[1]) {
				mapped.controller_action = 'index';
			}
		}
	}

	mapped.controller	= mapped.controller_parent + '_' + mapped.controller_action;
	mapped.method		= request.method;

	return mapped;
}

function getUrlParameters (path) {
	var queries, obj = {};

	queries = path[1] ? path[1].split('?')[1] : null;

	if (!queries || !queries.length) {
		return obj;
	}

	queries = queries.split('&');

	queries.forEach(function (query) {
		obj[query.split('=')[0]] = query.split('=')[1] ;
	});

	return obj;
}