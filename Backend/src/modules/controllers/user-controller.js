// const config = require('config')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const User = require('../models/User-model')
const { check, validationResult } = require('express-validator')

module.exports.createNewUser =
    // [
    //     check('login', 'Логин должен состоять миниум из 6 символов').isLength({ min: 6 }),
    //     check('password', 'Пароль должен состоять миниум из 6 символов').isLength({ min: 6 })
    // ],

    async (req, res) => {
        const body = req.body;
        console.log(body)
        const hashPass = await bcrypt.hashSync(body.password, 12);
        const Token = jwt.sign({ user_id: User._id }, process.env.TOKEN_KEY, {
            expiresIn: "60m",
        });

        if (body.hasOwnProperty("login") && body.hasOwnProperty("password")) {
            User.findOne({
                login: body.login
            })
                .then((result) => {
                    if (result === null) {
                        const user = new User({
                            login: body.login,
                            password: hashPass,
                        });
                        user.save().then((result) => {
                            res.status(200).send({ Token, user });
                        });
                    } else {
                        res.status(400).send(`Ошибка`);
                    }
                });
        } else {
            return res.status(422).send("Не был введён логин или пароль");
        }
    };

module.exports.authorization = (req, res) => {
    const body = req.body;
    const Token = jwt.sign({ user_id: User._id }, process.env.TOKEN_KEY, {
        expiresIn: "60m",
    });
    if (body.hasOwnProperty("login") && body.hasOwnProperty("password")) {
        User.findOne({
             login: body.login 
            })
            .then((result) => {
            if (result !== null) {
                const hashPassword = bcrypt.compareSync(body.password, result.password);
                delete result._doc.password;
                if (hashPassword) {
                    res.status(200).send({ Token, result });
                } else {
                    res.status(402).send("Неверный пароль");
                }
            } else {
                res.status(404).send("Пользователь отсутствует");
            }
        });
    } else {
        res.status(400).send("Ошибка");
    }
};