const mongoose = require('mongoose');

const yourSchema = new mongoose.Schema({
    cn: {
        type: Number,
    },
});

// Create the model based on the schema
const Flag = mongoose.model('YourModel', yourSchema);

// Export the model
module.exports = Flag;
