const express = require('express');
const app = express()
require('dotenv').config();
const port = 8000;
const mongoose = require("mongoose");
const mongouri = process.env.MONGO_URI;
const cors = require("cors");

app.use(cors())
require('./models/model')
require('./models/post')
app.use(express.json())
app.use(require("./routes/auth"))
app.use(require("./routes/createPost"))
mongoose.connect(mongouri , { 
    useNewUrlParser : true,
    useUnifiedTopology : true
});

mongoose.connection.on("connected", () => {
    console.log("successfully connected to mongo")
})

mongoose.connection.on("error", () => {
    console.log("not connected to mongodb")
})


app.listen(port, () => {
    console.log("server is running on port" + " " + port)

})