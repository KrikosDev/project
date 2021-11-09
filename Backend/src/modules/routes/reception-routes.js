const express = require('express');
const router = express.Router();


// /user/register

const {
    createNewReception,
    getReceptions,
    deleteReception,
    patchReception
  } = require('../controllers/reception-controllers');

router.get('/getReceptions', getReceptions);
router.post('/createNewReception', createNewReception);
router.delete('/deleteReception', deleteReception);
router.patch('/patchReception', patchReception);

module.exports = router;