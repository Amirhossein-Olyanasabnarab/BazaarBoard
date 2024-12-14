const mongoose = require('mongoose');
require("dotenv").config();

const MONGODB_URL = process.env.MONGODB_URL;

mongoose.connect(MONGODB_URL).then(() => {
    console.log("Connecting to Mongo was succeed.")
}).catch(err => {
    console.log(err?.message ?? "Connection was failed!!!");
});
