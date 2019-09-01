const xlsx = require('node-xlsx').default;
const Org = require('../models/Org');
const axios = require('axios');
const fs = require('fs');

async function getExpenses(orgs, ret) {
	for(var org in orgs) {
		ret[org] = await axios.get(`http://www.transparencia.gov.br/api-de-dados/despesas/por-orgao?ano=${orgs[org][0]}&orgao=${orgs[org][7]}&pagina=1`)
		.then( ({ data }) => {
			if (ret[org] && ret[org].hasOwnProperty('data')) {
				obj = {};
				obj.year = orgs[org][0];
				obj.igc_value = orgs[org][6];
				obj.igc_cont_value = orgs[org][5];
				expenses = {};
				expenses.committed = data[0].empenhado.replace(/\./g, '').replace(',', '.');
				expenses.settled = data[0].liquidado.replace(/\./g, '').replace(',', '.');
				expenses.paid = data[0].pago.replace(/\./g, '').replace(',', '.');
				obj.expenses = expenses;
				ret[org]['data'].push(obj);
				return ret[org];
			} else {
				let ies = {};
				ies.name = orgs[org][1];
				ies.initials = orgs[org][2];
				ies.state = orgs[org][4];
				ies.SIAFI = orgs[org][7];

				ies['data'] = [];
				obj = {};
				obj.year = orgs[org][0];
				obj.igc_value = orgs[org][6];
				obj.igc_cont_value = orgs[org][5];
				expenses = {};
				expenses.committed = data[0].empenhado.replace(/\./g, '').replace(',', '.');
				expenses.settled = data[0].liquidado.replace(/\./g, '').replace(',', '.');
				expenses.paid = data[0].pago.replace(/\./g, '').replace(',', '.');
				obj.expenses = expenses;
				ies['data'].push(obj);
				return ies;
			}
		});
		console.log(ret[org]);
	}
		// console.log(orgs);

	return ret;
}

function getXLSX(file_path) {
	const workSheetsFromFile = xlsx.parse(file_path);
	return workSheetsFromFile[0]['data'];
}

function getSIAFI(ies_name) {
	const sheet = getXLSX("../data/cod_siafi.csv");

	const header = sheet[0];
	sheet.shift();

	for (line in sheet) {
		var ies = sheet[line];
		for (field in header) {
			if (header[field] === 'Órgão UGE Nome') {

				if (ies[field].includes(ies_name)) {
					var siafi = ies[0];
					// console.log(ies[field] + ` - ` + ies_name + ` - ` + ies[0]);
					break;
				}
			}
		}
	}
	return siafi;
}

async function getXLSX_IES(path) {
	const sheet = getXLSX(path);

	const header = sheet[0];
	sheet.shift();
	
	var index_categ = 0;
	for (field in header) {
		if (header[field].toLowerCase().includes('administ') || header[field].toLowerCase().includes('categ')) {
			break;
		}
		index_categ++;
	}

	var json = [];
	for (line in sheet) {
		var ies = sheet[line];

		if (!ies[index_categ].toLowerCase().includes('privada') && 
			(ies[index_categ].toLowerCase().includes('federal')) || 
			ies[index_categ].toLowerCase().includes('pública')) {
			json[line] = {};
			let i = 0;
			for (field in header) {
				var value = header[field];
				json[line][i] = ies[field];
				i++;
			}
			json[line][i] = getSIAFI(ies[1]);
		}
	}

	orgs = [];

	for (i = 0, j = 0; i < json.length; i++)
		if (json[i] !== undefined && json[i][7] !== undefined) {
			orgs[j] = json[i];
			j++;
		}

	return orgs;
}

// function getXLSX_Course(ies_initials, digit_year) {
// 	file_path = '../data/resultado_cpc_201' + digit_year + '.csv';
// 	const sheet = getXLSX(file_path);

// 	const header = sheet[0];
// 	sheet.shift();

// 	let initials_index = 0;
// 	for (field in header) {
// 		if (header[field] === 'Sigla da IES')
// 			break;
// 		initials_index++
// 	}

// // console.log(header.length);
// 	courses = [];

// 	let i = 0;
// 	for (line in sheet) {
// 		var ies = sheet[line];
// 		if (ies[initials_index] === ies_initials) {
// 			courses[i] = {};
// 			for (field in header) {
// 				if (header[field] === 'Sigla da IES')
// 					continue;
// 				courses[i][header[field]] = ies[field];
// 			}
// 			i++;
// 		}
// 	}
// 	return courses;
// }

module.exports = {
	async index(req, res) {

		paths = [
			'../data/resultado_igc_2014.csv',
			'../data/resultado_igc_2015.csv',
			'../data/resultado_igc_2016.csv',
			'../data/resultado_igc_2017.csv',
		];

// path.split('_')[2].split('.')[0],

		var ret = [];
		for (const [idx, path] of paths.entries()) {
			console.log(path);
			orgs = await getXLSX_IES(path);
			// colocar a parte das despesas...
			ret = await getExpenses(orgs, ret);
			console.log(ret);
		}

		console.log('escrevendo no arquivo');
		fs.writeFile('../data/expenses2.json', JSON.stringify(ret), 'utf8', (err) => {
			if (err) throw err;
		});

		return res.json(ret);
	},
	async store(req, res) {
		const orgs = JSON.parse(fs.readFileSync('../data/expenses2.json','utf8'));
		var ret;
		for (var org in orgs) {
			try {
				ret = await Org.create({
					name: orgs[org].name,
					initials: orgs[org].initials,
					state: orgs[org].state,
					SIAFI: orgs[org].SIAFI,
					data: orgs[org].data,
				});
				console.log(`Done inserting ${ret.initials}!`);
				process.exit();
				// await Org.find({}, (err, docs) => {
				// 	if (err)
				// 		throw err;
				// 	else {
				// 		console.log(docs);
				// 		process.exit();
				// 	}
				// });
			} catch(e) {
				console.log(e);
				process.exit();
			}
		}
		return res.json(orgs);
	}
}