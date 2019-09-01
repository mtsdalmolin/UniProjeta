const { Schema, model } = require('mongoose');

const CourseSchema = new Schema({
	name: {
		type: String,
		required: true,
	},
	city: {
		type: String,
		required: true,
	},
	cpc: [{
		year: {
			type: Number,
		},
		value: {
			type: Number,
		},
		cont_value: {
			type: Number,
		},
	}]
}, {
	timestamps: true,
});

module.exports = model('Course', CourseSchema);