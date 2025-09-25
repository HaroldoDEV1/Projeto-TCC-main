const mongoose = require('mongoose')

const medicineSchema = new mongoose.Schema({
    image: {
        type: String,
        required: false
    },
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    bulaPdf: {
        type: String,
        required: false
    },
    price: {
        type: Number,
        required: false
    }

},
{
    timestamps: true
})

const Medicine = mongoose.model('Medicine', medicineSchema)
module.exports = Medicine



