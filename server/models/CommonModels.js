const mongoose = require('mongoose')



const schema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    }
}, {
    timestamps: true
})



const Category = mongoose.model('Category', schema);
const Author = mongoose.model('Author', schema);
const Tag = mongoose.model('Tag', schema);

module.exports = {
    Category,
    Author,
    Tag
}