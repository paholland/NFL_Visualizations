// Define SVG area dimensions
var svgWidth = 800;
var svgHeight = 660;

// Define the chart's margins as an object
var chartMargin = {
    top: 30,
    right: 30,
    bottom: 30,
    left: 40
};

// Define dimensions of the chart area
var chartWidth = svgWidth - chartMargin.left - chartMargin.right;

var chartHeight = svgHeight - chartMargin.top - chartMargin.bottom;

// Select body, append SVG area to it, and set the dimensions
var svg = d3.select("body")
    .append("svg")
    .attr("height", svgHeight)
    .attr("width", svgWidth);

// Append a group to the SVG area and shift ('translate') it to the right and to the bottom
var chartGroup = svg.append("g")
    .attr("transform", `translate(${chartMargin.left}, ${chartMargin.top})`);

// Load data from csv
d3.csv("../static/data/playerState.csv").then(function(playerData) {
    console.log(playerData)

// Cast num_player value to a number for each state
playerData.forEach(function(d) {
    d.num_players = +d.num_players;
});

// Configure a band scale for the horizontal axis
var xBandScale = d3.scaleBand()
    .domain(playerData.map(d => d.state))
    .range([0, chartWidth])
    .padding(0.1);

// Create a linear scale for vertical axis
var yLinearScale = d3.scaleLinear()
    .domain([0, d3.max(playerData, d => d.num_players)])
    .range([chartHeight, 0]);

// Create two new functions passing our scales in as arguments creating chart's axes
var bottomAxis = d3.axisBottom(xBandScale);
var leftAxis = d3.axisLeft(yLinearScale).ticks(10);

// Append two SVG group elements

chartGroup.append("g")
.call(leftAxis);

chartGroup.append("g")
.attr("transform", `translate(0, ${chartHeight})`)
.call(bottomAxis);

// Create one SVG rectangle per piece of playerData

chartGroup.selectAll(".bar")
    .data(playerData)
    .enter()
    .append("rect")
    .attr("class", "bar")
    .attr("x", d => xBandScale(d.state))
    .attr("y", d => yLinearScale(d.num_players))
    .attr("width", xBandScale.bandwidth())
    .attr("height", d => chartHeight - yLinearScale(d.num_players));


}).catch(function(error) {
    console.log(error);
});