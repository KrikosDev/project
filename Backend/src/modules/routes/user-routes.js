const express = require('express');
const router = express.Router();


// /user/register

const {
    createNewUser,
    authorization,
  } = require('../controllers/user-controller');

router.post('/createNewUser', createNewUser);
router.post('/authorization', authorization);

module.exports = router;