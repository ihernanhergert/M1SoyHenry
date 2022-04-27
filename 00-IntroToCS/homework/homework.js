"use strict";

function BinarioADecimal(num) {
  let decimalNumber = 0;
  const Long = num.length;
  console.log(num)
  for (let i = 0; i < Long; i++) {
    let position = Long -1 -i;
    let base = 2**i;
    decimalNumber += num[position] * base;
  }
  return decimalNumber;
}

function DecimalABinario(num) {
    let almacenador = []

    while (num!==0){
        let cociente = Math.floor(num / 2)
        let residuo = Math.trunc(num%2)
        num = cociente;

        almacenador.push(residuo);
    }
    return almacenador.reverse().join("")
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
};
