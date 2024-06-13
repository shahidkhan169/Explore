const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const exploreRouter = require('./router/explore');

require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors());

const url = "mongodb://localhost:27017/Explore";

mongoose.connect(url, {
    useNewUrlParser: true, 
    useUnifiedTopology: true
})
    .then(() => {
        console.log("Connected to MongoDB");
    })
    .catch((err) => {
        console.error("Error connecting to MongoDB:", err.message);
    });

app.use('/api', exploreRouter);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
