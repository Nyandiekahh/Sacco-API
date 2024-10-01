const express = require('express');
const router = express.Router();
const accountController = require('../controllers/accountController');

router.post('/', accountController.createAccount);
router.get('/:id', accountController.getAccount);

// Additional routes for updating accounts...

module.exports = router;
