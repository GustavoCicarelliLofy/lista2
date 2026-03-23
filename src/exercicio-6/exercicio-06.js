function calcular(so, v, t) {
  valor.textContent = `${so} m`;
  comsu.textContent = `${v} m/s`;
  pre.textContent = `${t} s`;
  let s = Number(so) + Number(v * t)
  resposta.textContent = `${s} m`;
  // t.textContent = `Numa distância de ${so} km com o veiculo comsumindo ${t} Km/L é necessário ${t} L de combustível custnado R$${t}`;
}