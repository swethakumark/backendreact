//1. importing express
const express = require('express')
require("./connection")
var empmodel = require("./model/employee")
var empmodel = require("./model/employee")
var cors = require("cors")



//2. initialize
const app = new express()
// midvalue
app.use(express.json())
app.use(cors())
//3. api creation
app.get('/', (req, res) => {
    res.send("message from the server")

})
app.get('/trial', (req, res) => {
    res.send("Trial msg")
})


//4. port
app.listen(3004, () => {
    console.log("port is running")
})
// add api 
app.post("/add", async (req, res) => {
    try {
        await empmodel(req.body).save();
        res.send({ message: "data added!!" })
    } catch (error) {
        console.log(error)


    }
})
app.get("/view", async (req, res) => {
    try {
        var Show = await empmodel.find();
        res.send(Show)
    } catch (error) {
        console.log(error)
    }
})
app.delete("/remove/:id", async (req, res) => {
    try {
        await empmodel.findByIdAndDelete(req.params.id)
        res.send({ message: "data deleted!" })
    } catch (error) {
        console.log(error)
    }
})
app.put("/update/:id", async (req, res) => {
    try {
        var data = await empmodel.findByIdAndUpdate(req.params.id, req.body);
        res.send({ message: "update!" ,data})
    } catch (error) {
        console.log(error)
    }
})
        


