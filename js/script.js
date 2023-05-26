//   tarefa 1

function circulo() {
    let raio = document.getElementById("input-raio")
    let areacirc = document.getElementById("input-areaCirculo")
    let resposta = (parseFloat(raio.value) * parseFloat(raio.value)) * 3.14
    if (raio.value == "") {
        areacirc = "preemcha os campos"
        return
    }
    if (!(raio.value > 0)) {

        areacirc.value = "insira apensa número reais positivos!"
        return
    }
    alert(" A área do circulo é igual a: " + circ)
}
areacirc.value = resposta

//   tarefa 2 área do retangulo

function retangulo() {
    let baseret = prompt("qual o valor da base ?")
    let alturaret = prompt("qual o valor da altura ?")
    let arearet = alturaret * baseret
    alert(" A área do retangulo é igual a: " + arearet)
}
//   tarefa 3 área do triangulo

function triangulo() {
    let basetri = prompt("qual o valor da base ?")
    let alturatri = prompt("qual o valor da altura ?")
    let areatri = alturatri * basetri
    alert(" A área do triangulo é igual a: " + areatri)
}

//   terefa 4 hipotenusa
function hipotenusa() {
    let ca = prompt("Qual o valor do cateto oposto?")
    let co = prompt("Qual o valor do cateto adjacente?")

    let hp = Math.sqrt(co * co + ca * ca)
    hp = parseFloat(hp.toFixed(2))

    alert("O valor da hipotenusa é: " + hp)
}
//     tarefa 5  reais para dolares
function dolares() {
    let reais = prompt("Quantos reais que você deseja trocar por dolares? ")
    let cambio = prompt("qual a contação do dolar hoje? ")
    let dol = reais / cambio
    dol = parseFloat(dol.toFixed(2))
    alert("Seus reais foram convertidos para " + dol + " dolares ")
}

//     tarefa 6 celcius para fahreheit
function celcius() {
    let c = prompt("quantos graus celcius que é para converter para fahrenheit? ")
    let f = 32 + (c * 1.8)
    f = parseFloat(f.toFixed(2))
    alert("a converção resultou em " + f + " grau fahrenheit")
}


//    tarefa 7   media aritimética de 3 notas

function mediaAritimetica() {
    let n1 = parseFloat(prompt(" qual o valor de 1ª nota? "))
    let n2 = parseFloat(prompt(" qual o valor de 2ª nota? "))
    let n3 = parseFloat(prompt(" qual o valor de 3ª nota? "))
    let media = ((n1 + n2 + n3) / 5)
    media = parseFloat(media.toFixed(2))
    alert(" O valor da média aritimética é: " + media)
}


//      tarefa 8   km/h para m/s
function velocidade() {
    let km = prompt(" Qual a velocidade em KM/H ? ")
    let ms = prompt(" Qual a velocidade em m/s ? ")
    ms = km * 3.6
    alert("a velocidade em metros por segundo é = " + ms)
}

//      tarefa 9 bhaskara

function bhaskara() {

    let a, b, c, x1, x2, delta, r
    a = parseFloat(prompt("Digite o valor de a: "));
    b = parseFloat(prompt("Digite o valor de b: "));
    c = parseFloat(prompt("Digite o valor de c: "));
    delta = b * b - 4 * a * c
    if (delta < 0) {

        let nprr = alert("a equação não possui raizes reais.")
    }
    else if (delta === 0) {
        r = -b / (2 * a)
        let prr = alert("A equação possui uma raiz real: " + r.toFixed(2))

    }
    else {
        x1 = (-b + Math.sqrt(delta)) / (2 * a)
        x2 = (-b - Math.sqrt(delta)) / (2 * a)
        alert("A equação possui duas raizes reais: " + x1.toFixed(2) + " e " + x2.toFixed(2))
    }
}
  //ja posso xingar ? kkkkk


