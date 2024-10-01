const Account = require('../models/accountModel');

exports.createAccount = async (req, res) => {
    try {
        const accountId = await Account.create(req.body);
        res.status(201).json({ id: accountId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to create account.' });
    }
};

exports.getAccount = async (req, res) => {
    try {
        const account = await Account.get(req.params.id);
        if (!account) {
            return res.status(404).json({ error: 'Account not found.' });
        }
        res.json(account);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve account.' });
    }
};

// Additional controller methods for updating accounts...
