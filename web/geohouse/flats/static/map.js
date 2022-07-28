//Map
const attribution = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
const map = L.map('map')
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', { attribution: attribution }).addTo(map);
map.fitWorld();
//Funcs
function onEachFeature(feature,layer){layer.bindPopup(feature.properties.name);}
//Main
const flatsData=JSON.parse(document.getElementById('flats-data').textContent); //GeoJSON data to Leaflet
var flats=L.geoJSON(flatsData,{ //Binding popup of flats info
  onEachFeature: function(feature, layer){
    layer.bindPopup("Address: "+feature.properties.Address+"</br>Price: "+feature.properties.Price+"</br>Real price: "+(+feature.properties.Price + +feature.properties.delta)+"</br>Delta: "+feature.properties.delta);
  }
}).addTo(map);
map.setView(new L.LatLng(50.447,30.522), 11); //View map on Kiev
