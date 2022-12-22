'use strict';
//Para que o navegador veja se está compatível com ele as infos

let somaMussarela = 0;
let somaPortuguesa = 0;
let somaCalabresa = 0;
let vendaMussarela = 0.00;
let vendaPortuguesa = 0.00;
let vendaCalabresa = 0.00;

let btnVendas = document.getElementById('vendas');
let btnEstorno = document.getElementById('estorno');
let btnPlanilha = document.getElementById('export');

//Eventos:
btnVendas.addEventListener('click',venda, false);
btnEstorno.addEventListener('click',estorno, false);
btnPlanilha.addEventListener('click',planilha,false);

//Funcoes:
function venda(e){
    if(document.getElementById('mussarela').checked){
        somaMussarela+=1;
        vendaMussarela+=25.00;        
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    }else if(document.getElementById('portuguesa').checked){
        somaPortuguesa+=1;
        vendaPortuguesa+=27.00;
        document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa;
        document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2);
    } else if(document.getElementById('calabresa').checked){
        somaCalabresa+=1;
        vendaCalabresa+=25.00;
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    } 
}

function estorno(e){
    if(document.getElementById('mussarela').checked){
        somaMussarela-=1;
        vendaMussarela-=25.00;
        if(somaMussarela <=0){
            somaMussarela=0;
            vendaMussarela=0.00;
        }
        document.getElementById('resultadoMussarela').innerHTML = somaMussarela;
        document.getElementById('vendaMussarela').innerHTML = vendaMussarela.toFixed(2);
    }else if(document.getElementById('portuguesa').checked){
        somaPortuguesa-=1;
        vendaPortuguesa-=27.00;
        if(somaPortuguesa <=0){
            somaPortuguesa=0;
            vendaPortuguesa=0.00;
        }
        document.getElementById('resultadoPortuguesa').innerHTML = somaPortuguesa;
        document.getElementById('vendaPortuguesa').innerHTML = vendaPortuguesa.toFixed(2);
    } else if(document.getElementById('calabresa').checked){
        somaCalabresa-=1;
        vendaCalabresa-=25.00;
        if(somaCalabresa <=0){
            somaCalabresa=0;
            vendaCalabresa=0.00;
        }
        document.getElementById('resultadoCalabresa').innerHTML = somaCalabresa;
        document.getElementById('vendaCalabresa').innerHTML = vendaCalabresa.toFixed(2);
    } 
}
function planilha(e){
    TableToExcel.convert(document.getElementById('table')); 
}