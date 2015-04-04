var crypto	= require('crypto');

module.exports = {
	passwordEncrypt: function (password) {
		return crypto
			.createHash('sha1')
			.update(config.security.salt + password)
			.digest('hex');
	}
};