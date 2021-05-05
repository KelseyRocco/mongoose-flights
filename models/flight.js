const mongoose = require('mongoose');
// optional shortcut to the mongoose.Schema class
const Schema = mongoose.Schema;

//sub doc
const destinationSchema = new Schema({
    airport: {type:String, enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]},
    arrival: Date
}, {
    timestamps: true
});

//main doc
const flightSchema = new Schema({
    airline: {type: String, enum: ["American", "Southwest", "United"]},
    airport: {type: String, default: "DEN", enum: ["AUS", "DFW", "DEN", "LAX", "SAN"]},
    flightNo: Number,
    departureDate: {type: Date, default: 2022-05-05},
    destinations: [destinationSchema]
}, {
    timestamps: true
});


// Compile the schema into a model and export it
module.exports = mongoose.model('Flight', flightSchema);