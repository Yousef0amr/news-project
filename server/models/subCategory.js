const mongoose = require('mongoose')



const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: mongoose.Types.ObjectId,
        ref: 'Category',
        required: true
    }
}, {
    timestamps: true
})




module.exports = mongoose.model('SubCategory', schema);
