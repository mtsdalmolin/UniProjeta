const { Schema, model } = require('mongoose');

const OrgSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	initials: {
		type: String,
		required: true,
	},
	state: {
		type: String,
		required: true,
	},
	SIAFI: {
		type: Number,
		required: true,
	},
	data: [{
		year: {
			type: Number,
		},
		igc_value: {
			type: Number,
		},
		igc_cont_value: {
			type: Number,
		},
		expenses: {
			committed: {
				type: Number,
			},
			settled: {
				type: Number,
			},
			paid: {
				type: Number,
			},
		}
	}],
}, {
	timestamps: true,
});

module.exports = model('Org', OrgSchema);