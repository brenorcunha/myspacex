(function main(win,doc){
	'use strict';
    //Para fins de renderização.
	let btVendas = document.getElementById('vendas');
	let btEstorno = document.getElementById('estorno');

	btVendas.addEventListener('click',venda,false);
	btEstorno.addEventListener('click',estorno,false);


	let somaMussarela = 0;
	let somaMista = 0;
	let somaCalabresa = 0;
	let vendaMussarela = 0;
	let vendaMista = 0;
	let vendaCalabresa = 0;

	function venda(e) 
	{
	    if(document.getElementById('mussarela').checked)
	    {
            somaMussarela = somaMussarela + 1;
		    vendaMussarela = vendaMussarela + 25;
		    document.getElementById("resultadoMussarela").innerHTML = somaMussarela;
		    document.getElementById("vendaMussarela").innerHTML = vendaMussarela;
	    }else if(document.getElementById("mista").checked)
	    {
		    somaMista = somaMista + 1;
		    vendaMista = vendaMista + 25;
		    document.getElementById("resultadoMista").innerHTML = somaMista;
		    document.getElementById("vendaMista").innerHTML = vendaMista;
	    }else if(document.getElementById('calabresa').checked)
	    {
		    somaCalabresa = somaCalabresa + 1;
		    vendaCalabresa = vendaCalabresa + 25;
		    document.getElementById("resultadoCalabresa").innerHTML = somaCalabresa;
		    document.getElementById("vendaCalabresa").innerHTML = vendaCalabresa;
	    }
	}

	function estorno(e) 
	{
	    if(document.getElementById('mussarela').checked)
	    {
		    somaMussarela = somaMussarela - 1;
		    vendaMussarela = vendaMussarela - 25;
            if(somaMussarela<0){
                somaMussarela = 0;
                vendaMussarela=0.00;
            }
		    document.getElementById("resultadoMussarela").innerHTML = somaMussarela;
		    document.getElementById("vendaMussarela").innerHTML = vendaMussarela;
	    }else if(document.getElementById("mista").checked)
	    {
		    somaMista = somaMista - 1;
		    vendaMista = vendaMista - 25;
            if(somaMista<0){
                somaMista = 0;
                vendaMista = 0.00;
            }
		    document.getElementById("resultadoMista").innerHTML = somaMista;
		    document.getElementById("vendaMista").innerHTML = vendaMista;
	    }else if(document.getElementById('calabresa').checked)
	    {
		    somaCalabresa = somaCalabresa - 1;
		    vendaCalabresa = vendaCalabresa - 25;
            if(somaCalabresa<0){
                somaCalabresa = 0;
                vendaCalabresa = 0.00;
            }
		    document.getElementById("resultadoCalabresa").innerHTML = somaCalabresa;
		    document.getElementById("vendaCalabresa").innerHTML = vendaCalabresa;
	    }
	}

	function exportReportToExcel() {
        TableToExcel.convert(document.getElementById("table"), {
	    name: "planilha.xlsx",
	    sheet: {
		name: "planilha"
	    }
	    });
	}
})(window,document);


/*CALCULADORA SIMPLES: 
const x = prompt("Informe um numero: ");
num1 = parseInt(x, 10);
const y = prompt("Informe o segundo numero: ");
num2 = parseInt(y, 10);

let soma = document.write("Soma: ", num1+num2);
let subt = document.write("\n Subtração: ", num1-num2);
let mult = document.write("\n Multiplicação: ", num1*num2);
let divi = document.write("\n Divisão: ", num1/num2); 

//document.write((9 < 5) && (0 >= 7) && false); SÒ PRA VER O QUE RETORNA.

//ALGORITMO COMPARAÇÃO DE VELOCIDADES: 
var nv1 = prompt("Insira o nome do veículo 1: ");
var tmp = prompt("Insira a velocidade em KM/H do mesmo: ");
var vv1 = parseInt(tmp, 10);

var nv2 = prompt("Insira o nome do veículo 2: ");
var tmp = prompt("Insira a velocidade em KM/H do mesmo: ");
var vv2 = parseInt(tmp, 10);

if (vv1===vv2){document.write( "Ambos têm a mesma veloccittà");} else if (vv1>vv2){document.write("Veículo 1 é mais rápido");} else {document.write("Veículo 2 é mais rápido.");}
*/