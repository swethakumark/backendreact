var mongoose = require('mongoose')

mongoose.connect('mongodb+srv://swethakumar9946:swethakumark@cluster0.8uy6a.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0')
    .then(() => {
        console.log("connected")
    })
    .catch((error) => {
        console.log(error)

    })