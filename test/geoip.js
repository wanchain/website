var geoip = require('geoip-lite');

var ip = "103.6.85.136";
var geo = geoip.lookup(ip);

console.log(geo);