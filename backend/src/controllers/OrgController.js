const axios = require('axios');

module.exports = {
	async store(req, res) {
		const body = req.body;

		const response = await axios.get(`http://www.transparencia.gov.br/api-de-dados/despesas/por-orgao?ano=2017&orgaoSuperior=26000&pagina=1`);

		return res.json(response.data);
	}
}