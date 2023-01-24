const  mongoose  = require("mongoose");
const Schema = mongoose.Schema;

const userSchema =new Schema({
    dataa:{type :String, required : true},
},
{
    timestamps: true,
});

const myData =mongoose.model('cp29',userSchema);

module.exports = myData;