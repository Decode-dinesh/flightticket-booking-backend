const router = require('express').Router();
const Flights = require('../models/Flightinfo');

// post flight

router.post("/flight", async (req,res) => {
    const flight = new Flights(req.body)
    try {
        const savedpost = await flight.save();
        res.status(200).json(savedpost);
    } catch (err) {
        res.status(500).json(err)
    }
});

// put method

router.put("/update/:id", async (req, res) => {
    try {
        const updatedPost = await Flights.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new: true}
        );
        res.status(200).json(updatedPost);
    } catch (err) {
        res.status(500).json(err);
    }
})


// get 
router.get("/getallflights", async (req,res) => {
    try{
    const flight = await Flights.find();
    res.status(200).json(flight)
    }catch(err){
        res.status(500).json(err);
    }
})

// get by id
router.get("/getflight/:id", async (req, res) => {
    try {
        const flight = await Flights.findById(req.params.id);
        res.status(200).json(flight);
    } catch (err) {
        res.status(500).json(err)
    }
});

// =============delete================
router.delete("/deleteflight/:id", async (req, res) => {
    try {
        const flight = await Flights.findById(req.params.id);
        res.status(200).json(flight);
    } catch (err) {
        res.status(500).json(err);
    }
})

module.exports = router;
