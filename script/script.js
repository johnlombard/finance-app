// Replace images has bugs
// Invalid ticker stays on the page

// Ideas:
// Watchlist




var config = {
    apiKey: "AIzaSyB9TxxGUuGiUSxmRqS5e33OLIvB7zkH-sM",
    authDomain: "finance-app-a3ffe.firebaseapp.com",
    databaseURL: "https://finance-app-a3ffe.firebaseio.com",
    projectId: "finance-app-a3ffe",
    storageBucket: "finance-app-a3ffe.appspot.com",
    messagingSenderId: "232411442269"
};
firebase.initializeApp(config);

var dataRef = firebase.database();


// Company information
function companyData(response) {


    // add company name
    $("#name").text(response.quote.companyName);

    // add ticker and exchange
    $("#exchange").text("Exchange: " + response.quote.primaryExchange);
    $("#ticker").text(response.quote.symbol);

    $("#ceo").text("CEO: " + response.company.CEO);

    //price
    $("#price").text("Price:  " + response.quote.latestPrice);

    // Peers
    $("#peers").text("Peers: " + response.peers);



    //amount change
    $("#priceChange").text("Price Change:  " + response.quote.change);
    if (Math.sign(response.quote.change) === -1) {
        $(".split.left").css("background-color", "red");
        $(".navbar, navbar-expand-lg").css("background-color", "red");

    }
    else {
        $(".split.left").css("background-color", "green");
        $(".navbar, navbar-expand-lg").css("background-color", "green");
    }

    //percent change 
    $("#percentChange").text("Percent Change:  " + rounding(response.quote.changePercent * 100) + "%");
    if (Math.sign(response.quote.changePercent) === -1) {
        $("#percentChange").css("color", "white");

    }
    else {
        $("#percentChange").css("color", "white");
    }


};

// Add Logo




function addLogo(response) {

    $(".logoImg").remove();
    logoImage = $("<img>");
    logoImage.attr("src", response.logo.url);
    logoImage.attr("width", 50);
    logoImage.addClass("logoImg")
    $("#logo").append(logoImage);

};

function removeIvalidTicker() {
    $("#error").html("");
    // $(".panel").remove(":contains('Invalid ticker')");
}


// Peer and News information
function peerNewsData(response) {
    //add company details
    $("#sector").text("Sector: " + response.quote.sector);


    // add headlines TODO

};

// Ratios and other financial data



function finRatios(response) {
    $("#ratios").html("<h3>"+ "Ratios" + "</h3>");
    //52 Week High
    $("#high").text("52 Week High:  " + rounding(response.quote.week52High));


    //52 Week Low
    $("#low").text("52 Week Low:  " + rounding(response.quote.week52Low));

    // PE ratio
    $("#pe").text("P/E Ratio:  " + response.quote.peRatio);

    //Div rate
    $("#divRate").text("Dividend Rate:  " + response.stats.dividendRate);


    //Div yield
    $("#divYield").text("Dividend Yield:  " + rounding(response.stats.dividendYield));

    // EPS
    $("#eps").text("EPS:  " + rounding(response.stats.ttmEPS));

    //beta
    $("#beta").text("Beta:  " + rounding(response.stats.beta));

    //market Cap
    $("#marketCap").text("Market Capitlization:  " + addCommas(response.stats.marketcap));

    // Short Ratio
    $("#shortRatio").text("Short Ratio:  " + response.stats.shortRatio);

    // pricetosales
    $("#priceToSales").text("Price to Sales:  " + rounding(response.stats.priceToSales));

    // pricetobook
    $("#priceToBook").text("Price to Book:  " + response.stats.priceToBook);

    // Return on Assets
    $("#roa").text("Return on Assets:  " + response.stats.returnOnAssets);

    // Return on Capital
    $("#roe").text("Return on Equity:  " + response.stats.returnOnEquity);

    // ProfitMargin
    $("#profitMargin").text("Profit Margin:  " + response.stats.profitMargin).html("<br>");

};


