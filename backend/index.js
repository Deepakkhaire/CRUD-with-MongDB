
const express = require("express");
const cors = require("cors")

const router = require("./routes/route")
const app = express();

app.use(cors())
app.use(express.json());
app.use("/", router)
// app.get("/", (req, res) =>{
//     res.send("hello...")
// })

app.listen(3000)