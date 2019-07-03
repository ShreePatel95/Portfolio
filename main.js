let hamburger = document.querySelector(".nav-hamburger-button");
let mobile_sidebar = document.querySelector(".mobile-sidebar");
let close_button = document.querySelector(".close-button");

hamburger.addEventListener("click", function(){
    mobile_sidebar.style.width = "250px";
});

close_button.addEventListener("click", function(){
    mobile_sidebar.style.width = "0px";
});