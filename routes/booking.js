const router = require('express').Router();

const Booking = require('../models/Booking');


router.post("/postbooking", async (req, res) => {
    const name = req.body.name
    const password = req.body.password
    const travelsid = req.body.flightid
    
    const book = new Booking({name:name,password:password,travelsid:travelsid})
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