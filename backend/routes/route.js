const express = require("express")

const {postUser, getUser, updateUser, deleteUser} = require("../controller/app")
const route = express.Router()

route.post("/api/post-user", postUser)
route.get("/api/get-user", getUser)
route.put("/api/update-user/:id", updateUser)
route.delete("/api/delete-user/:id", deleteUser)

module.exports = route