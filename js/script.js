// Funcoes de conversao

// Decimal para Binario
function decimalParaBinario(decimal) {
   let binario = "";

   while (decimal > 0) {
      binario = (decimal % 2) + binario;
      decimal = Math.floor(decimal / 2);
   }
   return binario !== "" ? binario : "0";
}

// Decimal para Octal
function decimalParaOctal(decimal) {
   let octal = "";

   while (decimal > 0) {
      octal = (decimal % 8) + octal;
      decimal = Math.floor(decimal / 8);
   }
   return octal !== "" ? octal : "0";
}

// Decimal para Hexadecimal
function decimalParaHexadecimal(decimal) {
   const hexDigitos = "0123456789ABCDEF";
   let hexadecimal = "";

   while (decimal > 0) {
      const resto = decimal % 16;
      hexadecimal = hexDigitos.charAt(resto) + hexadecimal;
      decimal = Math.floor(decimal / 16);
   }
   return hexadecimal !== "" ? hexadecimal : "0";
}

// Decimal fracionario para Binario
function decimalFracionarioParaBinario(numero) {
   numero = parseFloat(numero);
   if (isNaN(numero) || typeof numero !== "number") {
      return "Entrada inválida. Deve ser um número decimal.";
   }

   let sinal = "";
   if (numero < 0) {
      sinal = "-";
      numero = Math.abs(numero);
   }

   let parteInteira = Math.floor(numero);
   let parteFracionaria = numero - parteInteira;

   let binarioInteira = parteInteira.toString(2);
   let binarioFracionaria = "";

   if (parteFracionaria !== 0) {
      binarioFracionaria = ".";
   }

   const historico = new Set();

   while (parteFracionaria > 0) {
      parteFracionaria *= 2;
      const bit = Math.floor(parteFracionaria);
      binarioFracionaria += bit;
      parteFracionaria -= bit;

      if (historico.has(parteFracionaria.toFixed(8))) {
         return `${sinal}${binarioInteira}${binarioFracionaria} - Parada: Sequência repetida três vezes após a vírgula.`;
      }

      historico.add(parteFracionaria.toFixed(8));
   }

   return `${sinal}${binarioInteira}${binarioFracionaria}`;
}

// Binario para Decimal
function binarioParaDecimal(binario) {
   let decimal = 0;

   for (let i = binario.length - 1, j = 0; i >= 0; i--, j++) {
      decimal += parseInt(binario[i]) * Math.pow(2, j);
   }
   return decimal;
}

// Binario para octal
function binarioParaOctal(binario) {
   let decimal = 0;
   for (let i = binario.length - 1, j = 0; i >= 0; i--, j++) {
      decimal += parseInt(binario[i]) * Math.pow(2, j);
   }
   let octal = "";
   while (decimal > 0) {
      let resto = decimal % 8;
      octal = resto.toString() + octal;
      decimal = Math.floor(decimal / 8);
   }
   if (octal === "") {
      octal = "0";
   }
   return octal;
}

// Binario para Hexadecimal
function binarioParaHexadecimal(binario) {
   let decimal = 0;

   for (let i = binario.length - 1, j = 0; i >= 0; i--, j++) {
      decimal += parseInt(binario[i]) * Math.pow(2, j);
   }
   let hexadecimal = "";
   while (decimal > 0) {
      let resto = decimal % 16;
      if (resto < 10) {
         hexadecimal = resto.toString() + hexadecimal;
      } else {
         hexadecimal = String.fromCharCode(65 + resto - 10) + hexadecimal;
      }
      decimal = Math.floor(decimal / 16);
   }
   if (hexadecimal === "") {
      hexadecimal = "0";
   }
   return hexadecimal;
}

// Binario flutuante para Decimal
function binarioFracionarioParaDecimal(binario) {
   if (!/^[01]+(\.[01]+)?$/.test(binario)) {
      return "Entrada inválida. Deve ser um número binário fracionário.";
   }

   const partes = binario.split(".");
   const parteInteira = parseInt(partes[0], 2);

   let parteFracionaria = 0;
   if (partes.length === 2) {
      parteFracionaria = parseInt(partes[1], 2) / Math.pow(2, partes[1].length);
   }

   const decimal = parteInteira + parteFracionaria;
   return decimal;
}

// Octal para Decimal
function octalParaDecimal(octal) {
   let decimal = 0;

   for (let i = octal.length - 1, j = 0; i >= 0; i--, j++) {
      decimal += parseInt(octal[i]) * Math.pow(8, j);
   }
   return decimal;
}

// Octal para Binario
function octalParaBinario(octal) {
   let binario = "";
   const octalParaBinarioMap = {
      0: "000",
      1: "001",
      2: "010",
      3: "011",
      4: "100",
      5: "101",
      6: "110",
      7: "111",
   };

   for (let i = 0; i < octal.length; i++) {
      const octalDigit = octal[i];
      if (octalDigit in octalParaBinarioMap) {
         binario += octalParaBinarioMap[octalDigit];
      } else {
         return "Número octal inválido.";
      }
   }

   binario = binario.replace(/^0+/, "");

   if (binario === "") {
      binario = "0";
   }

   return binario;
}

