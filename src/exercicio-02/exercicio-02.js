function calcular(valorc, porcentagem) {
  valor.textContent = `R$${valorc}`;
  porcent.textContent = `${porcentagem}%`;
  let bonus = valorc * (porcentagem / 100);
  resposta.textContent = `${valorc - bonus}`;
  t.textContent = `Um o salario de R$${valorc} com ${porcentagem}% de bônus fica com R$${Number(valorc) + bonus} mais o bônus de R$${bonus}`;
}