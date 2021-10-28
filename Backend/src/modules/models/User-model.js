const {Schema, model, Types} = require('mongoose')

const userScheme = new Schema({
    login: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    // links: [{ type: Types.ObjectId, ref: 'Link' }]
})

module.exports = model('User', userScheme)