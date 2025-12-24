import {  saveToFile, usersList } from "../middlewares/auth.js";

const getAllUsers = async (req, res) => {
    await res.send (usersList)

}

const createUser = async (req, res) => {
    const doubleCheck=usersList.find((user)=>user.username === req.body.username)
    if (!doubleCheck){    
        usersList.push(req.body)
        saveToFile("./data/users.json",usersList)
        res.send("added sucssefully")
    }else{
        res.sendStatus(409)
    }
}

const updateUser = async (req, res) => {
    const currentIndex =await usersList.findIndex((user)=>user.username === req.params.username)
    usersList.splice(currentIndex,1,req.body.password)
    saveToFile("./data/users.json",usersList)
    res.send("user updated");
}

const deleteUser = async (req, res) => {
    const currentIndex =await usersList.findIndex((user)=>user.username === req.params.username)
    usersList.splice(currentIndex,1)
    saveToFile("./data/users.json",usersList)
    res.send("deleted");
    
}



export {
    getAllUsers,
    createUser,
    updateUser,
    deleteUser,
}