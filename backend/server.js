require("dotenv").config();
const express = require("express"); 
const app = express(); 
const cors = require("cors");
const {printAllLaptops} = require("./products.module")
const {login} = require ("./users.module")

const port = process.env.PORT

app.listen(port, ()=> {
    console.log(`Server is running on ${port}`)
})

app.use(cors());
app.use(express.json()); 
app.use(express.urlencoded({extended: true}))

app.get("/products", async (request, response)=>{
    const result = await printAllLaptops(); 
    response.json(result)
}); 

app.post("/login", async (request, response)=>{
    await login(request.body.username, request.body.password)? response.status(200).send("Successful Login!"): response.status(400).send("User doesn't exist!"); 
}); 
