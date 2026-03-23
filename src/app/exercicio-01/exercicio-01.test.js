const calcular = require('./exercicio-01');
describe('Teste de investimento em moeda estrangeira', () => {
  test('Deve ver os valores iniciais', () => {
    const resultado = calcular(1000, 100);
    expect(resultado.porcentagem).toBe(100);
    expect(resultado.preco).toBeCloseTo(25);
  });
  test('Deve calcular o desconto o bitido', () => {
    const resultado = calcular(1000, 100);
    expect(resultado.desconto).toBe(1000);
  });
  // // test("Deve calcular prejuízo com desvalorização", () => {
  // // const resultado = calcularCambio(1000, 4, 5);
  // // expect(resultado.lucro).toBe(-1000);
  // // expect(resultado.rentabilidade).toBeCloseTo(-20);
  // // });
  // // test("Sem taxa de compra, lucro deve ser null", () => {
  // // const resultado = calcularCambio(1000, 5);
  // // expect(resultado.lucro).toBeNull();
  // // });
  // // test("Deve lançar erro para valores inválidos", () => {
  // // expect(() => calcularCambio(-1000, 5)).toThrow();
  // // expect(() => calcularCambio(1000, 0)).toThrow();
  // // });
});

// const calcularJurosCompostos = require('./exercicio-01');
// describe('Cálculo de Juros Compostos', () => {
//   test('deve calcular corretamente o valor final após 12 meses', () => {
//     const resultado = calcularJurosCompostos(1000, 12);
//     expect(resultado.valorInicial).toBe(1000);
//     expect(resultado.meses).toBe(12);
//     expect(resultado.valorFinal).toBe(1195.62);
//     expect(resultado.juros).toBe(195.62);
//   });
// });

// const calcularDesconto = require('./desconto');
// describe("Teste de cálculo de desconto", () => {
// test("Deve calcular corretamente o desconto de 10% sobre 100", () => {
// const resultado = calcularDesconto(100, 10);
// expect(resultado.valorDesconto).toBe(10);
// expect(resultado.precoFinal).toBe(90);
// expect(resultado.economia).toBe(10);
// });
// test("Deve calcular corretamente desconto de 25% sobre 200", () => {
// const resultado = calcularDesconto(200, 25);
// expect(resultado.valorDesconto).toBe(50);
// expect(resultado.precoFinal).toBe(150);
// });
// test("Deve lançar erro para valores negativos", () => {
// expect(() => calcularDesconto(-100, 10)).toThrow();
// expect(() => calcularDesconto(100, -10)).toThrow();
// });
// test("Desconto 0% deve manter o preço original", () => {
// const resultado = calcularDesconto(100, 0);
// expect(resultado.precoFinal).toBe(100);
// });
// });
