'use strict';

var path = require('path');

//jscs:disable maximumLineLength
module.exports = {
	dirname: path.dirname(__dirname),
	app: {
		name: process.env.APP_NAME || 'FreeIf',
		domain: process.env.APP_DOMAIN || 'Freeif.com'
	},
	env: 'development',
	security: {
		salt: 'DYhG93b0qyJfIxfs3guVoUgbWwvniR2G0FgaC9mj',
		cipherSeed: '76869309657453542496748683646',
		jwt: 'xH(wQ&BHmc3qS%iIlimTi$21_jfTn$itYo$mDw1b'
	}
};
//jscs:enable maximumLineLength