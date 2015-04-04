var Sequelize = require('sequelize'),
db = new Sequelize('heroku_843fe8e240314ad', 'bc2a952385cf9a', '98b0eeeb', {
	host: 'us-cdbr-iron-east-02.cleardb.net',
	dialect: 'mysql',

	pool: {
		max: 5,
		min: 0,
		idle: 10000
	},
});

module.exports  = {
	setup: function setup (app) {
		global.db = db;
		app.use(function *(next) {
			this.db =  db;
			yield next;
		});
	}
}