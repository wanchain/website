var geoip = require('geoip-lite');

var ip = "221.220.97.195";
var geo = geoip.lookup(ip);

console.log(geo['country']);