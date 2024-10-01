const Member = require('../models/memberModel');

exports.registerMember = async (req, res) => {
    try {
        const memberId = await Member.create(req.body);
        res.status(201).json({ id: memberId });
    } catch (error) {
        res.status(500).json({ error: 'Failed to register member.' });
    }
};

exports.getMember = async (req, res) => {
    try {
        const member = await Member.get(req.params.id);
        if (!member) {
            return res.status(404).json({ error: 'Member not found.' });
        }
        res.json(member);
    } catch (error) {
        res.status(500).json({ error: 'Failed to retrieve member.' });
    }
};

// Additional controller methods for updating members...
