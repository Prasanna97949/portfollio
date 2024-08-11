var menu = document.getElementById("sidenav")
var open = document.getElementById("open")
var close = document.getElementById("close")
open.addEventListener("click",function(){
    menu.style.marginLeft = "0"
})
close.addEventListener("click",function(){
    menu.style.marginLeft = "-40%"
})