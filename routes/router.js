const express = require('express')
const router = express.Router()
const customerRegistration = require('../models/customer')


router.post('/register', (req,res) => {
    const signup = new customerRegistration({
        username: req.body.username,
        phonenumber: req.body.phonenumber,
        email: req.body.email,
        date: req.body.date,
        gender: req.body.gender,
        location: req.body.location,
        password: req.body.location,
        confirm: req.body.confirm

    })
    signup.save()
    .then(data =>{
        res.json(data)
    })
    .catch(err => {
        res.json(err)
    })
})
module.exports = router