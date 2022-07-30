//setinterval calls a function at a specified intervals
//myTimer is a function
setInterval(myTimer, 1000); //1000 miliseconds  = 1 second
function myTimer() {
    const date = new Date();
    document.getElementById("demo").innerHTML = date.toLocaleTimeString();
}


