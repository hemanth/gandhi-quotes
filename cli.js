#!/usr/bin/env node
'use strict';
var pkg = require('./package.json');
var GandhiSaid = require('./index');

if (process.argv.indexOf('-v') !== -1 || process.argv.indexOf('--version') !== -1) {
	console.log(pkg.version);
	return;
}

console.log(GandhiSaid());
