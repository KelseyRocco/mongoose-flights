const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

//sub doc
const destinationSchema = new Schema({
    airport: String,
    arrivalDate: Date
}, {
    timestamps: true
});

//main doc
const flightSchema = new Schema({
    airline: String,
    airport: String,
    flightNo: Number,
    departureDate: Date,
    destinations: [destinationSchema]
}, {
    timestamps: true
});


// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);