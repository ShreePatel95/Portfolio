let hamburger = document.getElementById("hamburger-dropdown");
let hamburgerDropdown = document.querySelector(".hamburger-dropdown");
hamburger.addEventListener("click", function(){
    if(hamburgerDropdown.style.display === "none"){
        hamburgerDropdown.style.display = "block";
    } else{
        hamburgerDropdown.style.display = "none";
    }
});