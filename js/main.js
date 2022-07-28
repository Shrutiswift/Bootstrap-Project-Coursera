// This is my first Javascript code
setInterval(myTimer, 1000);
function myTimer() {
    const date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}


