const { Schema, model } = require('mongoose');

const ProtocolSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    passed: {
        type: Boolean,
        default: false
    },
    date: {
        type: Date
    },
    document: {
        type: String
    }
});

const Protocol = model("Protocol", ProtocolSchema);
module.exports = Protocol;