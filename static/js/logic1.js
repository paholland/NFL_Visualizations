// var myMap = L.map("map", {
//     center: [38.563, -94.878],
//     zoom: 5
// });

// L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
//   attribution: "© <a href='https://www.mapbox.com/about/maps/'>Mapbox</a> © <a href='http://www.openstreetmap.org/copyright'>OpenStreetMap</a> <strong><a href='https://www.mapbox.com/map-feedback/' target='_blank'>Improve this map</a></strong>",
//   tileSize: 512,
//   maxZoom: 18,
//   zoomOffset: -1,
//   id: "mapbox/streets-v11",
//   accessToken: API_KEY
// }).addTo(myMap);

// d3.json('getData_draft', function(playerData) {
//     d3.select("body")
//     .selectAll("p")
//     .data(playerData)
//     .enter()
//     .append("p")
//     .text(function(d) {
//         return d.homeState
//     })

// });


// var playerArray = [];

// for (var i = 0; i < playerData.length; i++){
//     var player = playerData[i].nameFull;
//     if (player) {
//         playerArray.push({ player: playerData[i].nameFull, position: playerData[i].position, homestate: playerData[i].homeState, latlng: (playerData[i].Latitude, playerData[i].Longitude) });

//     }

// L.circle(playerArray[i].latlng, {
//     fillOpacity: 0.75,
//     color: "white",
//     fillColor: "red",
//     radius: 10
// }).addTo(myMap)
    
// };

// //draft_dict["playerId"] = r[1]
// draft_dict["draft"] = r[2]
// draft_dict["round"] = r[3]
// draft_dict["pick"] = r[4]
// draft_dict["draftTradeValue"] = r[5]
// draft_dict["draftTeam"] = r[6]
// draft_dict["position"] = r[7]
// draft_dict["teamId"] = r[8]
// draft_dict["nameFull"] = r[11]
// draft_dict["college"] = r[12]
// draft_dict["heightInches"] = r[13]
// draft_dict["weight"] = r[14]
// draft_dict["homeCity"] = r[17]
// draft_dict["homeState"] = r[18]
// draft_dict["Latitude"] = r[21]
// draft_dict["Longitude"] = r[22]

// Loop through data
// playerData.forEach(function(data) {
//     data.fullName = +data.fullName
//     data.homeState = +data.homeState
//     data.Latitude = +data.Latitude
//     data.Longitude = +data.Longitude



// console.log(total_state)

//d3.json('getData_draft', function(playerData)

d3.json('getData_draft', function(playerData) {
    //console.log(playerData)
    playerData.forEach(function(data) {
        playerData.homeState = +homeState
    })
})
