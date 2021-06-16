const db = require('../model');


module.exports.route = (req,res)=>{
    db.user.create({name:"rohit",password:'programmer'})
   
    let resp={
        "name":"rohit",
        "age":"18"
    }
    res.json(resp)
}

