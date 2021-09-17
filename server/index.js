const Express=require('express')
const app=Express()
const mongoose=require('mongoose')
require('dotenv').config();
const cors=require('cors')
// const cors=require('cors')
app.use(Express.json())
mongoose.connect(process.env.MONGODB_URI,{ useNewUrlParser: true,useUnifiedTopology: true })
const mdb=mongoose.connection
mdb.on('open',()=>{
    console.log("DB is connected now...")
});

app.use(cors())
app.get('',(req,res)=>{
    res.send("Hello")
})
const main=require('./routes/main')
app.use('/main',main)

app.listen(process.env.PORT || 5000,()=>{
    console.log('Listening on 5000');
})