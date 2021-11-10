const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Reception = require('../models/Reception-model')
const { check, validationResult } = require('express-validator')

module.exports.getReceptions = async (req, res) => {
    await Reception.find({ user_id: req.query.user_id })
        .then((result) => {
            res.send({ result })
        })
};

module.exports.createNewReception = async (req, res) => {
    const body = req.body
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
        res.status(422).send('Ошибка! Не корректные данные');
    }
}

module.exports.deleteReception = async (req, res) => {
    Reception.deleteOne({ _id: req.query.id }).then((result) => {
        Reception.find({ user_id: req.query.user_id }).then((result) => {
            res.send({ result })
        })
    });
};

module.exports.patchReception = (req, res) => {
    const body = req.body;

    if (body.hasOwnProperty("name") &&
        body.hasOwnProperty("doctor") &&
        body.hasOwnProperty("date") &&
        body.hasOwnProperty("complaints")) {
        Reception.updateOne(
            { _id: body._id },
            {
                name: body.name,
                doctor: body.doctor,
                date: body.date,
                complaints: body.complaints
            }
        ).then((result) => {
            Reception.find({ user_id: body.user_id }).then((result) => {
                res.send({ result })
            })
        })
    } else {
        res.status(422).send('Ошибка данных')
    }
}

// module.exports.patchReception = (req, res, next) => {
//     const body = req.body;

//     if (body.hasOwnProperty("name")
//         && body.hasOwnProperty("date")
//         && body.hasOwnProperty("doctor")
//         && body.hasOwnProperty("complaints")) {
//         Reception.updateOne(
//             { _id: body._id },
//             {
//                 name: body.name,
//                 date: body.date,
//                 doctor: body.doctor,
//                 complaint: body.complaint
//             }
//         ).then((result) => {
//             Reception.find({ user_id: body.user_id }).then((result) => {
//                 res.send({ result })
//             })
//         })
//     } else {
//         res.status(422).send("error");
//     }