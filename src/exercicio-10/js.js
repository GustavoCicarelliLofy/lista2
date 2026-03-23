function calcular() {
      const valorInvestido = parseFloat(document.getElementById("valorInvestido").value);
      const taxaAtual = parseFloat(document.getElementById("taxaAtual").value);
      const taxaCompra = parseFloat(document.getElementById("taxaCompra").value);
      const resultadoDiv = document.getElementById("resultado");

      if (isNaN(valorInvestido) || valorInvestido <= 0) {
        alert("Informe um valor investido válido.");
        return;
      }
      if (isNaN(taxaAtual) || taxaAtual <= 0) {
        alert("Informe uma taxa de câmbio atual válida.");
        return;
      }

      const valorEmReais = valorInvestido * taxaAtual;

      let textoResultado = 
        `Valor investido: ${valorInvestido.toFixed(2)}\n` +
        `Taxa de câmbio atual: R$ ${taxaAtual.toFixed(4)}\n` +
        `Valor equivalente em reais: R$ ${valorEmReais.toFixed(2)}\n`;

      if (!isNaN(taxaCompra) && taxaCompra > 0) {
        const valorNaCompra = valorInvestido * taxaCompra;
        const lucroPrejuizo = valorEmReais - valorNaCompra;
        const rentabilidade = (lucroPrejuizo / valorNaCompra) * 100;

        textoResultado +=
          `Taxa de câmbio na compra: R$ ${taxaCompra.toFixed(4)}\n` +
          `Lucro/Prejuízo: R$ ${lucroPrejuizo.toFixed(2)}\n` +
          `Rentabilidade percentual: ${rentabilidade.toFixed(2)}%`;
      }

      resultadoDiv.textContent = textoResultado;
    }