function calcularLucro() {

    let custo = Number(document.getElementById("custo").value);
    let precoVenda = Number(document.getElementById("precoVenda").value);
  
    if (custo < 0 || precoVenda < 0) {
      lucro.textContent = "Lucro: R$0";
      texto.textContent = "Digite valores válidos";
      return;
    }
  
    let lucroCalc = precoVenda - custo;
  
    lucro.textContent =   `Lucro: R$${lucroCalc}`;
  
    texto.textContent =
      `Um produto com custo de R$${custo} foi vendido por R$${precoVenda}, gerando um lucro de R$${lucroCalc}`;
  }