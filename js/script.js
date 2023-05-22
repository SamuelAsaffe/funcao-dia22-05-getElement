//   tarefa 1

function circulo() {
    let raio = prompt("qual o valor do raio ?")
    let circ = 3.14 * raio
    alert(" A área do circulo é igual a: " + circ)
}

//   terefa 2
function hipotenusa() {
    let ca = prompt("Qual o valor do cateto oposto?")
    let co = prompt("Qual o valor do cateto adjacente?")

    let hp = Math.sqrt(co * co + ca * ca)
    hp = parseFloat(hp.toFixed(2))

    alert("O valor da hipotenusa é: " + hp)
}
function dolares() {
    let reais = prompt("Quantos reais que você deseja trocar por dolares?")
    let dol = reais / 5
    dol = parseFloat(dol.toFixed(2))
    alert("Seus reais foram convertidos para " + dol + " dolares")
}

//     tarefa 4
function celcius() {
    let c = prompt("quantos graus celcius que é para converter para fahrenheit? ")
    let f = 32 + (c * 1.8)
    f = parseFloat(f.toFixed(2))
    alert("a converção resultou em " + f + " grau fahrenheit")
}


//    tarefa 5   media aritimética de 3 notas

function mediaAritimetica() {
    let n1 = parseFloat(prompt(" qual o valor de 1ª nota? "))
    let n2 = parseFloat(prompt(" qual o valor de 2ª nota? "))
    let n3 = parseFloat(prompt(" qual o valor de 3ª nota? "))
    let media = ((n1 + n2 + n3) / 5)
    media = parseFloat(media.toFixed(2))
    alert(" O valor da média aritimética é: " + media)

}

//      tarefa 6 bhaskara

function bhaskara() {
    
    let a,b,c,x1,x2,delta,r
    a = parseFloat(prompt("Digite o valor de a: "));
    b = parseFloat(prompt("Digite o valor de b: "));
    c = parseFloat(prompt("Digite o valor de c: "));
    delta= b*b -4*a*c
    if( delta <0 ) {
        alert("a equação não possui raizes reais.")
    }
    else if (delta===0) {
        r=-b/(2*a)
        alert("A equação possui uma raiz real: " + r.toFixed(2))
        
    }
    else {
        x1=(-b + Math.sqrt(delta))/(2*a)
        x2=(-b - Math.sqrt(delta))/(2*a)
        alert("A equação possui duas raizes reais: " +x1.toFixed(2) + " e " + x2.toFixed(2))
    }




}
  //ja posso xingar ? kkkkk


