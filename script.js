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
  digito == digitoEsperado
    ? (document.getElementById("lblCartao").innerHTML = "Válido")
    : (document.getElementById("lblCartao").innerHTML = "Inválido");
}

function validarCPF() {
  let numCPF = document.getElementById("numCPF").value;
  numCPF = numCPF.replace(/\s/g, "");
  numCPF = numCPF.replace(/\./g, "");
  numCPF = numCPF.replace(/\-/g, "");
  let primeiroValidador;
  let segundoValidador;
  let multiplicador = 11;
  let soma1 = 0,
    soma2 = 0;

  for (let i = 0; i < 9; i++) {
    soma1 += numCPF[i] * (multiplicador - 1);
    soma2 += numCPF[i] * multiplicador;
    multiplicador--;
  }
  soma2 += numCPF[9] * 2;
  primeiroValidador = (soma1 * 10) % 11;
  segundoValidador = (soma2 * 10) % 11;

  numCPF.substring(9, 11) ===
  String(primeiroValidador) + String(segundoValidador)
    ? (document.getElementById("lblCPF").innerHTML = "Válido")
    : (document.getElementById("lblCPF").innerHTML = "Inválido");
}

function validarRG() {
  let numRG = document.getElementById("numRG").value;
  numRG = numRG.replace(/\s/g, "");
  numRG = numRG.replace(/\./g, "");
  numRG = numRG.replace(/\-/g, "");
  let soma = 0;
  let resto, digitoEsperado;

  for (let i = 0; i < 8; i++) {
    soma += numRG[i] * (i + 2);
  }
  console.log(soma);
  resto = soma % 11;
  digitoEsperado = 11 - resto;
  digitoEsperado === 10
    ? (digitoEsperado = "X")
    : (digitoEsperado = digitoEsperado);
  digitoEsperado === 11
    ? (digitoEsperado = 0)
    : (digitoEsperado = digitoEsperado);
  digitoEsperado == numRG[8]
    ? (document.getElementById("lblRG").innerHTML = "Válido")
    : (document.getElementById("lblRG").innerHTML = "Inválido");
  console.log(digitoEsperado);
}
