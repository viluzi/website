console.log("8")
var meetvurst = new Audio("jo.mp3");
var ruoka = 0
c("ruoka", "ruoka: 0")
function syö() {
    ruoka = ruoka + 1
    if (ruoka > 99) {
        meetvurst.play()
        console.log(":)")
    }
    c("ruoka", "ruoka: " + ruoka)
    c("aasi", "!==!* III")
    setTimeout(function(){
        c("aasi", "&nbsp;!==!o.II")
    }, 500);
    setTimeout(function(){
        c("aasi", "&nbsp;&nbsp;!==!o.I")
    }, 1000);
    setTimeout(function(){
        c("aasi", "&nbsp;&nbsp;&nbsp;!==!o.")
    }, 1500);
    setTimeout(function(){
        c("aasi", "!==!*")
    }, 2000);
}
function juo() {
    alert("juo");
}
function nuku() {
    alert("nuku");
}
function juokse() {
    alert("juokse");
}
function perseile() {
    if (RanInt(1, 3) == 1) {
        var N = new Audio("./ovi.mp3")
        N.play()
    }
    if (RanInt(1, 3) == 2) {
        var N = new Audio("./nappi.mp3")
        N.play()
    }
    if (RanInt(1, 3) == 3) {
        var N = new Audio("./auto.mp3")
        N.play()
        c("aasi", "Rikoit auton. Maksa 1€")
        // Add a button that pays 1€
    }
}
function c(id, text) {
    document.getElementById(id).innerHTML = text;
}
function RanInt (min, max) {
    return Math.random() * (max - min) + min;
}