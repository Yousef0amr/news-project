const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose')

const app = express()
const PORT = process.env.PORT || 5000


app.use(cors({}));





app.listen(PORT, () => {
    console.log(`conntect to port ${PORT}`)
}).then(() => mongoose.connect(process.env.MONGO_URL, {}).then())












