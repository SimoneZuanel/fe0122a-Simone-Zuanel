var dataAttuale = new Date();
document.getElementById("data-attuale").innerHTML = dataAttuale;

console.log(dataAttuale.getFullYear());
console.log(dataAttuale.getMonth());
console.log(dataAttuale.getDay());
console.log(dataAttuale.getDate());
console.log(dataAttuale.getHours());
console.log(dataAttuale.getMinutes());
console.log(dataAttuale.getSeconds());
console.log(dataAttuale.getMilliseconds());

var options = {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
};
var today = new Date();

document.querySelectorAll("p")[9].innerHTML = today.toLocaleDateString(
    "it-IT",
    options
);

document.querySelectorAll("p")[1].innerHTML = dataAttuale.getFullYear();
document.querySelectorAll("p")[2].innerHTML = dataAttuale.getMonth();
document.querySelectorAll("p")[3].innerHTML = dataAttuale.getDay();
document.querySelectorAll("p")[4].innerHTML = dataAttuale.getDate();
document.querySelectorAll("p")[5].innerHTML = dataAttuale.getHours();
document.querySelectorAll("p")[6].innerHTML = dataAttuale.getMinutes();
document.querySelectorAll("p")[7].innerHTML = dataAttuale.getSeconds();
document.querySelectorAll("p")[8].innerHTML = dataAttuale.getMilliseconds();