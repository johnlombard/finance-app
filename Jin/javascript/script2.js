var beginSearch = function () {
    //do i need a reset?
    //$(".newstock").empty();

    for (var i = 0; i < 10; i++) {
        
        var newstock = $("<div>");
            newstock.attr({
                "class":'newstock',
                "data": randomStock//add attribute **change***
            });
        $(".newstocks").append(newstock);    
    }
}