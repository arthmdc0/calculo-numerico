// Funcoes de conversao, adicionar mais . . .
function decimalParaBinario(decimal) {
   let binario = "";
   while (decimal > 0) {
      binario = (decimal % 2) + binario;
      decimal = Math.floor(decimal / 2);
   }
   return binario !== "" ? binario : "0";
}

function binarioParaDecimal(binario) {
   let decimal = 0;
   for (let i = binario.length - 1, j = 0; i >= 0; i--, j++) {
      decimal += parseInt(binario[i]) * Math.pow(2, j);
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
      resposta.style.color = "#fff";
      resposta.style.fontWeight = "bold";
      resposta.style.fontSize = "28px";
   } else if (tipoConversao === "binario para decimal") {
      const decimal = binarioParaDecimal(numeroInput);
      resposta.textContent = `${decimal}`;
      resposta.style.color = "#fff";
      resposta.style.fontWeight = "bold";
      resposta.style.fontSize = "28px";
   } else {
      resposta.textContent = "selecione uma conversao valida";
   }
}

// Chama a funcao converter quando o botao for selecionado
const converterBtn = document.getElementById("converterBtn");
converterBtn.addEventListener("click", converter);
