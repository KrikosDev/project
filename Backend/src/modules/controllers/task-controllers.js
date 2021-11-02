const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const Task = require('../models/Task-model')
const { check, validationResult } = require('express-validator')

module.exports.getTasks = async (req, res) => {
    const body = req.body
}

module.exports.createNewTask = async (req, res) => {
    const body = req.body

    if(body.hasOwnProperty("name") &&
    body.hasOwnProperty("doctor") &&
    body.hasOwnProperty("date") &&
    body.hasOwnProperty("complaints")
    ) {
        const task = new Task ({
            name: body.name,
            doctor: body.doctor,
            date: body.doctor,
            complaints: body.complaints,
            user_id: body.user_id
        })
        await task.save().then(result => Task.find(
            {user_id: body.user_id})).then(result => { res.send({result})});
    } else {
        
    }
}