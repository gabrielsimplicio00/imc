function imc() {
  let peso = document.querySelector(".peso").value;
  let altura = document.querySelector(".altura").value;
  let res = document.getElementById("resultado");
  let res2 = document.getElementById("resultado2");

  if (altura.length == 0 || peso.length == 0) {
    alert("ERRO: Preencha todos os campos para prosseguir");
  }

  if (/[A-z]/gm.test(peso)) {
    document.getElementById("erropeso").innerHTML = "Apenas números são aceitos";
    document.querySelector(".peso").value = "";
  }
  if (/[A-z]/gm.test(altura)) {
    document.getElementById("erroaltura").innerHTML = "Apenas números são aceitos";
    document.querySelector(".altura").value = "";
  }

  verificaPontuacao(altura, peso);

  function verificaPontuacao(altura, peso) {
    if (altura.includes(",")) altura = altura.replace(",", ".");
    if (peso.includes(",")) peso = peso.replace(",", ".");

    if (altura && !altura.includes(",") && !altura.includes(".")) {
      document.getElementById("erroaltura").innerHTML = "Sua altura deve ter pontuação";
      exibirResultado(null, null);
    }
  }

  let numPeso = Number(peso);
  let numAltura = Number(altura);
  const resultado = numPeso / numAltura ** 2;

  checaValor(numPeso, numAltura);

  function checaValor(numPeso, numAltura) {
    if (typeof numPeso !== "number")
      document.getElementById("erropeso").innerHTML =
        "Apenas números são aceitos";

    if (typeof numAltura !== "number")
      document.getElementById("erroaltura").innerHTML =
        "Apenas números são aceitos";
  }

  if (resultado < 18.5) situacao = "Situação: Abaixo do peso";

  if (resultado >= 18.5 && resultado < 24.9) situacao = "Situação: Peso normal";

  if (resultado >= 25 && resultado < 29.9) situacao = "Situação: Sobrepeso";

  if (resultado >= 30 && resultado < 34.9) situacao = "Situação: Obesidade grau 1";

  if (resultado >= 35 && resultado < 39.9) situacao = "Situação: Obesidade grau 2";

  if (resultado > 40) situacao = "Situação: Obesidade grau 3";

  exibirResultado(res, res2);

  function exibirResultado(res, res2) {
    if (isNaN(resultado)) {
      res.innerHTML = "";
      res2.innerHTML = "";
      return;
    }
    res.innerHTML = `Seu IMC é ${resultado.toFixed(2)}`;
    res2.innerHTML = situacao;
    document.querySelector(".altura").value = "";
    document.querySelector(".peso").value = "";
  }
}
