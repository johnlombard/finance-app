// on click of the submit button gathers information selected in the search bar
$("#submit").on("click", function(event) {
    console.log(0);
event.preventDefault()

var searchTerm = $("#search").val().trim();
console.log(searchTerm);

}





);




  function grabURL () {
    var ticker = "aapl";  
    var queryURL = "https://api.iextrading.com/1.0/stock/" + ticker + "/batch?types=quote,news,chart&range=1m&last=10";
      

    $.ajax({
        url: queryURL,
        method: "GET"
      }).then(function(response) {
        console.log(response)
        console.log(response.quote.symbol)
        console.log(response.quote.companyName)
      });
    
  }

  grabURL();