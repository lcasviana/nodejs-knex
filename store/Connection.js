const mongoose = require('mongoose');
const connectionString = 'mongodb+srv://user:pw@cluster0-r1rrx.mongodb.net/Cluster0?retryWrites=true&w=majority';

const openConnection = () => mongoose.connect(connectionString, { useNewUrlParser: true });

module.exports = { openConnection };
