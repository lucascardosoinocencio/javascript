/***********************
 * 
 *  MEU CADERNO - JS
 * 
 ***********************/

// =====================
// 1) VARIÁVEIS: let / const
// =====================
let idade = 27;          // pode mudar
idade = 28;

const nome = "Lucas";    // não pode reatribuir
// nome = "João"; // ❌ erro

console.log("idade:", idade, "nome:", nome);

// =====================
// 2) console.log (debug)
// =====================
const x = 10;
console.log("x é", x);
console.log({ x, idade, nome }); // mostra em formato objeto (bom demais)

// =====================
// 3) if / else
// =====================
const nota = 7;

if (nota >= 7) {
  console.log("Aprovado");
} else {
  console.log("Reprovado");
}

// ternário (atalho)
const status = nota >= 7 ? "Aprovado" : "Reprovado";
console.log("status:", status);

// =====================
// 4) for / while
// =====================
for (let i = 1; i <= 3; i++) {
  console.log("for i =", i);
}

let contador = 1;
while (contador <= 3) {
  console.log("while contador =", contador);
  contador++;
}

// =====================
// 5) FUNÇÕES: function e arrow
// =====================
function somar(a, b) {
  return a + b;
}
console.log("somar:", somar(2, 3));

const multiplicar = (a, b) => a * b;
console.log("multiplicar:", multiplicar(2, 3));

// =====================
// 6) ARRAYS e OBJETOS
// =====================
const frutas = ["maçã", "banana", "uva"];
frutas.push("manga");         // adiciona no fim
console.log("frutas:", frutas);

const primeira = frutas[0];
console.log("primeira fruta:", primeira);

const pessoa = {
  nome: "Lucas",
  idade: 27,
  cidade: "Bauru",
};
console.log("pessoa:", pessoa);
console.log("pessoa.nome:", pessoa.nome);

// =====================
// 7) map / filter
// =====================
const numeros = [1, 2, 3, 4, 5];

// map: transforma
const dobrados = numeros.map((n) => n * 2);
console.log("dobrados:", dobrados);

// filter: filtra
const pares = numeros.filter((n) => n % 2 === 0);
console.log("pares:", pares);

// find: acha 1 item
const primeiroMaiorQue3 = numeros.find((n) => n > 3);
console.log("primeiro > 3:", primeiroMaiorQue3);

// =====================
// 8) STRINGS: includes, toLowerCase, template string
// =====================
const frase = "Eu gosto de JavaScript";
console.log("includes('Java'):", frase.includes("Java"));

const texto = "LuCaS";
console.log("lower:", texto.toLowerCase());

const produto = "Teclado";
const preco = 99.9;
console.log(`Produto: ${produto} | Preço: R$ ${preco}`);

// =====================
// 9) Math + Number (conversões)
// =====================
console.log("Math.round:", Math.round(10.6)); // 11
console.log("Math.floor:", Math.floor(10.9)); // 10
console.log("Math.ceil:", Math.ceil(10.1));   // 11

const numTexto = "42";
console.log("Number:", Number(numTexto));     // 42 (number)
console.log("parseInt:", parseInt("42.9"));   // 42
console.log("parseFloat:", parseFloat("42.9"));// 42.9

// =====================
// 10) DOM: querySelector + addEventListener
// =====================
// ⚠️ Isso só funciona se você tiver um HTML aberto no navegador.
// Crie um index.html simples com um botão e um input.
// Exemplo no final deste arquivo (copie e cole).


const btn = document.querySelector("#btn");
const input = document.querySelector("#texto");
const saida = document.querySelector("#saida");

btn.addEventListener("click", () => {
  const valor = input.value.trim();

  if (!valor) {
    saida.textContent = "Digite algo!";
    return;
  }

  saida.textContent = `Você digitou: ${valor}`;
  input.value = "";
  input.focus();
});


// =====================
// MINI DESAFIO (faça você):
// 1) crie um array "tarefas" vazio
// 2) adicione 3 strings
// 3) use map pra criar "tarefasComPrefixo" tipo: "Tarefa: X"
// 4) use filter pra pegar só as tarefas que contém a letra "a"
// =====================


let tarefas = [];
tarefas.push("estudar JS");
tarefas.push("treinar");
tarefas.push("ler livro");

const tarefasComPrefixo = tarefas.map((t) => `Tarefa: ${t}`);
console.log(tarefasComPrefixo);

const comA = tarefas.filter((t) => t.toLowerCase().includes("a"));
console.log(comA);

/************************************************************
 * AULA 2 — if/else + comparações + operadores (vida real)
 ************************************************************/

/* ==========================================================
   1) COMPARAÇÕES (resultado: true ou false)
   ========================================================== */

// ">" maior que
console.log(10 > 5); // true

// "<" menor que
console.log(10 < 5); // false

// ">=" maior ou igual
console.log(7 >= 7); // true

// "<=" menor ou igual
console.log(6 <= 5); // false

/* ==========================================================
   2) IGUALDADE: === vs ==
   ========================================================== */

// === compara VALOR e TIPO (o jeito correto de usar)
console.log(5 === 5);     // true
console.log("5" === 5);   // false (string vs number)

// == tenta "converter" e pode confundir (evite no começo)
console.log("5" == 5);    // true (ele converteu e deu match)

/* ==========================================================
   3) if / else (decisão simples)
   ========================================================== */

const idade = 17;

if (idade >= 18) {
  console.log("Pode entrar ✅");
} else {
  console.log("Não pode entrar ❌");
}

/* ==========================================================
   4) else if (mais de 2 caminhos)
   Ex: nota escolar
   ========================================================== */

const nota = 6;

if (nota >= 7) {
  console.log("Aprovado ✅");
} else if (nota >= 5) {
  console.log("Recuperação ⚠️");
} else {
  console.log("Reprovado ❌");
}

/* ==========================================================
   5) OPERADORES LÓGICOS (vida real total)
   ========================================================== */

// ||  (OU): basta UMA condição ser true
// &&  (E): as DUAS condições precisam ser true
// !   (NÃO): inverte true/false

const temConvite = true;

// Ex: entra se for maior de idade OU tiver convite
if (idade >= 18 || temConvite) {
  console.log("Entra ✅ (maior de idade OU convite)");
} else {
  console.log("Não entra ❌");
}

// Ex: desconto só se tiver cupom E pagar no pix
const temCupom = true;
const pagamento = "pix";

if (temCupom && pagamento === "pix") {
  console.log("Desconto aplicado ✅");
} else {
  console.log("Sem desconto ❌");
}

// Ex: se NÃO estiver logado
const logado = false;
if (!logado) {
  console.log("Você precisa fazer login 🔒");
}

/* ==========================================================
   6) CASO REAL: validação rápida de formulário
   ========================================================== */

const email = "lucas@gmail.com";
const senha = "123456";

// Regras: email tem que incluir "@" e senha >= 6 caracteres
if (email.includes("@") && senha.length >= 6) {
  console.log("Cadastro válido ✅");
} else {
  console.log("Cadastro inválido ❌");
}