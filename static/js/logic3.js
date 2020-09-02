   
// Read Into NFL Data 
    d3.json('/getData_draft').then(function(data) {
    tableDisplay(data);

  
  
  // function to display NFL Data
      function tableDisplay(nflData) {
      var tbody = d3.select("tbody");
      Array.from(nflData).forEach(nflRecord => {
      var row = tbody.append("tr");
      Object.entries(nflRecord).forEach(([key, value]) => {
      var cell = row.append("td");
        cell.html(value);
      });
    });
  };
  
  // clear the table for new data
  function deleteTbody() {
    d3.select("tbody")
      .selectAll("tr").remove()
      .selectAll("td").remove();
  };
    
  // initial display of all NFL Data
  console.log(data);
  // tableDisplay(tableData);
  
  // 'Filter Table' button
  var button = d3.select("#filter-btn");
  
  //function filterTable(event){};
  
  // filter the database
  button.on("click", function(event) {
    
    d3.event.preventDefault();
    deleteTbody();
    
    var filteredData = data;
    var inputId = document.getElementsByClassName("form-control");
  
    console.log(inputId);
  
    // iterate through all the input fields
    for (var i = 0; i < inputId.length; i++) {
      
      var idName = inputId[i].id;
      var field = d3.select("#" + idName).property("value");
      
      // treat empty or space-only fields as a search for ALL for that field
      if (field.trim() !== "") {
      var filteredData = filteredData.filter(nflDatas => {
        //var filteredData = Object.entries(filteredData).filter(nflDatas =>
          // match as case insensitive
        if (nflDatas[idName] !== null ) {
         console.log (nflDatas[idName])
         console.log (field)
         return nflDatas[idName].toUpperCase().trim() === field.toUpperCase().trim(); 
        }
        else {false} 
      });
    };
  }
    // display message if no records found
    if (filteredData.length == 0) {
      d3.select("tbody")
        .append("tr")
        .append("td")
          .attr("colspan", 7)
          .html("<h4>No Records Found</h4>");
    };
    
    // display the database
    console.log(filteredData);
    tableDisplay(filteredData);
  });
  
}); 
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  