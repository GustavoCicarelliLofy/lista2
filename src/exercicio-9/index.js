function calcular() {
  const valor = parseFloat(document.getElementById("valor").value);
  const percentual = parseFloat(document.getElementById("percentual").value);
  const pessoas = parseInt(document.getElementById("pessoas").value);

  if (isNaN(valor) || isNaN(percentual)) {
    alert("Preencha os campos obrigatórios!");
    return;
  }

  const gorjeta = valor * (percentual / 100);
  const total = valor + gorjeta;

  let resultado = `
    <p>Valor da conta: R$ ${valor.toFixed(2)}</p>
    <p>Gorjeta (${percentual}%): R$ ${gorjeta.toFixed(2)}</p>
    <p>Total: R$ ${total.toFixed(2)}</p>
  `;

  if (!isNaN(pessoas) && pessoas > 0) {
    const porPessoa = total / pessoas;
    resultado += `<p>Por pessoa: R$ ${porPessoa.toFixed(2)}</p>`;
  }

  document.getElementById("resultado").innerHTML = resultado;
}