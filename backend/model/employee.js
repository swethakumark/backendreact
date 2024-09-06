var mongoose = require('mongoose')

var schema = mongoose.Schema({
    Name: String,
    Age: Number,
    Dept: String,
    sal:Number
})
var EmployeeModel = mongoose.model('employee', schema);
module.exports=EmployeeModel