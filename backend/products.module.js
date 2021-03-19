require("dotenv").config();
const mongoose = require("mongoose"); 

//here we connect with the database
mongoose.connect(process.env.MONGO_URI, {useUnifiedTopology: true, useNewUrlParser: true})
.then(() => {
    console.log("Connected to Database")
})

const productSchema = new mongoose.Schema({
    articleNo: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    }
})

//apply the Schema to the collection and apply the schema to it
//this constant is an array of objects
const laptops = mongoose.connection.model("computers", productSchema)
console.log(laptops)
async function printAllLaptops(){
    return new Promise ((resolve, reject) => {
        laptops.find()
        .then(result => resolve(result))
        .catch(error => reject(error))
    })
}

module.exports = {
    printAllLaptops
} 