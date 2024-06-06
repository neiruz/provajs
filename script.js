//exercicio2

let = nome = document.getElementById("name")
let resposta = document.getElementById("resposta")

function clicar()
{
    resposta.innerHTML ="ola, " + nome.value + ", tudo bem?"
}


//exercicio3

let metros= document.getElementById("metros")
let  resultadocm= document.getElementById("resultadocm")

function resultado( )
{
    resultadocm.innerHTML = parseInt(metros.value) / 100
}

//exercício 4
let numero = document.getElementById("completo")
let antecessor = document.getElementById("antecessor")
let sucessor = document.getElementById("sucessor")

function VerRespostas()
{
    antecessor.innerHTML = parseFloat(numero.value) - 1
    sucessor.innerHTML = parseFloat(numero.value) + 1
}

//exercicio 5

let number1 = document.getElementById("number1")
let number2 = document.getElementById("number2")
let number1sucessor = document.getElementById("number1sucessor")
let number2sucessor = document.getElementById("number2sucessor")

function seunumero()
{
    number1sucessor.innerHTML = parseFloat(number1.value) +1
    number2sucessor.innerHTML = parseFloat(number2.value) +1
}

//exercicio 7  numero de 1 a 100

var c = 0
while(c <= 100)
    {
        console.log(c)
        c = c + 1
    }

 //exercicio 8   

    var d = 0
while(d <= 50)
    {
        console.log(d)
        d = d + 5
    }

//exercicio 9

var f = 100;
while(f >= 0)
    {
        console.log(f)
        f = f - 10
    }
console.log(d)


