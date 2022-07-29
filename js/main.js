//setinterval calls a function at a specified intervals
setInterval(myTimer, 1000); //1000 miliseconds  = 1 second
function myTimer() {
    const date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}


