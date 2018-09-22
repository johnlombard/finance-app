//split screen javascript 

const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

left.addEventListener("mouseenter", () => {
    container.classList.add("hover-left");
});

left.addEventListener("mouseleave", () => {
    container.classList.remove("hover-left");
});

right.addEventListener("mouseenter", () => {
    container.classList.add("hover-right");
});

right.addEventListener("mouseleave", () => {
    container.classList.remove("hover-right");
});


src="https://www.gstatic.com/firebasejs/5.5.1/firebase.js">

  // Initialize Firebase
    var config = {
    apiKey: "AIzaSyAbUEmGCkUOWS_c8z-HYjtWRI3lfiO347Y",
    authDomain: "finance-app-3a64d.firebaseapp.com",
    databaseURL: "https://finance-app-3a64d.firebaseio.com",
    projectId: "finance-app-3a64d",
    storageBucket: "finance-app-3a64d.appspot.com",
    messagingSenderId: "326190925032"
  };
  firebase.initializeApp(config);

  var database = firebase.database();



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