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
// $("#submit").on("click", function (event) {

//     event.preventDefault()

//     var searchTerm = $("#search").val().trim();
//     console.log(searchTerm);
// });


// Company information
function companyData(response) {


    // add company name
    $("#name").text("Company Name: " + response.quote.companyName);

    // add ticker and exchange
    $("#xticker").text(response.quote.primaryExchange + ": " + response.quote.symbol);

    //price
    $("#price").text("Price:  " + response.quote.latestPrice);

    //amount change
    $("#priceChange").text("Price Change:  " + response.quote.change);

    //percent change 
    $("#percentChange").text("Percent Change:  " + (response.quote.changePercent * 100) + "%");
};

// Add Logo




function addLogo(response) {

    logoImage = $("<img>");
    logoImage.attr("src", response.logo.url);
    logoImage.attr("width", 50);
    $("#logo").html(logoImage);

};



// Peer and News information
function peerNewsData(response) {
    //add company details
    $("#sector").text("Sector: " + response.quote.sector);

    // add headlines TODO

};

// Ratios and other financial data



function finRatios(response) {
    //52 Week High

    $("#high").text("52 Week High:  " + response.quote.week52High);


    //52 Week Low
    $("#low").text("52 Week Low:  " + response.quote.week52Low);

    // PE ratio
    $("#pe").text("P/E Ratio:  " + response.quote.peRatio);

    //Div rate
    $("#divRate").text("Dividend Rate:  " + response.stats.dividendRate);


    //Div yield
    $("#divYield").text("Dividend Yield:  " + response.stats.dividendYield);

    // EPS
    $("#eps").text("EPS:  " + response.stats.ttmEPS);

    //beta
    $("#beta").text("Beta:  " + response.stats.beta);

    //market Cap
    // CHANGE FORMAT
    $("#marketCap").text("Market Capitlization:  " + response.stats.marketcap);


    // Short Ratio
    $("#shortRatio").text("Short Ratio:  " + response.stats.shortRatio);


    // pricetosales
    $("#priceToSales").text("Price to Sales:  " + response.stats.priceToSales);

    // pricetobook
    $("#priceToBook").text("Price to Book:  " + response.stats.priceToBook);

};


// adding the financials
function financials(response) {


    for (i = 0; i <= 3; i++) {

        // Report Date
        $("#quarterData").append(

            // Quarter Data Change Format
            response.financials.financials[i].reportDate + "<br>" +

            // IS
            // Revenue header needed

            // Total Revenue
            "Total Revenue: " + response.financials.financials[i].totalRevenue + "<br>" +
            //Cost of Revenue

            "Cost of Revenue: " + response.financials.financials[i].costOfRevenue + "<br>" +

            //Gross Profit BOLD THIS
            "Gross Profit:  " + response.financials.financials[i].grossProfit + "<br>" +
            // Operating Expenses Header Needed

            //Research and Development
            "Research & Development: " + response.financials.financials[i].researchAndDevelopment + "<br>" +

            // Operating Expenses DOUBLE CHECK THIS NUMBER
            "Operating Expenses: " + response.financials.financials[i].operatingExpense + "<br>" +

            //Operating Income Bold 
            "Operating Income: " + response.financials.financials[i].operatingIncome + "<br>"
            //*** There are no Income from Continuing Operations 

            // Operating Revenue DOUBLE CHECK POSITION
            + "Operating Revenue: " + response.financials.financials[i].operatingRevenue + "<br>" +
            "Operating Gains/Losses: " + response.financials.financials[i].operatingGainsLosses + "<br>" +

            // Balance Sheet Header This
            // Assets BOLD

            // Current Assets
            "Current Assets: " + response.financials.financials[i].currentAssets + "<br>" +
            
            // Current Cash
            "Current Cash: " + response.financials.financials[i].currentCash + "<br>" +

            // Total Cash
            "Total Cash: " + response.financials.financials[i].totalCash + "<br>" +

            // Total Assets
            "Total Assets: " + response.financials.financials[i].totalAssets + "<br>" +

            // Liabilities BOLD

            // Current Debt
            "Current Debt: " + response.financials.financials[i].currentDebt + "<br>" +

            // Total Debt
            "Total Debt: " + response.financials.financials[i].totalDebt + "<br>" +

            // Total Liabilities
            "Total Liabilities : " + response.financials.financials[i].totalLiabilities + "<br>" +

            // Shareholder Equity TODO Bold
            "Shareholder Equity: " + response.financials.financials[i].shareholderEquity + "<br>" +
            // TODO NEED NET OUTSTANDING ASSETS???





            // currentAssets	number
            // currentCash	number
            // totalCash	number
            // totalAssets	number

            // currentDebt	number
            // totalDebt	number
            // totalLiabilities	number

            // shareholderEquity	number


            // This maybe it 


            // Net Income Bold This
            // Net Income
            + "Net Income: " + response.financials.financials[i].netIncome + "<br>"





        );
    };

    // revenue

    // TODO Change format
    $("#revenue").text("Revenue:  " + response.stats.revenue);

    // cash
    $("#cash").text("Cash:  " + response.stats.cash);


    // debt
    $("#debt").text("Debt:  " + response.stats.debt);

    // Gross Profit
    $("#grossProfit").text("Gross Profit:  " + response.stats.grossProfit);

    // Return on Assets
    $("#roa").text("Return on Assets:  " + response.stats.returnOnAssets);

    // Return on Capital
    $("#roe").text("Return on Equity:  " + response.stats.returnOnEquity);


    // ProfitMargin
    $("#profitMargin").text("Profit Margin:  " + response.stats.profitMargin);

};





// NEED TO RESET THIS WHEN SEARCHING FOR NEW COMPANY
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

    $("#submit").on("click", function (event) {

        event.preventDefault()

        var searchTerm = $("#search").val().trim();
        console.log(searchTerm);

        // clears articles from previous company
        $("#articles").html("");

        var ticker = searchTerm;
        var finURL = "https://api.iextrading.com/1.0/stock/" + ticker + "/batch?types=company,quote,financials,stats,logo,peers,&range=1m&last=10";
        var chartURL = "https://api.iextrading.com/1.0/stock/" + ticker + "/chart/5y";
        


        $.ajax({
            url: finURL,
            method: "GET"
        }).then(function (response) {
            companyData(response);
            peerNewsData(response);

            finRatios(response);
            financials(response);
            addLogo(response);
            console.log(response);

            var newsUrl = 'https://newsapi.org/v2/everything?q=' + response.quote.companyName + '&sortBy=popularity&apiKey=efb4592ca08a4b549ce0f2424f9180dd';

            $.ajax({
                url: newsUrl,
                method: "GET"
            }).then(function (response) {
                console.log(response);
                addNews(response);
            });

                $.ajax({
                    url: chartURL,
                    method: "GET"
                }).then(function (response) {
                    console.log(response);
                    
    
            });
        });
    });





















};





grabURL();





// John's notes for financials
// IS
    // Revenue
        // totalRevenue	number
        // costOfRevenue	number
        // EQUAL grossProfit	number

    // Operating Expense
        // researchAndDevelopment	number
        // operatingExpense	number
        // operatingIncome	number
// operatingGainsLosses ***HereOR








// currentAssets	number
// currentCash	number
// totalCash	number
// totalAssets	number

// currentDebt	number
// totalDebt	number
// totalLiabilities	number

// shareholderEquity	number

// cashChange	number
// cashFlow	number
// operatingGainsLosses
