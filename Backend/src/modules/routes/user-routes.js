const express = require('express');
const router = express.Router();

const {
    createNewUser,
    authorization,
  } = require('../controllers/user-controller');

router.post('/createNewUser', createNewUser);
router.post('/authorization', authorization);

module.exports = router;