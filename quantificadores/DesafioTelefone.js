const texto = `Lista telefônica:
    - (11) 98756-1212
    -(28) 99953-7167
    - (21) 3546-6011
    -98765-4321 ...`;

const regexTelefone = /(\(?\d{2}\).?)*\d{4,5}\-\d{4}/g
console.log(texto.match(regexTelefone))