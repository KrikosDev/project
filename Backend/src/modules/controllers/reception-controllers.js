const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Reception = require('../models/Reception-model')
const { check, validationResult } = require('express-validator')

module.exports.getReceptions = async (req, res, next) => {
    await Reception.find({ user_id: req.query.user_id }).then((result) => {
        res.send({ result })
    })
};

module.exports.createNewReception = async (req, res) => {
    const body = req.body
    // console.log(body);
    if (
        body.hasOwnProperty("name") &&
        body.hasOwnProperty("doctor") &&
        body.hasOwnProperty("date") &&
        body.hasOwnProperty("complaints")
    ) {
        const reception = new Reception({
            name: body.name,
            doctor: body.doctor,
            date: body.date,
            complaints: body.complaints,
            user_id: body.user_id
        })
        reception.save().then(result => Reception.find(
            { user_id: body.user_id })).then(result => { res.send({ result }) });
    } else {
        res.status(422).send('Error! Params not correct');
    }
}