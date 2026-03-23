function calcular(valorc, porcentagem, prelitro) {
  valor.textContent = `${valorc} km`;
  comsu.textContent = `${porcentagem} Km/L`;
  pre.textContent = `R$${prelitro}`;
  let neclitros = valorc * porcentagem
  resposta.textContent = `R$${prelitro * neclitros}`;
  t.textContent = `Numa distância de ${valorc} km com o veiculo comsumindo ${porcentagem} Km/L é necessário ${neclitros} L de combustível custnado R$${prelitro * neclitros}`;
}