// adding the financials
function financials(response) {

    $("#revenue").text("Revenue:  " + addCommas(response.stats.revenue));

    // cash
    $("#cash").text("Cash:  " + addCommas(response.stats.cash));


    // debt
    $("#debt").text("Debt:  " + addCommas(response.stats.debt));

    // Gross Profit
    $("#grossProfit").text("Gross Profit:  " + addCommas(response.stats.grossProfit));

    $("#qHeadlines").html("<h3>Financials Past Four Quarters</h3>");

    for (i = 0; i <= 3; i++) {

        // Report Date
        $("#quarterData").append(

            // Quarter Data Change Format
            "<div id=" + response.financials.financials[i].reportDate + " >" + "<br>" + "<h5>" +
            response.financials.financials[i].reportDate + "</h5>" +

            // IS
            "<h5>Income Statement</h5>" + "<br>" +



            // Total Revenue
            "Total Revenue: " + addCommas(response.financials.financials[i].totalRevenue) + "<br>" +
            //Cost of Revenue

            "Cost of Revenue: " + addCommas(response.financials.financials[i].costOfRevenue) + "<br>" +

            //Gross Profit BOLD THIS
            "Gross Profit:  " + addCommas(response.financials.financials[i].grossProfit) + "<br>" +
            // Operating Expenses Header Needed

            //Research and Development
            "Research & Development: " + addCommas(response.financials.financials[i].researchAndDevelopment) + "<br>" +

            // Operating Expenses DOUBLE CHECK THIS NUMBER
            "Operating Expenses: " + addCommas(response.financials.financials[i].operatingExpense) + "<br>" +

            //Operating Income Bold 
            "Operating Income: " + addCommas(response.financials.financials[i].operatingIncome) + "<br>"
            //*** There are no Income from Continuing Operations 

            // Operating Revenue DOUBLE CHECK POSITION
            + "Operating Revenue: " + addCommas(response.financials.financials[i].operatingRevenue) + "<br>" +
            "Operating Gains/Losses: " + response.financials.financials[i].operatingGainsLosses + "<br>" +

            // Net Income
            "Net Income: " + addCommas(response.financials.financials[i].netIncome) + "</div>" + "<br>" +

            // Balance Sheet
            "<h5>Balance Sheet</h5>" + "<br>" +

            // Current Assets
            "Current Assets: " + addCommas(response.financials.financials[i].currentAssets) + "<br>" +


            // Current Cash
            "Current Cash: " + addCommas(response.financials.financials[i].currentCash) + "<br>" +

            // Total Cash
            "Total Cash: " + addCommas(response.financials.financials[i].totalCash) + "<br>" +

            // Total Assets
            "Total Assets: " + addCommas(response.financials.financials[i].totalAssets) + "<br>" +

            // Liabilities BOLD

            // Current Debt
            "Current Debt: " + addCommas(response.financials.financials[i].currentDebt) + "<br>" +

            // Total Debt
            "Total Debt: " + addCommas(response.financials.financials[i].totalDebt) + "<br>" +

            // Total Liabilities
            "Total Liabilities : " + response.financials.financials[i].totalLiabilities + "<br>" +

            // Shareholder Equity TODO Bold
            "Shareholder Equity: " + addCommas(response.financials.financials[i].shareholderEquity) + "<br>"
            // TODO NEED NET OUTSTANDING ASSETS???

        );
    };





};






// NEED TO RESET THIS WHEN SEARCHING FOR NEW COMPANY
function addNews(response) {
    for (i = 0; i < 7; i++) {
        var articleContainer = $("<li>");
        var newArticle = $("<a>");
        newArticle.attr("href", response.articles[i].url);
        // newImage = $("<img>");
        // newImage.attr("src", response.articles[i].urlToImage);
        // newImage.attr("width", 50);
        newArticle.text(response.articles[i].title);
        // newArticle.append(newImage);
        articleContainer.append(newArticle);
        $("#articles").append(articleContainer);
    };
    $("#news").html("<h3>News (Click on a headline)</h3>");
};

