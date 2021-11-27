const mongoose = require('mongoose');

const BookingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    },
    travelsid: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Booking', BookingSchema);
