// Funcoes de conversao, adicionar mais . . .

// Decimal para Binario
function decimalParaBinario(decimal) {
   let binario = "";

   while (decimal > 0) {
      binario = (decimal % 2) + binario;
      decimal = Math.floor(decimal / 2);
   }
   return binario !== "" ? binario : "0";
}

// Binario para Decimal
function binarioParaDecimal(binario) {
   let decimal = 0;

   for (let i = binario.length - 1, j = 0; i >= 0; i--, j++) {
      decimal += parseInt(binario[i]) * Math.pow(2, j);
   }
   return decimal;
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

// Octal para Decimal
function octalParaDecimal(octal) {
   let decimal = 0;

   for (let i = octal.length - 1, j = 0; i >= 0; i--, j++) {
      decimal += parseInt(octal[i]) * Math.pow(8, j);
   }
   return decimal;
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

function hexadecimalParaDecimal(hexadecimal) {
   const hexDigitos = "0123456789ABCDEF";
   let decimal = 0;

   for (let i = 0; i < hexadecimal.length; i++) {
      const digito = hexadecimal[i].toUpperCase();
      const valorDigito = hexDigitos.indexOf(digito);
      if (valorDigito === -1) {
         return NaN; // Se houver um caractere inválido, retorna NaN
      }
      decimal = decimal * 16 + valorDigito;
   }

   return decimal;
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
   } else if (tipoConversao === "binario para decimal") {
      const decimal = binarioParaDecimal(numeroInput);
      resposta.textContent = `${decimal}`;
   } else if (tipoConversao === "decimal para octal") {
      const decimal = parseInt(numeroInput, 10);
      const octal = decimalParaOctal(decimal);
      resposta.textContent = `${octal}`;
   } else if (tipoConversao === "octal para decimal") {
      const decimal = octalParaDecimal(numeroInput);
      resposta.textContent = `${decimal}`;
   } else if (tipoConversao === "decimal para hexadecimal") {
      const decimal = parseInt(numeroInput, 10);
      const hexadecimal = decimalParaHexadecimal(decimal);
      resposta.textContent = `${hexadecimal}`;
   } else if (tipoConversao === "hexadecimal para decimal") {
      const decimal = hexadecimalParaDecimal(numeroInput);
      resposta.textContent = `${decimal}`;
   } else {
      resposta.textContent = "selecione uma conversao valida!";
   }
}

// Chama a funcao converter quando o botao for selecionado
const converterBtn = document.getElementById("converterBtn");
converterBtn.addEventListener("click", converter);
