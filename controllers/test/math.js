module.exports = {
	GET: function *() {
		var a = yield math();
		this.body = a;
	}
}

function *math() {
	return 15*2;
}