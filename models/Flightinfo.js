const mongoose = require('mongoose');

const FlightsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    from: {
        type: String,
        required: true,
    },
    to: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    fare: {
        type: Number,
        required: true, 
    },
})

module.exports = mongoose.model('flight', FlightsSchema);