alert("portfólio incompleto")
alert("peço um pouco de compreensão")
var lan = document.getElementById("lançamentoos")
var arqui = document.getElementById("aquirvar")
var con = document.getElementById("conferencia")


function confer() {
    if (arqui.classList.contains("putis")) {
        arqui.classList.remove('putis')
        lan.classList.remove('putis')
        console.log("oiw")
    } else {
        arqui.classList.add('putis')
        lan.classList.add('putis')
        console.log("jn")
    }
}
//criaçao de atuçao 
var div =document.createElement('div')