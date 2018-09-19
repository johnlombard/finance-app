//search for company
//grab company information

//GRABBING INFO
// HTTP /stock/aapl/company
//Exchange + Ticker
// Logo
// HTTP /stock/aapl/logo
//Price 
// %change
//CEO
// push to html

// grab Peers 
// HTTP /stock/aapl/peers
// Peers (with their ticker and price)

// Grab sector
// HTTP /stock/market/sector-performance
//Sector with performance

//grab news
// HTTP /stock/aapl/news
//GRABBING INFO
//news
//push to html

//grab Fin stats
// HTTP /stock/aapl/stats
//PE
// Market Cap
//52 H/L
//More ratios (under key stats)


// Ideas:
// Watchlist



// on click of the submit button gathers information selected in the search bar
$("#submit").on("click", function (event) {

    event.preventDefault()

    var searchTerm = $("#search").val().trim();
    console.log(searchTerm);
});

// Company information
function companyData(response) {


    // add company name
    $("#name").append("Company Name: " + response.quote.companyName);

    // add ticker and exchange
    $("#xticker").append(response.quote.primaryExchange + ": " + response.quote.symbol);

    //price
    $("#price").append("Price:  " + response.quote.latestPrice);

    //amount change
    $("#priceChange").append("Price Change:  " + response.quote.change);

    //percent change 
    $("#percentChange").append("Percent Change:  " + (response.quote.changePercent * 100) + "%");
};

// Add Logo
function addLogo() {
    // Adds logo TODO
};


// Peer and News information
function peerNewsData(response) {
    //add company details
    $("#sector").append("Sector: " + response.quote.sector);

    // add headlines TODO

};

// Ratios and other financial data
function finData(response) {
    //52 Week High
    $("#high").append("52 Week High:  " + response.quote.week52High);

    //52 Week Low
    $("#low").append("52 Week Low:  " + response.quote.week52Low);

    // PE ratio
    $("#pe").append("P/E Ratio:  " + response.quote.peRatio);

};


function addNews(response) {
    for (i = 0; i < 4; i++) {
        var articleContainer = $("<li>");
        var newArticle = $("<a>");
        newArticle.attr("href", response.articles[i].url);
        newImage = $("<img>");
        newImage.attr("src", response.articles[i].urlToImage);
        newImage.attr("width", 50);
        newArticle.text(response.articles[i].title);
        newArticle.append(newImage);
        articleContainer.append(newArticle);
        $("#articles").append(articleContainer);
    }
}





function grabURL() {

    var ticker = "aapl";
    var queryURL = "https://api.iextrading.com/1.0/stock/" + ticker + "/batch?types=quote,news,chart&range=1m&last=10";


    $.ajax({
        url: queryURL,
        method: "GET"
    }).then(function (response) {
        companyData(response);
        peerNewsData(response);
        finData(response);

        var newsUrl = 'https://newsapi.org/v2/everything?q=' + response.quote.companyName + '&sortBy=popularity&apiKey=efb4592ca08a4b549ce0f2424f9180dd';

        $.ajax({
            url: newsUrl,
            method: "GET"
        }).then(function (response) {
            console.log(response);
            addNews(response);
        });

    });

















}

grabURL();