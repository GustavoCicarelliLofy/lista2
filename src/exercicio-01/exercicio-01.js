function calcular(preco, porcentagem) {
  valor.textContent = `R$${preco}`;
  porcent.textContent = `${porcentagem}%`;
  desconto = preco * (porcentagem / 100);
  resposta.textContent = `${preco - desconto}`;
  t.textContent = `Um produto de R$${preco} com ${porcentagem}% de desconto fica com R$${preco - desconto} e conomizamdo R$${desconto}`;
}

module.exports = {calcular};