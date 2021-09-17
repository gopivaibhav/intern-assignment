mongoose=require('mongoose')

const Schema=mongoose.Schema({
    alpha:{
        type:String,
    },
    cost:{
        type:String
    }
});

module.exports=mongoose.model('intern',Schema);