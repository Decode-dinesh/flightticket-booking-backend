const router = require('express').Router();

const Booking = require('../models/Booking');


router.post("/postbooking", async (req, res) => {
    const book = new Booking(req.body);
    try {
        const savedpost = await book.save()
        res.status(200).json(savedpost);
    } catch (err) {
        res.status(500).json(err);
    }
})

// get method

router.get("/getallbooking", async (req,res) => {
    try {
        const booking = await Booking.find();
        res.status(200).json(booking);
    } catch (err) {
        res.status(500).json(err)
    }
})

// Delete

router.delete("/booking/:id", async (req,res)=>{
    try {
        const booking = await Booking.findById(req.params.id);
        res.status(200).json(booking);
    } catch (err) {
        res.status(500).json(err);
    }
})


module.exports = router;