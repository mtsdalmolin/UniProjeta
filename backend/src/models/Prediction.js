const { Schema, model } = require('mongoose');

const PredictionSchema = new Schema({
	predicted_data: {
		year: {
			type: Number,
		},
		predicted_igc: {
			type: Number,
		}
	},
}, {
	timestamps: true,
});

module.exports = model('Prediction', PredictionSchema);