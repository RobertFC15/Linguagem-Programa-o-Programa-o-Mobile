function somar (a,b) {
    return a+b;
}
function subtrair (a,b) {
    return a-b;
}
function multiplicar (a,b) {
    return a*b;
}
function dividir (a,b) {
    if(b !== 0) {
        return a/b;
    } else {
        return "Erro"
    }
}

const num1 = parseFloat(prompt("Digite o primeiro número: "))
const num2 = parseFloat(prompt("Digite o segundo número: "))

const operacao = prompt("Digite a operação (+, -, *, /)")

let resultado;
switch (operacao) {
    case "+":
        resultado = somar(num1, num2)
        break;
    case "-":
        resultado = subtrair(num1, num2)
        break;
    case "*":
        resultado = multiplicar(num1, num2)
        break;
    case "/":
        resultado = dividir(num1, num2)
        break
    default:
        resultado =  "Operação invalida!"

}

alert(`Resultado: ${resultado}`);