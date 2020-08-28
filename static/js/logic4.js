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

// see if we can round that
  // console.log(d3.round((mean(QBh))
  // avgQBh = d3.round((mean(QBh)



// end or see if we can round that


  console.log(d3.mean(QBh))
  avgQBh = d3.mean(QBh)

  console.log(d3.mean(QBw))
  avgQBw = d3.mean(QBw)

  console.log(d3.mean(RBh))
  avgRBh = d3.mean(RBh)

  console.log(d3.mean(RBw))
  avgRBw = d3.mean(RBw)

  console.log(d3.mean(FBh))
  avgFBh = d3.mean(FBh)

  console.log(d3.mean(FBw))
  avgFBw = d3.mean(FBw)

  console.log(d3.mean(WRh))
  avgWRh = d3.mean(WRh)

  console.log(d3.mean(WRw))
  avgWRw = d3.mean(WRw)

  console.log(d3.mean(TEh))
  avgTEh = d3.mean(TEh)

  console.log(d3.mean(TEw))
  avgTEw = d3.mean(TEw)


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
  avgLBh = d3.mean(LBh)

  console.log(d3.mean(LBw))
  avgLBw = d3.mean(LBw)

  console.log(d3.mean(CBh))
  avgCBh = d3.mean(CBh)

  console.log(d3.mean(CBw))
  avgCBw = d3.mean(CBw)

  console.log(d3.mean(Sh))
  avgSh = d3.mean(Sh)

  console.log(d3.mean(Sw))
  avgSw = d3.mean(Sw)


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
  avgKh = d3.mean(Kh)

  console.log(d3.mean(Kw))
  avgKw = d3.mean(Kw)

  console.log(d3.mean(Ph))
  avgPh = d3.mean(Ph)

  console.log(d3.mean(Pw))
  avgPw = d3.mean(Pw)

  console.log(d3.mean(LSh))
  avgLSh = d3.mean(LSh)

  console.log(d3.mean(LSw))
  avgLSw = d3.mean(LSw)

  // console.log(d3.mean(RSh))
  // avgRSh= d3.mean(RSh)

  // console.log(d3.mean(RSw))
  // avgRSw= d3.mean(RSw)

  // //  style tag for frappe chart 
  //   <style>
  //   body {
  //     font-family: sans-serif;
  //   }

  //   </style>

  // Visualization1 code here using Frappe js framework



  let chart = new frappe.Chart("#chart", { // or DOM element
    data: {
      labels: ["Average Height by Position", "Average Weight by Position"],
      datasets: [
        {
          name: "QB",
          chartType: "bar",
          values: [avgQBh, avgQBw]
        },
        {
          name: "RB",
          chartType: "bar",
          values: [avgRBh, avgRBw]
        },
        {
          name: "FB",
          chartType: "bar",
          values: [avgFBh, avgFBw]
        },
        {
          name: "WR",
          chartType: "bar",
          values: [avgWRh, avgWRw]
        },
        {
          name: "TE",
          chartType: "bar",
          values: [avgTEh, avgTEw]
        }
      ],


      yMarkers: [{
        label: "Marker", value: 0,
        options: { labelPos: 'left' }
      }],
      yRegions: [{
        label: "Region", start: 0, end: 50,
        options: { labelPos: 'right' }
      }]
    },

    title: "NFL Offense Team Positions, Average Hight and Average Weight",
    type: 'axis-mixed', // or 'bar', 'line', 'pie', 'percentage'
    height: 300,
    colors: ["#D3D3D3", "#C0C0C0", "#A9A9A9", "#808080", "#696969"],

    tooltipOptions: {
      formatTooltipX: d => (d + '').toUpperCase(),
      formatTooltipY: d => d + '',
    }
  });

  chart.export();

// chart2 here

  let chart2 = new frappe.Chart("#chart2", { // or DOM element
    data: {
      labels: ["Average Height by Position", "Average Weight by Position"],
      datasets: [
        {
          name: "LB",
          chartType: "bar",
          values: [avgLBh, avgLBw]
        },
        {
          name: "CB",
          chartType: "bar",
          values: [avgCBh, avgCBw]
        },
        {
          name: "S",
          chartType: "bar",
          values: [avgSh, avgSw]
        }
    
      ],

      yMarkers: [{
        label: "Marker", value: 0,
        options: { labelPos: 'left' }
      }],
      yRegions: [{
        label: "Region", start: 0, end: 50,
        options: { labelPos: 'right' }
      }]
    },

    title: "NFL Deffense Team Positions, Average Hight and Average Weight",
    type: 'axis-mixed', // or 'bar', 'line', 'pie', 'percentage'
    height: 300,
    colors: ['#DC143C', '#FF0000', '#8B0000'],

    tooltipOptions: {
      formatTooltipX: d => (d + '').toUpperCase(),
      formatTooltipY: d => d + '',
    }
  });

  chart2.export();

  // chart3 here

  let chart3 = new frappe.Chart("#chart3", { // or DOM element
    data: {
      labels: ["Average Height by Position", "Average Weight by Position"],
      datasets: [
        {
          name: "K",
          chartType: "bar",
          values: [avgKh, avgKw]
        },
        {
          name: "P",
          chartType: "bar",
          values: [avgPh, avgPw]
        }

      ],

      yMarkers: [{
        label: "Marker", value: 0,
        options: { labelPos: 'left' }
      }],
      yRegions: [{
        label: "Region", start: 0, end: 50,
        options: { labelPos: 'right' }
      }]
    },

    title: "NFL Special Teams Positions, Average Hight and Average Weight",
    type: 'axis-mixed', // or 'bar', 'line', 'pie', 'percentage'
    height: 300,
    colors: ['#696969', '	#000000'],

    tooltipOptions: {
      formatTooltipX: d => (d + '').toUpperCase(),
      formatTooltipY: d => d + '',
    }
  });

  chart2.export();


})