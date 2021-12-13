const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const customersSchema = new Schema({
    firstname: {type: String, required: true},
    lastname: {type: String, required: true},
    Company: {type: String, required: true},
    email: {type: String, match: /\S+@\S+\.\S+/},
});

module.exports = mongoose.model('customers', customersSchema);