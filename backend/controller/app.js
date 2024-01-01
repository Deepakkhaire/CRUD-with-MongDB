const express = require("express");

const userData = require("../model/user")

const postUser = async (req, res)=>{
    try{
        const CreateUser = new userData({
            firstname : req.body.firstname,
            lastname : req.body.lastname,
            email : req.body.email,
            password : req.body.password
        })
        const uData = await CreateUser.save();
        res.send(uData)
    }catch(err){
        console.log(err);
    }
}

const getUser = async (req, res)=>{
    try{
        res.send(await userData.find({}))
    }catch(e){
        console.log(e);
    }
}

const updateUser = async( req, res)=>{
    try{
        const id = req.params.id;
        const updatedUser = await userData.findByIdAndUpdate(id,{
            $set:{
                firstname : req.body.firstname,
                lastname : req.body.lastname,
                email : req.body.email,
                password : req.body.password
            }
        })
        res.send(updatedUser)
    }catch(e){
        console.log(e);
    }
}

const deleteUser = async (req,res)=>{
    try{
        const id = req.params.id;
        const deletedUser = await userData.findByIdAndDelete(id)
        res.send(deletedUser)
    }catch(e){
        console.log(e);
    }
}

module.exports = {postUser, getUser, updateUser, deleteUser}