function calcular() {

    let valorInicial = Number(document.getElementById("valorInicial").value);
    let valorAtual = Number(document.getElementById("valorAtual").value);
  
    if (valorInicial <= 0) {
      lucro.textContent = "Lucro: R$0";
      rentabilidade.textContent = "Rentabilidade: 0%";
      texto.textContent = "Digite um valor inicial válido";
      return;
    }
  
    let lucroCalc = valorAtual - valorInicial;
    let rent = (lucroCalc / valorInicial) * 100;
  
    lucro.textContent = `Lucro: R$${lucroCalc}`;
    rentabilidade.textContent = `Rentabilidade: ${rent.toFixed(2)}%`;
  
    texto.textContent =
      `Um investimento de R$${valorInicial} passou a valer R$${valorAtual}, gerando um lucro de R$${lucroCalc} com rentabilidade de ${rent.toFixed(2)}%`;
  }