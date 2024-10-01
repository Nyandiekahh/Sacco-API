const Loan = require('../models/loanModel');

exports.createLoan = async (req, res) => {
    try {
        const loanId = await Loan.create(req.body);
        res.status(201).json({ id: loanId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create loan.' });
    }
};

exports.getLoan = async (req, res) => {
    try {
        const loan = await Loan.get(req.params.id);
        if (!loan) {
            return res.status(404).json({ error: 'Loan not found.' });
        }
        res.json(loan);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve loan.' });
    }
};

// Additional controller methods for updating loans...
