var displayBuffer = "";
var numero = "";
var termos = [undefined, undefined, undefined];
var resultado = undefined;

function pressNum(num) {
    numero = numero.concat(num.innerHTML);
    showDisplay(num.innerHTML);
}

function pressOperator(op) {
    termos[0] = numero;
    termos[1] = op.innerHTML;
    showDisplay(op.innerHTML);
    numero = "";
}

function pressEqual() {
    termos[2] = numero;
    switch (termos[1]) {
        case '+':
            resultado = Number(termos[0]) + Number(termos[2]);
            break;
        case '-':
            resultado = Number(termos[0]) - Number(termos[2]);
            break;
        case '%':
            resultado = Number(termos[0]) / 100 * (Number(termos[2]));
            break;
        case '*':
            resultado = Number(termos[0]) * Number(termos[2]);
            break;
        case '/':
            resultado = Number(termos[0]) / Number(termos[2]);
            break;
        case '√':
            resultado = Number(termos[0]) + Number(termos[2]);
            resultado = Math.sqrt(resultado);
            break;
    }
    clearDisplay();
    showDisplay(resultado);
    clearMemory();
}

function clearMemory() {
    numero = "";
}

function clearDisplay() {
    displayBuffer = "";
    var tela = document.getElementById('display');
    tela.value = displayBuffer;
}
function clearall() {
    clearDisplay();
    clearMemory();
}

function showDisplay(conteudo) {
    displayBuffer = displayBuffer.concat(conteudo);
    var tela = document.getElementById('display');
    tela.value = displayBuffer;
}

