const{user}= require('../models')



async function createUser(req,res)
                    {
                    const {name,pid,role}= req.body;
                    const users = await user.create({name,pid,role});
                    res.send(users) 
                    } 

async function getUser(req, res){
    const allUser = await user.findAll();
    res.render('user', {allUser})
}

async function updateUser(req, res){
    const {role,id} = req.body ;
    const updte = await user.update({role : role},{where : {id:id}});
    res.send(updte);
}


module.exports= {createUser,getUser,updateUser}