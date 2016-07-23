$(document).ready(function() {
			    $('#fullpage').fullpage();
			});


var CartoDB_DarkMatterNoLabels = L.tileLayer('http://{s}.basemaps.cartocdn.com/dark_nolabels/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="http://cartodb.com/attributions">CartoDB</a>',
	subdomains: 'abcd',
	maxZoom: 19
});

var Thunderforest_Transport = L.tileLayer('http://{s}.tile.thunderforest.com/transport/{z}/{x}/{y}.png', {
	attribution: '&copy; <a href="http://www.opencyclemap.org">OpenCycleMap</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
	maxZoom: 19
});


var baseMaps = {
	"Transport": Thunderforest_Transport,
	"Dark": CartoDB_DarkMatterNoLabels
};


var map = L.map('map', {
	layers: [Thunderforest_Transport]
	}).setView([38.37652, -75.63606], 13);

L.control.layers(baseMaps).addTo(map);