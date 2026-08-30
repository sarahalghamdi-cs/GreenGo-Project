document.getElementById("bookingForm")
.addEventListener("submit", function(event){

    event.preventDefault();

    alert("Booking Submitted Successfully!");
});
function selectPackage(packageName){

    alert(packageName + " selected successfully!");
}
function goToPackages(){

window.location.href = "package.html";

}
function goToBooking(){

alert("Great choice!");

window.location.href = "booking.html";

}
function chooseDestination(){

let destination =
document.getElementById("destination").value;

if(destination === ""){

alert("Please choose a destination");

}

else{

alert(destination + " selected!");

window.location.href = "booking.html";

}

}
function goToChoice(){

window.location.href = "choice.html";

}
