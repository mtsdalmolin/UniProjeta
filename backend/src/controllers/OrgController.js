const Org = require('../models/Org');

module.exports = {
	async index(req, res) {
		orgs = await Org.find().sort({ name: 1 });

		return res.json(orgs);
	},
	async get(req, res) {
		org = await Org.find(
			{ 
				$text: { 
					$search: req.params.name 
				} 
			}
		).sort({ name: 1 });

		return res.json(org);
	}
}