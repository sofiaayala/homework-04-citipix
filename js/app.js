$(function(){

  //listen for a click even on submit and do the function handleSubmit
  $("#submitBtn").click(handleSubmit);

  //city equals field input, pull the input from field and store it as var city
  function handleSubmit(event) {
    event.preventDefault();
    var city = $("#cityType").val();
    console.log("city", city)
  }

  //listen for a click even on submit and do the function changeBackground
  $("#submitBtn").click(changeBackground);

  //if input is "New York" or "New York City" or "NYC" change the background of the page nyc.jpg
  //if input is "San Francisco" or "SF" or "Bay Area" change the background of the page sf.jpg
  //if input is "Los Angeles" or "LA" or "LAX" change the background of the page la.jpg
  //if input is "Austin" or "ATX" change the background of the page austin.jpg
  //if input is "Sydney" or "SYD" change the background of the page sydney.jpg
  //if anything else display default
  function changeBackground(event) {
    event.preventDefault();
    var city = $("#cityType").val();

    if (city === "New York" || "New York City" || "NYC") {
      console.log("Input was New York");
      $("body").attr("class", "nyc");
    } else if (city === "San Francisco" || "SF" || "Bay Area") {
      // console.log("Input was San Fran");
      $("body").attr("class", "sf");
    } else if (city === "Los Angeles" || "LA" || "LAX") {
      // console.log("Input was Los Angeles");
      $("body").attr("class", "la");
    } else if (city === "Austin" || "ATX") {
      // console.log("Input was Austin");
      $("body").attr("class", "austin");
    } else if (city === "Sydney"|| "SYD") {
      // console.log("Input was Sydney");
      $("body").attr("class", "sydney");
    } else {
      // console.log("Input was none of the above");
      $("body").attr("class", "");
    }
    $("#cityType").val("");
  }

});