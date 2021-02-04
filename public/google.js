// const { response } = require("express");

// function initMap() {
//     const myLatlng = { lat: -25.363, lng: 131.044 };
//     const map = new google.maps.Map(document.getElementById("map"), {
//         zoom: 4,
//         center: myLatlng,
//     });
//     // Create the initial InfoWindow.
//     let infoWindow = new google.maps.InfoWindow({
//         content: "Click the map to get Lat/Lng!",
//         position: myLatlng,
//     });

    
//     infoWindow.open(map);
//     // Configure the click listener.
//     map.addListener("click", (mapsMouseEvent) => {
//         // Close the current InfoWindow.
//         infoWindow.close();
//         // Create a new InfoWindow.
//         infoWindow = new google.maps.InfoWindow({
//             position: mapsMouseEvent.latLng,
//         });
//         const abc = mapsMouseEvent.latLng.toJSON();
//         const json = fetch_api_result(abc).then(res => {
//             return res
//         });
//         json.then((response) => {
//             console.log(response)
//             weather = response.weather.data.current.weather;
//             // air = response.air_quality?.results[0]?.measurements[0];

//             infoWindow.setContent(
//                 `${weather.ts} and ${response.weather.data.location.coordinates[0]}`);
//             infoWindow.open(map);

//         })

//     });
// }

// async function fetch_api_result(abc) {
//     const api_url = `weather/${abc.lat},${abc.lng}`;
//     const response = await fetch(api_url);
//     const json = await response.json();
//     return json;
// } 