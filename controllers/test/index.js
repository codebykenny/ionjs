module.exports = {
	GET: function *() {
		var result,
			_this = this;

		result = yield Account.findOne({id: 1});

		this.body = result;

		console.log("You're in the base of the test controller");
	}
}