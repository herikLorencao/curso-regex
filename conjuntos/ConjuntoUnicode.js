// Expressão para pegar caracteres com acento (por padrão A-Z não pega)
const texto = 'áéíóú àèiòù ç ãõ ü';
console.log(texto.match(/[À-ü]/g));