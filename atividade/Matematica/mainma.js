let numbers_stack = [];
let operator_stack = [];
let number_complete = false;

function insert(num) {
    var numero = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = numero + num;
    var numero2 = document.getElementById('resultado2').innerHTML;
    document.getElementById('resultado2').innerHTML = numero + num;
}
function clean() {
    document.getElementById('resultado').innerHTML = "";
    document.getElementById('resultado2').innerHTML = "";
    
}
function back() {
    var resultado = document.getElementById('resultado').innerHTML;
    document.getElementById('resultado').innerHTML = resultado.substring(0, resultado.length -1)
    var resultado = document.getElementById('resultado2').innerHTML;
    document.getElementById('resultado2').innerHTML = resultado.substring(0, resultado.length -1)
    
}
function calcular() {
    var resultado = document.getElementById('resultado').innerHTML;
    if(resultado){
        document.getElementById('resultado').innerHTML = eval(resultado);
    }
}

function displays(num){ 
}