function gerarNumerosAleatorios(qtd, min, max) {
    let numeros = [];
    for (let i = 0; i < qtd; i++) {
        numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numeros;
}

function ordenarCrescente(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] > array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

function ordenarDecrescente(array) {
    for (let i = 0; i < array.length - 1; i++) {
        for (let j = 0; j < array.length - 1 - i; j++) {
            if (array[j] < array[j + 1]) {
                let temp = array[j];
                array[j] = array[j + 1];
                array[j + 1] = temp;
            }
        }
    }
    return array;
}

function obterPares(array) {
    return array.filter(num => num % 2 === 0);
}

function obterImpares(array) {
    return array.filter(num => num % 2 !== 0);
}

function ehPrimo(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function obterPrimos(array) {
    return array.filter(num => ehPrimo(num));
}

let numeros = gerarNumerosAleatorios(10, 1, 100);
console.log("Números gerados:", numeros);
console.log("Ordenado crescente:", ordenarCrescente([...numeros]));
console.log("Ordenado decrescente:", ordenarDecrescente([...numeros]));
console.log("Números pares:", obterPares(numeros));
console.log("Números ímpares:", obterImpares(numeros));
console.log("Números primos:", obterPrimos(numeros));