// Código propositalmente vulnerável (Prova 2): uso de eval com entrada do usuário.
function calcular(expressao) {
  return eval(expressao);
}

const entrada = new URLSearchParams(window.location.search).get("expr");
console.log(calcular(entrada));
