require("dotenv").config();
const mongoose = require("mongoose"); 


const userSchema = new mongoose.Schema ({
    username: {
        required: true, 
        unique: true, 
        type: String
    },
    email: {
        required: true, 
        unique: true, 
        type: String
    },
    password: {
        required: true, 
        unique: true, 
        type: String
    }
})

const users = mongoose.connection.model("users", userSchema) 

async function login (bodyUsername, bodyPassword) {
    const user = await users.findOne({username: bodyUsername})
    if (!user) {
        console.log("Username doesn't exist!")
        } else if (user.password === bodyPassword) {
            return true   
        } else {
            console.log("Login credentials do not match!")
            return false 
        }
}


module.exports = {
    login
}