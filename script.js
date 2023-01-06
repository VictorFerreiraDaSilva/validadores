function validarCartao() {
  let numCartao = document.getElementById("numCartao").value;
  numCartao = numCartao.replace(/\s/g, "");
  let digito = numCartao[15];
  let soma = 0;
  let digitoEsperado;

  for (let i = 0; i < numCartao.length - 1; i++) {
    let multiplicacaoDigito;
    if (i % 2 === 0) {
      multiplicacaoDigito = numCartao[i] * 2;
    } else {
      multiplicacaoDigito = numCartao[i];
    }

    if (multiplicacaoDigito / 10 >= 1) {
      soma++;
    }

    soma += multiplicacaoDigito % 10;
  }

  if (soma % 10 === 0) digitoEsperado = 0;
  else digitoEsperado = 10 - (soma % 10);
  digito == digitoEsperado ? console.log(true) : console.log(false);

  //console.log(numCartao.substring(0, 15));
}
