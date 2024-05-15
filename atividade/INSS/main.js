let valor_bruto = document.querySelector('#salarioBruto').value;
let valor_inss = 0;
let valor_irrf = 0;
let desconto_dependentes = 0;
let quantidade_dependentes;

const bot_calcular = document.querySelector('#calcular');

calcular.addEventListener("click", () => {
    valor_bruto = document.querySelector('#salarioBruto').value;
    inss(valor_bruto);
    let valor_descontado_inss = valor_bruto - valor_inss;
    irrf(valor_descontado_inss);
    dependentes(valor_irrf);
    let salario_liquido = valor_descontado_inss - desconto_dependentes;
    document.querySelector('#inss').innerHTML = valor_inss.toFixed(2);
    document.querySelector('#irrf').innerHTML = valor_irrf.toFixed(2);
    document.querySelector('#resultado').innerHTML = salario_liquido.toFixed(2);
})


function inss (valor_bruto){
    if(valor_bruto <= 1412){
        return valor_inss = valor_bruto * 0.075;
    }
    else if(valor_bruto > 1412 && valor_bruto <= 2666.68){
        return valor_inss = valor_bruto * 0.09 - 21.18;
    }
    else if(valor_bruto >2666.68 && valor_bruto <= 4000.03){
        return valor_inss = valor_bruto * 0.12 - 101.18;
    }
    else if(valor_bruto > 4000.03 && valor_bruto <= 7786.02){
        return valor_inss = valor_bruto * 0.14 - 181.18;
    }
    else{
        return valor_inss = 7786.02 * 0.14 - 181.18;
    }
}

function irrf(valor_descontado_inss){
    if(valor_descontado_inss <= 2259.20){
        return valor_irrf = 0;
    }
    else if(valor_descontado_inss > 2259.20 && valor_descontado_inss <= 2826.65){
        return valor_irrf = valor_descontado_inss * 0.075 - 158.40;
    }
    else if(valor_descontado_inss > 2826.65 && valor_descontado_inss <= 3751.05){
        return valor_irrf = valor_descontado_inss * 0.15 - 370.40;
    }
    else if(valor_descontado_inss > 3751.05 && valor_descontado_inss <= 4664.68){
        return valor_irrf = valor_descontado_inss * 0.225 - 651.73;
    }
    else{
        return valor_irrf = valor_descontado_inss * 0.275 - 884.96;
    }
}

function dependentes(valor_irrf){
    quantidade_dependentes = document.querySelector('#dependentes').value;    
    if(quantidade_dependentes <= 0){
        return desconto_dependentes = valor_irrf;
    }
    else if(quantidade_dependentes == 1){
        return desconto_dependentes = valor_irrf - 189.59;
    }
    else if(quantidade_dependentes == 2){
        return desconto_dependentes = valor_irrf - 189.59 * 2;
    }
    else if(quantidade_dependentes > 2){
        return desconto_dependentes = valor_irrf - 189.59 * 3;
    }
}



