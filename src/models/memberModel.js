const admin = require('firebase-admin');
const db = admin.firestore();

const Member = {
    create: async (data) => {
        const memberRef = db.collection('members').doc();
        await memberRef.set(data);
        return memberRef.id;
    },
    get: async (id) => {
        const memberRef = db.collection('members').doc(id);
        const doc = await memberRef.get();
        return doc.exists ? { id: doc.id, ...doc.data() } : null;
    },
    update: async (id, data) => {
        const memberRef = db.collection('members').doc(id);
        await memberRef.update(data);
    },
    // Additional methods can be added here...
};

module.exports = Member;
