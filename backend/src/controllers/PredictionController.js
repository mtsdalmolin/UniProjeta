const xlsx = require('node-xlsx').default;
const Prediction = require('../models/Prediction');
const Org = require('../models/Org');

function getXLSX(file_path) {
	const workSheetsFromFile = xlsx.parse(file_path);
	return workSheetsFromFile[0]['data'];
}

function getXLSX_Predictions(path) {
	const sheet = getXLSX(path);
	const header = sheet[0];
	sheet.shift();
	
	let json = [];
	for (line in sheet) {
		let org = [];
		let ies = sheet[line];
		let i = 0;
		for (field in header) {
			org[header[field]] = ies[field];
			i++;
		}
		json.push(org);
	}

	return json;
}

module.exports = {
	async index(req, res) {
		const { universityId } = req.params;

		let predicted_data = [];
		targetUniversity = await Org.findById(universityId);
		const predictions = targetUniversity.predicted_data;
		for (prediction in predictions) {
			let p_data = await Prediction.findById(predictions[prediction]);
			predicted_data.push(p_data);
		}

		return res.json(predicted_data);
	},
	async store(req, res) {

		let paths = [
			'../data/predicted14.csv',
			'../data/predicted15.csv',
			'../data/predicted16.csv',
			'../data/predicted17.csv',
			'../data/predicted1819.csv'
		];


		for (const [idx, path] of paths.entries()) {
			orgs = getXLSX_Predictions(path);

			for (org in orgs) {
				let data = {};
				data.year = orgs[org]['year'];
				data.predicted_igc = orgs[org]['igc_cont_value'];

				const prediction = await Prediction.create({
					predicted_data: data,
				});

				const ies = await Org.find({SIAFI: orgs[org]['SIAFI']});
				if (ies) {
					ies[0].predicted_data.push(prediction);
					await ies[0].save().then(() => {
						console.log(`Inserted predicted data for ${orgs[org]['initials']} of ${data.year} - SIAFI: ${orgs[org]['SIAFI']}`);
					});
				}
			}
		}

		return res.json(orgs);
	}
}