function addCommas(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

function rounding(number) {
    return Math.round(number * 100) / 100;
};

function updatePage(ticker) {
    // clears articles from previous company
    $("#articles").html("");
    $("svg").remove();

    var finURL = "https://api.iextrading.com/1.0/stock/" + ticker + "/batch?types=company,quote,financials,stats,logo,peers,&range=1m&last=10";
    var chartURL = "https://api.iextrading.com/1.0/stock/" + ticker + "/chart/5y";

    $.ajax({
        url: finURL,
        method: "GET",
        error: function () {
            $("#error").html("Invalid ticker! Please Try Again.");
            $("#logo").replaceWith("");
        }
    }).then(function (response) {
        companyData(response);
        peerNewsData(response);
        removeIvalidTicker();
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



            // sets dimensions of canvas/graph
            var margin = { top: 100, right: 100, bottom: 50, left: 0 },
                width = 850 - margin.left - margin.right,
                height = 350 - margin.top - margin.bottom;

            // Parse the date / time
            var parseDate = d3.time.format("%Y-%m-%d").parse;

            // Parse the time for the Day

            var parseMinute = d3.time.format("%H:%M").parse,
                bisectDate = d3.bisector(function (d) { return d.date; }).left,
                formatValue = d3.format(",.2f"),
                formatCurrency = function (d) { return "$" + formatValue(d); };

            // Set the ranges
            var x = d3.time.scale().range([0, width]);
            var y = d3.scale.linear().range([height, 0]);

            // Define the axes
            var xAxis = d3.svg.axis().scale(x)
                .orient("bottom").ticks(5);
            var yAxis = d3.svg.axis().scale(y)
                .orient("left").ticks(5);

            // Define the line
            var valueline = d3.svg.line()
                //.interpolate("basis")
                .x(function (d) { return x(d.date); })
                .y(function (d) { return y(d.close); });

            // Adds the svg canvas
            var svg = d3.select("#thirdpanel")
                .append("svg")
                .attr("width", width + margin.left + margin.right)
                .attr("height", height + margin.top + margin.bottom)
                .append("g")
            $.attr("transform",
                "translate(" + margin.left + "," + margin.top + ")");


            // Get the minumum Value from the array to add space at the bottom of the graph
            Array.min = function (array) {
                return Math.min.apply(Math, array);


            };
            var url = "https://api.iextrading.com/1.0/stock/" + ticker + "/chart/5y";
            // Get the data

            $.ajax({
                url: url,
                success: function (data) {

                    // Setting global variable
                    var arrayClose = [];
                    var firstPrice = null;
                    var lastPrice = null;
                    var minimum = null;
                    var result = null;
                    var lineColor = null;
                    // Get the data
                    d3.json(url, function (error, data) {
                        data.forEach(function (d) {
                            d.date = parseDate(d.date);
                            d.close = +d.close;
                            // Adding each result to the end of the array
                            arrayClose.push(d.close);
                            // Finding the minimum value in the close price in the JSON File
                            minimum = Array.min(arrayClose);
                            // Taking .05% off of graph to dynamically show white space at the bottom of the minimum value
                            result = (10 / 100) * minimum;
                            result = minimum - result;
                            // Finding first elm in array
                            firstPrice = arrayClose[0];
                            // Finding last elm in array
                            lastPrice = arrayClose[arrayClose.length - 1];
                        });
                        if (firstPrice > lastPrice) {
                            lineColor = "white";
                        } else {
                            lineColor = "white";
                        }
                        // Scale the range of the data
                        x.domain(d3.extent(data, function (d) {
                            return d.date;
                        }));
                        y.domain([result, d3.max(data, function (d) {
                            return d.close;
                        })]);
                        // Add the valueline path.
                        svg.append("path")
                            .transition()
                            .attr("class", "line")
                            .attr("stroke", lineColor)
                            .attr("d", valueline(data))
                            ;
                        // Add the X Axis
                        svg.append("g")
                            .attr("class", "x axis")
                            .attr("transform", "translate(0," + height + ")")
                            .call(xAxis);
                        // Add the Y Axis
                        svg.append("g")
                            .attr("class", "y axis")
                            .call(yAxis);
                        // Add the text label for the X axis
                        svg.append("text")
                            .attr("x", width / 2)               //Dynamically moves with the graph
                            .attr("y", height + margin.bottom)
                            .style("text-anchor", "middle")
                            .style("font-size", "12px")
                            .text("Date");
                        //Mouseover
                        var focus = svg.append("g")
                            .attr("class", "focus")
                            .style("display", "none");
                        focus.append("line")
                            .attr("class", "x-hover-line hover-line")
                            .attr("y1", 0)
                            .attr("y2", height);
                        focus.append("line")
                            .attr("class", "y-hover-line hover-line")
                            .attr("x1", width)
                            .attr("x2", width);
                        focus.append("circle")
                            .attr("r", 4.5);
                        focus.append("text")
                            .attr("x", 9)
                            .attr("dy", ".35em");
                        svg.append("rect")
                            .attr("class", "overlay")
                            .attr("width", width)
                            .attr("height", height)
                            .on("mouseover", function () {
                                focus.style("display", null);
                            })
                            .on("mouseout", function () { focus.style("display", "none"); })
                            .on("mousemove", mousemove);
                        function mousemove() {
                            var x0 = x.invert(d3.mouse(this)[0]),
                                i = bisectDate(data, x0, 1),
                                d0 = data[i - 1],
                                d1 = data[i],
                                d = x0 - d0.date > d1.date - x0 ? d1 : d0;
                            focus.attr("transform", "translate(" + x(d.date) + "," + y(d.close) + ")");
                            focus.select(".x-hover-line").attr("y2", height - y(d.close));
                            focus.select(".y-hover-line").attr("x2", width + width);
                            focus.select("text").text(formatCurrency(d.close));
                        }
                    });
                }
            });

            //     chartData(response);


            // });
        });
    });
};





