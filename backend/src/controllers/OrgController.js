const Org = require('../models/Org');

module.exports = {
	async index(req, res) {
		let orgs;
		if (req.headers.name.length > 0 && req.headers.name !== 'undefined') {
			orgs = await Org.find({ 
				$text: { 
					$search: req.headers.name 
				} 
			}).sort({ name: 1 });
		} else {
			orgs = await Org.find().sort({ name: 1 });
		}

		return res.json(orgs);
	}
}