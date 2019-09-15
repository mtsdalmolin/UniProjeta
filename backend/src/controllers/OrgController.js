const Org = require('../models/Org');

module.exports = {
	async index(req, res) {
		orgs = await Org.find().sort({ name: 1});

		return res.json(orgs);
	}
}