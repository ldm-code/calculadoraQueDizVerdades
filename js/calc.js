const display = document.getElementById("display");
const igual = document.getElementById("igual");
const clearBtn = document.getElementById("clear");

let numero1 = null;
let numero2 = null;
let operador = null;

function calcular(numero1, numero2, operador) {
    switch (operador) {
        case '+': return numero1 + numero2;
        case '-': return numero1 - numero2;
        case '*': return numero1 * numero2;
        case '/': return numero2 === 0 ? 'Erro: divisão por zero' : numero1 / numero2;
        default: return 'Operador inválido';
    }
}

// Números
document.querySelectorAll(".number").forEach(btn => {
    btn.addEventListener("click", () => {
        display.value += btn.value;
    });
});

// Operadores
document.querySelectorAll(".operator").forEach(btn => {
    btn.addEventListener("click", () => {
        if (!display.value) return;
        numero1 = parseFloat(display.value);
        operador = btn.value;
        display.value = "";
    });
});

// "="
igual.addEventListener("click", () => {
    if (!display.value || numero1 === null || !operador) return;
    numero2 = parseFloat(display.value);
    resultado = calcular(numero1, numero2, operador);
    if(resultado==67){
        display.value="67,mas ela nao te ama :D"
        numero1 = numero2 = operador = null;
    }
    else{
        resultadoReal=parseFloat(resultado)
        display.value = resultadoReal
        numero1 = numero2 = operador = null;
    }
});

// "C"
clearBtn.addEventListener("click", () => {
    display.value = "";
    numero1 = numero2 = operador = null;
});