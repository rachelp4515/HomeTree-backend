const { Schema, model } = require('mongoose');

const propSchema = new Schema({
    hostID:{type: String, required: true },
    fName:{type: String, required: true },
    lName:{type: String, required: true },
    adrs:{type: String, required: true },
    propNN:{type: String},
    phone:{type: String, required: true },
    about:{type: String},
    rooms:[{type: String}],
    books:[{type: String}]
})

module.exports = model('Property', propSchema);