dataRef.ref().on("child_added", function (childSnapshot) {
    console.log(childSnapshot.val());

    $.ajax({
        url: "https://api.iextrading.com/1.0/stock/" + childSnapshot.val().ticker + "/batch?types=company,quote,financials,stats,logo,peers,&range=1m&last=10",
        method: "GET",
        error: function () {
            $("#error").text("Invalid ticker! Please try again.")
        }
    }).then(function (response) {
        $("#watchlist").append("<tr><td>" +
        response.quote.companyName +
            " </td><td> " + response.quote.latestPrice +
            " </td><td> " + rounding(response.quote.changePercent * 100) +
            " </td><td> " + response.quote.primaryExchange +
            " </td><td> " + response.quote.sector +
            " </td>" +
            "<td><button class='viewButton' onclick='viewButton(" + '"' + childSnapshot.val().ticker + '"' + ")'>View</button></td>" +
            "</tr> ");
    });


}, function (errorObject) {
    console.log("Errors handled: " + errorObject.code);
});

function viewButton(ticker) {
    updatePage(ticker);
};


$(document).ready(function () {

    $("#submit").on("click", function (event) {

        event.preventDefault()

        var searchTerm = $("#search").val().trim();
        console.log(searchTerm);
        updatePage(searchTerm);

    });

    $("#addToList").on("click", function (event) {
        event.preventDefault();
        if ($("#name").text() !== "Company Name") {
            dataRef.ref().push({
                ticker: $("#ticker").text()
            });
        };
    });
});

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
// operatingGainsLosses ***Here
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
