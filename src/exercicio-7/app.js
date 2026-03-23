function calcularBitcoin(qtdBitcoin, precoAtual, valorInvestido) {
  // Validação
  if (qtdBitcoin <= 0 || precoAtual <= 0) {
    throw new Error("Valores inválidos");
  }

  const valorTotal = qtdBitcoin * precoAtual;

  let lucro = null;
  let rentabilidade = null;

  if (valorInvestido !== undefined) {
    lucro = valorTotal - valorInvestido;
    rentabilidade = (lucro / valorInvestido) * 100;
  }

  return {
    quantidade: qtdBitcoin,
    precoAtual: precoAtual,
    valorTotal: valorTotal,
    lucro: lucro,
    rentabilidade: rentabilidade
  };
}

module.exports = calcularBitcoin;