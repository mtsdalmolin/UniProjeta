const Org = require('../models/Org');

module.exports = {
	async index(req, res) {
		// const body = req.body;

		// const { user } = req.headers;

		console.log(await Org.find());

		console.log(req, res);

		return res.json(response.data);
	}
}