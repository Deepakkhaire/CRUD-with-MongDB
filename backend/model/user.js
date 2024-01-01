const express = require("express");

const mongoose = require("mongoose");

mongoose.connect("mongodb://127.0.0.1:27017/usersDB")
    .then(()=>{
        console.log("connection successfully...");
    }).catch(e =>{
        console.log(e);
    })

const userSchema = mongoose.Schema({
    firstname : {
        type : String,
        require : true
    },
    lastname : {
        type : String,
        require : true
    },
    email : {
        type : String,
        require : true
    },
    password : {
        type : String,
        require : true
    },
})

module.exports = mongoose.model("userDetails", userSchema)