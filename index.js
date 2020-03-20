var countDownDate = new Date("Dec 11, 2021 00:00:00").getTime();

var counDownFunction = setInterval(function() {

var now = new Date().getTime();

var distance = countDownDate - now;

var days = Math.floor(distance / (1000 * 60 * 60 * 24));
var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
var seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("demo").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

if(distance < 0) {
    clearInterval(counDownFunction);
    document.getElementById("demo").innerHTML = "YAY! HAPPY BIRTHDAY FOR MYSELF!!";
}
},1000);