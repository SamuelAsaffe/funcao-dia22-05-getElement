//   tarefa 1

function circulo() {
    raio = document.getElementById("entradacirculo").value
    if (!isNaN(raio)) {
        areacirculo = (parseFloat(raio) * parseFloat(raio)) * 3.14

        document.getElementById("saidacirculo").innerText = areacirculo
    } else {
        areacirculo = ("escreva números")
        document.getElementById("saidacirculo").innerText = areacirculo
    }
}


//   tarefa 2 área do retangulo

function retangulo() {
    baseretangulo = document.getElementById("baseretangulo").value
    alturaretangulo = document.getElementById("alturaretangulo").value
    retsaida = document.getElementById("arearetangulo")

    baseretangulo = (parseFloat(baseretangulo))
    alturaretangulo = (parseFloat(alturaretangulo))
    if (!isNaN(baseretangulo) && !isNaN(alturaretangulo)) {
        arearet = alturaretangulo * baseretangulo
        arearet = (parseFloat(arearet))
        retsaida.innerText = arearet
    } else {
        arearet = "esceva um numero"
        retsaida.innerText = arearet
    }

}

//   tarefa 3 área do triangulo

// function triangulo() {
//     basetri = document.getElementById("basetri").value
//     alturatri = document.getElementById("alturatri").value
//     basetri = (parseFloat(basetri))
//     alturatri = (parseFloat(alturatri))

//     if (!isNaN(basetri) && !isNaN(alturatri)) {
//         areatri = (alturatri * basetri) / 2
//         areatri = (parseFloat(areatri))
//         areatri = document.getElementById("areatri").innerText
//     } else {
//         areatri = "números pleas"
//         areatri = document.getElementById("areatri").innerText
//     }

// }
function triangulo() {
    basetri = document.getElementById("basetri").value
    alturatri = document.getElementById("alturatri").value
    trisaida = document.getElementById("areatri")

    basetri = (parseFloat(basetri))
    alturatri = (parseFloat(alturatri))
    if (!isNaN(basetri) && !isNaN(alturatri)) {
        areatri = (alturatri * basetri) / 2
        areatri = (parseFloat(areatri))
        document.getElementById("areatri").innerText = (areatri)
    } else {
        document.getElementById("areatri").innerText = ("escreva um número")
    }

}

//   terefa 4 hipotenusa
function hipotenusa() {
    ca = parseFloat(document.getElementById("catetoAdijacente").value)
    co = parseFloat(document.getElementById("catetoOposto").value)
    if (!isNaN(ca) && !isNaN(co)) {
        hp = parseFloat(Math.sqrt((co * co) + (ca * ca)).toFixed(2))
        document.getElementById("hipotenusa").innerText = (hp)

    } else {
        hp = "use numeros"
        document.getElementById("hipotenusa").innerText = (hp)

    }



}
//     tarefa 5  reais para dolares
function dolares() {
    let reais = document.getElementById("reais").value
    let cambio = document.getElementById("cambio").value

    if (!isNaN(reais) && !isNaN(cambio)) {
        dolar = parseFloat(reais / cambio).toFixed(2)
        document.getElementById("dolar").innerText = (dolar)

    } else {
        dolar = "use numeros"
        document.getElementById("dolar").innerText = (dolar)
    }
}

//     tarefa 6 celcius para fahreheit
function celcius() {
    let c = document.getElementById("celcius").value
    if (!isNaN(c)) {
        f = parseFloat(32 + (c * 1.8)).toFixed(2)
        document.getElementById("fahrenheit").innerText = ("a converção resultou em " + f + " grau fahrenheit")

    } else {
        document.getElementById("fahrenheit").innerText = (" escreva números")

    }

}

if (!isNaN() && !isNaN()) {


} else {


}
//    tarefa 7   media aritimética de 3 notas

function mediaAritimetica() {
    let n1 = parseFloat(document.getElementById("nota1").value)
    let n2 = parseFloat(document.getElementById("nota2").value)
    let n3 = parseFloat(document.getElementById("nota3").value)
    nn = parseFloat(document.getElementById("nnotas").value)
    if (!isNaN(n1) && !isNaN(n2) && !isNaN(n3) && !isNaN(nn)) {
        media = parseFloat((n1 + n2 + n3) / nn).toFixed(2)
        document.getElementById("mediaNotas").innerText = (" O valor da média aritimética da notas é: " + media)
    } else {
        document.getElementById("mediaNotas").innerText = ("põe números")
    }

}


//      tarefa 8   km/h para m/s

function velocidade() {
    let km = parseFloat(document.getElementById("km").value)
    if (!isNaN(km)) {
        ms = parseFloat(km * 3.6).toFixed(2)
        document.getElementById("ms").innerText = ("o valor em metros por segundo é: " + ms)

    } else {
        document.getElementById("ms").innerText = ("escreva em números, sem letras ")

    }

}

//      tarefa 9 bhaskara

function bhaskara() {

    let a, b, c, x1, x2, delta, r
    a = parseFloat(document.getElementById("a").value)
    b = parseFloat(document.getElementById("b").value)
    c = parseFloat(document.getElementById("c").value)

    if (!isNaN(a) && !isNaN(b) && !isNaN(c)) {
        delta = parseFloat(b * b - 4 * a * c).toFixed(2)
        if (delta < 0) {

            document.getElementById("confirmDelta").innerText= ("a equação não possui raizes reais.")
        }
        else if (delta === 0) {
            r = parseFloat( -b / (2 * a))
            document.getElementById("confirmDelta").innerText= ("A equação possui uma raiz real: " + r.toFixed(2))
    
        }
        else {
            x1 = parseFloat(-b + Math.sqrt(delta) / (2 * a))
            x2 = parseFloat(-b - Math.sqrt(delta) / (2 * a))
            document.getElementById("x1").innerText = ("a segunda raiz é: " + x1.toFixed(2) ) 
            document.getElementById("x2").innerText = ("a primeira raiz é: " + x2.toFixed(2) ) 
        }

    } else {
        document.getElementById("saida bascara").innerText = ("escreva em números, sem letras ")
    }
}asdfasdfsadfsad