require("dotenv").config();
const express = require("express"); 
const app = express(); 
const cors = require("cors");
const {printAllLaptops} = require("./products.module")

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

