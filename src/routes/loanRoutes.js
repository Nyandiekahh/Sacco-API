const express = require('express');
const router = express.Router();
const loanController = require('../controllers/loanController');

router.post('/', loanController.createLoan);
router.get('/:id', loanController.getLoan);

// Additional routes for updating loans...

module.exports = router;
