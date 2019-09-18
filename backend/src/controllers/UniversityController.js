const Org = require('../models/Org');

module.exports = {
	async index(req, res) {
		const {universityId} = req.params;

		targetUniversity = await Org.findById(universityId);

		if (!targetUniversity) {
			return res.status(400).json({ error: 'University does not exists! :(' });
		}

		return res.json(targetUniversity);
	}
}