// Octal para Hexadecimal
function octalParaHexadecimal(octal) {
   let decimal = 0;
   for (let i = 0; i < octal.length; i++) {
      const octalDigit = parseInt(octal[i], 8);
      decimal = decimal * 8 + octalDigit;
   }

   let hexadecimal = decimal.toString(16).toUpperCase();

   if (hexadecimal === "0") {
      hexadecimal = "0";
   }

   return hexadecimal;
}

function hexadecimalParaDecimal(hexadecimal) {
   const hexDigitos = "0123456789ABCDEF";
   let decimal = 0;

   for (let i = 0; i < hexadecimal.length; i++) {
      const digito = hexadecimal[i].toUpperCase();
      const valorDigito = hexDigitos.indexOf(digito);
      if (valorDigito === -1) {
         return NaN;
      }
      decimal = decimal * 16 + valorDigito;
   }

   return decimal;
}

// Hexadecimal para Binario
function hexadecimalParaBinario(hexadecimal) {
   const hexadecimalParaBinarioMap = {
      0: "0000",
      1: "0001",
      2: "0010",
      3: "0011",
      4: "0100",
      5: "0101",
      6: "0110",
      7: "0111",
      8: "1000",
      9: "1001",
      A: "1010",
      B: "1011",
      C: "1100",
      D: "1101",
      E: "1110",
      F: "1111",
   };

   let binario = "";

   for (let i = 0; i < hexadecimal.length; i++) {
      const hexDigit = hexadecimal[i].toUpperCase();
      if (hexDigit in hexadecimalParaBinarioMap) {
         binario += hexadecimalParaBinarioMap[hexDigit];
      } else {
         return "Número hexadecimal inválido.";
      }
   }

   binario = binario.replace(/^0+/, "");

   if (binario === "") {
      binario = "0";
   }

   return binario;
}

// Hexadecimal para octal
function hexadecimalParaOctal(hexadecimal) {
   let decimal = parseInt(hexadecimal, 16);

   let octal = decimal.toString(8);

   if (octal === "0") {
      octal = "0";
   }

   return octal;
}

// funcao de escolha, adicionar o resto das opcoes . . .
function converter() {
   const numeroInput = document.getElementById("inserirNumero").value;
   const tipoConversao = document.getElementById("converte").value;
   const resposta = document.getElementById("mostrarResposta");

   if (tipoConversao === "decimal para binario") {
      const decimal = parseInt(numeroInput, 10);
      const binario = decimalParaBinario(decimal);
      resposta.textContent = `${binario}`;
   } else if (tipoConversao === "decimalfracionario para binario") {
      const binario = decimalFracionarioParaBinario(numeroInput);
      resposta.textContent = `${binario}`;
   } else if (tipoConversao === "binario para decimal") {
      const decimal = binarioParaDecimal(numeroInput);
      resposta.textContent = `${decimal}`;
   } else if (tipoConversao === "binario para octal") {
      const octal = binarioParaOctal(numeroInput);
      resposta.textContent = `${octal}`;
   } else if (tipoConversao === "binario para hexadecimal") {
      const hexadecimal = binarioParaHexadecimal(numeroInput);
      resposta.textContent = `${hexadecimal}`;
   } else if (tipoConversao === "binariofracionario para decimal") {
      const decimal = binarioFracionarioParaDecimal(numeroInput);
      resposta.textContent = `${decimal}`;
   } else if (tipoConversao === "decimal para octal") {
      const decimal = parseInt(numeroInput, 10);
      const octal = decimalParaOctal(decimal);
      resposta.textContent = `${octal}`;
   } else if (tipoConversao === "octal para decimal") {
      const decimal = octalParaDecimal(numeroInput);
      resposta.textContent = `${decimal}`;
   } else if (tipoConversao === "octal para binario") {
      const binario = octalParaBinario(numeroInput);
      resposta.textContent = `${binario}`;
   } else if (tipoConversao === "octal para hexadecimal") {
      const hexadecimal = octalParaHexadecimal(numeroInput);
      resposta.textContent = `${hexadecimal}`;
   } else if (tipoConversao === "decimal para hexadecimal") {
      const decimal = parseInt(numeroInput, 10);
      const hexadecimal = decimalParaHexadecimal(decimal);
      resposta.textContent = `${hexadecimal}`;
   } else if (tipoConversao === "hexadecimal para decimal") {
      const decimal = hexadecimalParaDecimal(numeroInput);
      resposta.textContent = `${decimal}`;
   } else if (tipoConversao === "hexadecimal para binario") {
      const binario = hexadecimalParaBinario(numeroInput);
      resposta.textContent = `${binario}`;
   } else if (tipoConversao === "hexadecimal para octal") {
      const octal = hexadecimalParaOctal(numeroInput);
      resposta.textContent = `${octal}`;
   } else {
      resposta.textContent = "selecione uma conversao valida!";
   }
}

// Chama a funcao converter quando o botao for selecionado
const converterBtn = document.getElementById("converterBtn");
converterBtn.addEventListener("click", converter);
