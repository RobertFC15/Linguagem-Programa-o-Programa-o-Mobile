function calcular() {
    let num1 = parseFloat(document.getElementById("num1").value);
    let num2 = parseFloat(document.getElementById("num2").value);
    let operacao = document.getElementById("operacao").value;
    let resultado;

    switch (operacao) {
        case "+":
            resultado = num1 + num2;
            break;
        case "-":
            resultado = num1 - num2;
            break;
        case "*":
            resultado = num1 * num2;
            break;
        case "/":
            resultado = num1 / num2;
            break;
        case "**":
            resultado = num1 ** num2;
            break;
        case "%":
            resultado = num1 % num2;
            break;
        default:
            resultado= "Operação Inválida";              
    }

    document.getElementById("resultado").innerText = resultado;
}