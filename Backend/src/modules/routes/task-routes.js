const express = require('express');
const router = express.Router();


// /user/register

const {
    createNewTask,
    getTasks,
    deleteTask,
    patchTask
  } = require('../controllers/task-controller');

router.get('/getTasks', getTasks);
router.post('/createNewTask', createNewTask);
router.delete('/deleteTask', deleteTask);
router.patch('/patchTask', patchTask);

module.exports = router;