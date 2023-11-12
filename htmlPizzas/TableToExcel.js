import Parser from "./parser";
import saveAs from "file-saver";
import ExcelJS from "../node_modules/exceljs/dist/es5/exceljs.browser";

const TableToExcel = (function(Parser) {
  let methods = {};

  methods.initWorkBook = function() {
    let wb = new ExcelJS.Workbook();
    return wb;
  };

  methods.initSheet = function(wb, sheetName) {
    let ws = wb.addWorksheet(sheetName);
    return ws;
  };

  methods.save = function(wb, fileName) {
    wb.xlsx.writeBuffer().then(function(buffer) {
      saveAs(
        new Blob([buffer], { type: "application/octet-stream" }),
        fileName
      );
    });
  };

  methods.tableToSheet = function(wb, table, opts) {
    let ws = this.initSheet(wb, opts.sheet.name);
    ws = Parser.parseDomToTable(ws, table, opts);
    return wb;
  };

  methods.tableToBook = function(table, opts) {
    let wb = this.initWorkBook();
    wb = this.tableToSheet(wb, table, opts);
    return wb;
  };

  methods.convert = function(table, opts = {}) {
    let defaultOpts = {
      name: "export.xlsx",
      autoStyle: false,
      sheet: {
        name: "Sheet 1"
      }
    };
    opts = { ...defaultOpts, ...opts };
    let wb = this.tableToBook(table, opts);
    this.save(wb, opts.name);
  };

  return methods;
})(Parser);

export default TableToExcel;
window.TableToExcel = TableToExcel;(function main(win, doc) {
	'use strict';
	//Para fins de renderização.
	let btVendas = document.getElementById('vendas');
	let btEstorno = document.getElementById('estorno');

	btVendas.addEventListener('click', venda, false);
	btEstorno.addEventListener('click', estorno, false);


	let somaMussarela = 0;
	let somaMista = 0;
	let somaCalabresa = 0;
	let vendaMussarela = 0;
	let vendaMista = 0;
	let vendaCalabresa = 0;

	function venda(e) {
		if (document.getElementById('mussarela').checked) {
			somaMussarela = somaMussarela + 1;
			vendaMussarela = vendaMussarela + 25;
			document.getElementById("resultadoMussarela").innerHTML = somaMussarela;
			document.getElementById("vendaMussarela").innerHTML = vendaMussarela;
		} else if (document.getElementById("mista").checked) {
			somaMista = somaMista + 1;
			vendaMista = vendaMista + 25;
			document.getElementById("resultadoMista").innerHTML = somaMista;
			document.getElementById("vendaMista").innerHTML = vendaMista;
		} else if (document.getElementById('calabresa').checked) {
			somaCalabresa = somaCalabresa + 1;
			vendaCalabresa = vendaCalabresa + 25;
			document.getElementById("resultadoCalabresa").innerHTML = somaCalabresa;
			document.getElementById("vendaCalabresa").innerHTML = vendaCalabresa;
		}
	}

	function estorno(e) {
		if (document.getElementById('mussarela').checked) {
			somaMussarela = somaMussarela - 1;
			vendaMussarela = vendaMussarela - 25;
			if (somaMussarela < 0) {
				somaMussarela = 0;
				vendaMussarela = 0;
			}
			document.getElementById("resultadoMussarela").innerHTML = somaMussarela;
			document.getElementById("vendaMussarela").innerHTML = vendaMussarela;
		} else if (document.getElementById("mista").checked) {
			somaMista = somaMista - 1;
			vendaMista = vendaMista - 25;
			if (somaMista < 0) {
				somaMista = 0;
				vendaMista = 0;
			}
			document.getElementById("resultadoMista").innerHTML = somaMista;
			document.getElementById("vendaMista").innerHTML = vendaMista;
		} else if (document.getElementById('calabresa').checked) {
			somaCalabresa = somaCalabresa - 1;
			vendaCalabresa = vendaCalabresa - 25;
			if (somaCalabresa < 0) {
				somaCalabresa = 0;
				vendaCalabresa = 0;
			}
			document.getElementById("resultadoCalabresa").innerHTML = somaCalabresa;
			document.getElementById("vendaCalabresa").innerHTML = vendaCalabresa;
		}
	}

	function exportReportToExcel() {
		// TableToExcel.convert(document.getElementById("table"), {
		// name: "planilha.xlsx",
		// sheet: {
		// name: "planilha"
		// }
		// });
		XLSX.utils.html.save_table_as_excel(document.getElementById("table"), {
			name: "pizza_data.xlsx"
		});
	}
})(window, document);

