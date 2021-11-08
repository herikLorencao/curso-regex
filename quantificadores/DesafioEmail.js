const texto = `Os e-mails dos convidados são:
    - fulano@cod3r.com.br
    - xico@gmail.com
    - ana_silva@gmail.com
    - jose@onu.org
    - rafa.sampaio@yahoo.com
`;

const regexEmail = /[\w.]+\@\w+\.\w{3,}\.?\w*/g
console.log(texto.match(regexEmail));