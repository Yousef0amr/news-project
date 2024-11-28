const mongoose = require('mongoose')



const schema = new mongoose.Schema({
    image: {

    },
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    tag: [{ type: mongoose.Types.ObjectId, ref: 'Tag' }],
    author: [{ type: mongoose.Types.ObjectId, ref: 'Author' }],
    subCategory: {
        type: mongoose.Types.ObjectId,
        ref: 'SubCategory',
        required: true
    },
    urls: [
        {
            type: String,
            default: ''
        }
    ],
    date: {
        type: Date,
        required: true
    },
    readMin: {
        type: Number,
        required: true
    }
}, {
    timestamps: true
})




module.exports = mongoose.model('Article', schema);