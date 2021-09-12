const mongoose = require("mongoose");

const dtoSchema = mongoose.Schema({
	firstName: {
		type: String,
		required: true
	},
	lastName: {
		type: String,
		required: false
	},
	phoneNumber: {
		type: String,
		required: false
	},
	email: {
		type: String,
		required: false
	},
});

module.exports = mongoose.model("Dto",dtoSchema);