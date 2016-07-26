var Thunderforest_Pioneer = L.tileLayer('http://{s}.tile.thunderforest.com/pioneer/{z}/{x}/{y}.png', {
						attribution: '&copy; <a href="http://www.thunderforest.com/">Thunderforest</a>, &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
					});

var map = L.map('map').setView([39.5, -98.35], 5);
Thunderforest_Pioneer.addTo(map);
var popup = L.popup();

allYears =	L.geoJson(allYears, {
				pointToLayer: function (feature, latlng) {
				return L.circleMarker(latlng, yearStyle);
				},
				onEachFeature: function (feature, layer) {
				layer.bindPopup("<b>Year Point</b><br/>" + 
				"Team: " + feature.properties.team +
				"<br>Frequency: " + feature.properties.frequency);
				}
				}).addTo(map);
				
				
var sidebar = L.control.sidebar('sidebar', {
	closeButton: true,
	position: 'left'
});
map.addControl(sidebar);


$('#info').click(function(){
	sidebar.toggle();
});


