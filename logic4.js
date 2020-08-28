// to do an external api call with d3.json() need to use .then()
d3.json('/getData_draft').then(data => {
    console.log(data)
 

// Arrays of players physical attributes by position
// var physical_attributesQB  = [];
// var physical_attributesRB  = [];
// var physical_attributesFB  = [];
// var physical_attributesWR  = [];
// var physical_attributesTE  = [];


// Starting a rating count for physical attributes (hight and weight) by position
// var total = 0;

// Arrays to hold hight and weight by position.. Offence team positions
var QBh = [];
var QBw = [];

var RBh = [];
var RBw = [];

var FBh = [];
var FBw = [];

var WRh = [];
var WRw = [];

var TEh = [];
var TEw = [];

// Arrays to hold hight and weight by position.. Deffence team positions

var LBh = [];
var LBw = [];

var CBh = [];
var CBw = [];

var FBh = [];
var FBw = [];

var Sh = [];
var Sw = [];

// Arrays to hold hight and weight by position.. Special team positions

var Kh = [];
var Kw = [];

var Ph = [];
var Pw = [];

var LSh = [];
var LSw = [];

var RSh = [];
var RSw = [];


// Useing forEach to call a function on each element

data.forEach(player_o => {

 
    if (player_o.position === "QB") {
        QBh.push(player_o.heightInches);
        QBw.push(player_o.weight)
      }
    
      else if (player_o.position === "RB") {
        RBh.push(player_o.heightInches);
        RBw.push(player_o.weight)
      }

      else if (player_o.position === "FB") {
        FBh.push(player_o.heightInches);
        FBw.push(player_o.weight)

      }

      else if (player_o.position === "WR") {
        WRh.push(player_o.heightInches);
        WRw.push(player_o.weight)
      }

      else if (player_o.position === "TE") {
        TEh.push(player_o.heightInches);
        TEw.push(player_o.weight)

      }
    })

   console.log(d3.mean(QBh))
   avgQBh= d3.mean(QBh)

   console.log(d3.mean(QBw))
   avgQBw= d3.mean(QBw)

   console.log(d3.mean(RBh))
   avgRBh= d3.mean(RBh)

   console.log(d3.mean(RBw))
   avgRBw= d3.mean(RBw)

   console.log(d3.mean(FBh))
   avgFBh= d3.mean(FBh)

   console.log(d3.mean(FBw))
   avgFBw= d3.mean(FBw)

   console.log(d3.mean(WRh))
   avgWRh= d3.mean(WRh)

   console.log(d3.mean(WRw))
   avgWRw= d3.mean(WRw)

   console.log(d3.mean(TEh))
   avgWRh= d3.mean(TEh)

   console.log(d3.mean(TEw))
   avgWRw= d3.mean(TEw)


data.forEach(player_d => {

   
    if (player_d.position === "LB") {
        LBh.push(player_d.heightInches);
        LBw.push(player_d.weight)
      }
     
      else if (player_d.position === "CB") {
        CBh.push(player_d.heightInches);
        CBw.push(player_d.weight)
      }

      else if (player_d.position === "S") {
        Sh.push(player_d.heightInches);
        Sw.push(player_d.weight)

      }

    })

    console.log(d3.mean(LBh))
    avgLBh= d3.mean(LBh)

    console.log(d3.mean(LBw))
    avgLBw= d3.mean(LBw)
 
    console.log(d3.mean(CBh))
    avgCBh= d3.mean(CBh)

    console.log(d3.mean(CBw))
    avgCBw= d3.mean(CBw)

    console.log(d3.mean(Sh))
    avgSh= d3.mean(Sh)
 
    console.log(d3.mean(Sw))
    avgSw= d3.mean(Sw)


data.forEach(player_s => {

    if (player_s.position === "K") {
          Kh.push(player_s.heightInches);
          Kw.push(player_s.weight)
        }
        
    else if (player_s.position === "P") {
          Ph.push(player_s.heightInches);
          Pw.push(player_s.weight)
        }
  
    else if (player_s.position === "LS") {
          LSh.push(player_s.heightInches);
          LSw.push(player_s.weight)
  
        }
  
      })
  
      console.log(d3.mean(Kh))
      avgKh= d3.mean(Kh)
  
      console.log(d3.mean(Kw))
      avgKw= d3.mean(Kw)
   
      console.log(d3.mean(CBh))
      avgCBh= d3.mean(CBh)
   
      console.log(d3.mean(CBw))
      avgCBw= d3.mean(CBw)

      console.log(d3.mean(Sh))
      avgSh= d3.mean(Sh)
  
      console.log(d3.mean(Sw))
      avgSw= d3.mean(Sw)
  

      // console.log(d3.mean(RSh))
      // avgRSh= d3.mean(RSh)
   
      // console.log(d3.mean(RSw))
      // avgRSw= d3.mean(RSw)

    
    
// Find the average by position on the field attribute 
// var avgQBh = total/physical_attributesQBh.length;
// var avgQBw = total/physical_attributesQBw.length;

// var avgRBh = total/physical_attributesRBh.length;
// var avgRBw = total/physical_attributesRBw.length;

// var avgFBh = total/physical_attributesFBh.length;
// var avgFBw = total/physical_attributesFBw.length;

// var avgWRh = total/physical_attributesWRh.length;
// var avgWRw = total/physical_attributesWRw.length;

// var avgTEh = total/physical_attributesTEh.length;
// var avgTEw = total/physical_attributesTEw.length;


// Store the length of movie ratings
// var totalQBh = QBh.length;
// var totalQBw = QBw.length;

// var totalRBh = RBh.length;
// var totalRBw = RBw.length;

// var totalFBh = FBh.length;
// var totalQBw = QBw.length;

// var totalWRh = WRh.length;
// var totalQBw = QBw.length;

// var totalTEh = TEh.length;
// var totalTEw = TEw.length;


// Print results
// console.log("---------");

// console.log(`There are ${numGoodMovies} good movies.`);
// console.log(`There are ${numOkMovies} ok movies.`);
// console.log(`There are ${numBadMovies} bad movies.`);

// console.log(`The average hight of QB is ${avgQBh}.`);
// console.log("---------");
// console.log(`The average weight of RB is ${avgQBw}.`);
// console.log("---------");

// console.log(`The average hight of FB is ${avgRBh}.`);
// console.log("---------");
// console.log(`The average weight of WR is ${avgRBw}.`);
// console.log("---------");

// console.log(`The average hight of FB is ${avgFBh}.`);
// console.log("---------");
// console.log(`The average weight of WR is ${avgFBw}.`);
// console.log("---------");

// console.log(`The average hight of TE is ${avgWRh}.`);
// console.log("---------");
// console.log(`The average weight of FB is ${avgWRw}.`);
// console.log("---------");

// console.log(`The average hight of WR is ${avgTEh}.`);
// console.log("---------");
// console.log(`The average weight of TE is ${avgTEw}.`);
// console.log("---------");


// Visualization1 code here using Frappe js framework

import { Chart } from "frappe-charts/dist/frappe-charts.esm.js";
import "frappe-charts/dist/frappe-charts.min.css";

new Chart("#chart", {
  // or DOM element
  data: {
    labels: [
      "height",
      "weight",
      
    ],

    datasets: [
      {
        name: "QB",
        chartType: "bar",
        values: [25, 40]
      },
      {
        name: "RB",
        chartType: "bar",
        values: [25, 50]
      },
    
    ],

    yMarkers: [{ label: "Marker", value: 70, options: { labelPos: "left" } }],
    yRegions: [
      { label: "Region", start: 0, end: 50, options: { labelPos: "right" } }
    ]
  },

  title: "NFL Players Physical Attributes",
  type: "axis-mixed", // or 'bar', 'line', 'pie', 'percentage'
  height: 300,
  colors: ["#696969", "	#DC143C", "#778899"],
  axisOptions: {
    xAxisMode: "tick",
    xIsSeries: true
  },
  barOptions: {
    stacked: false,
    spaceRatio: 0.5
  },
  tooltipOptions: {
    formatTooltipX: d => (d + "").toUpperCase(),
    formatTooltipY: d => d + " pts"
  }
});






})