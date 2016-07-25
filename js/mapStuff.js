var Thunderforest_Pioneer = L.tileLayer('http://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png', {
						attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
					});

var map = L.map('map').setView([39.23225, -98.39355], 5);
Thunderforest_Pioneer.addTo(map);
var popup = L.popup();

// Loading Leaflet Sidebar
var sidebar = L.control.sidebar('sidebar', {
	position: 'left'
});

map.addControl(sidebar);

setTimeout(function () {
	sidebar.show();
}, 500);

L.geoJson(allYears, {
}).addTo(map);

var popup = L.popup();
function onMapClick(e) {
	popup
		.setLatLng(e.latlng)
		.setContent("You clicked the map at " + e.latlng.toString())
		.openOn(map);
}
map.on('click', onMapClick);