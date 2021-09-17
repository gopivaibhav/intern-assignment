const express=require('express')
const router=express.Router()
const User=require('../models/User.js')

router.get('/',async(req,res)=>{
    const data=await User.find()
    res.send(data)
})

router.post('/',async(req,res)=>{
    const user=new User({
        alpha:req.body.alpha,
        cost:req.body.cost
    })
    await user.save()
    res.send(user)
})
router.post('/search',async(req,res)=>{
    const alpha=req.body.alp
    const symb=req.body.symb
    const cost=parseInt(req.body.num)
    const obj=await User.find({
        alpha:alpha
    })
    if(symb===">"){
        const data=obj.filter((i)=>{
            return  parseInt(i.cost)>cost
        })
        res.send(data)
    }else if(symb==="<"){
        const data=obj.filter((i)=>{
            return  parseInt(i.cost)<cost
        })
        res.send(data)
    }else{
        const data=obj.filter((i)=>{
            return  parseInt(i.cost)==cost
        })
        res.send(data)
    }
    
    
})


module.exports=router;