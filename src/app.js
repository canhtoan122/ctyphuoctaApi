const express = require("express");
const app = express();
const router = require("./routers/email.route.js");
const bodyParser = require("body-parser");
const cors = require("cors");

require("dotenv").config();
const PORT = process.env.PORT || 8080;
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.use(cors());
app.use("/", router);
app.listen(PORT, () =>{
    console.log(`server đang lắng nghe http://localhost:${PORT}`);
})