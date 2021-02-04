const mymap = L.map('checkinMap').setView([0, 0], 1);
const attribution ='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors';
//const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
const tileUrl =
  'https://{s}.tile.openstreetmap.de/tiles/osmde/{z}/{x}/{y}.png';
const tiles = L.tileLayer(tileUrl, { attribution });
tiles.addTo(mymap);

getData();
async function getData() {
  const response = await fetch('/api_latlon_forecast');
  const data = await response.json();
console.log("check",data);
  for (item of data) {
    const marker = L.marker([item.weather.lat, item.weather.lon]).addTo(mymap);
    let txt = `The weather here at ${item.weather.city_name}&deg;,
    ${item.weather.city_name}&deg; is ${item.weather.city_name} with
    a temperature of ${item.weather.city_name}&deg; C.`;

    // if (item.air.value < 0) {
    //   txt += 'No air quality reading.';
    // } else {
    //   txt += `The concentration of particulate matter 
    // (${item.city}) is ${item.air.value} 
    // ${item.air.unit} last read on ${item.air.lastUpdated}`;
    // }
    marker.bindPopup(txt);
  }
  console.log(data);
}