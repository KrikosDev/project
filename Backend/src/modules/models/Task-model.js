const {Schema, model, Types} = require('mongoose')

const taskScheme = new Schema({
    name: {type: String, unique: true, required: true},
    doctor: {type: String, required: true},
    date: {type: Date, required: true},
    complaints: {type: String, required: true},
    user_id: String
})

module.exports = model('Task', taskScheme)