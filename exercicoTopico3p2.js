//Declaro uma variavel numeros para array

let numeros = [2, 6, 5, 9, 3, 10, 4];
console.log(numeros);

//mostre quem são os pares e impares
let pares = [];
let impares = [];

//estrutura de repetição para separar os pares dos impares
for (let i = 0; i <= numeros.length; i++){
    if(numeros[i] % 2 == 0){
        pares.push(numeros[i]);
    }else{
        impares.push(numeros[i]);
    }
}

console.log('os números pares são ' + pares);
