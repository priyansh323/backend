const{user,Categories}= require('../models')



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

async function init(){
    
     try {
        await Categories.sync({force:true});
   
        const defaultCategories = [
           {
               name : 'Electronics',
               description : 'All Electric Appliances'
           },
           {
               name : 'Mobiles',
               description : 'All Types of Mobile'
           }
        ]
       const result = await Categories.bulkCreate(defaultCategories)
       console.log(result)
     }
      catch (error) {
        console.log(error)
        
     }

}

async function createCategory(req,res){
    const data = req.body;

    if(!data.name){
        res.status(400).send({msg : 'Category Name is Mandatory'})
    }

    const name = data.name;
    const description =data.description;
    
    try {
        const result = await Categories.create({name,description});
        console.log(result)
        res.send('Category created')
    } catch (error) {
        console.log('error in category creation',error)
        res.status(500).send({msg : 'Internal Sever Error'})
    }

}

async function getAllCategory(req,res){    
    try {
        const result = await Categories.findAll();
        console.log(result)
        res.send(result)
    } catch (error) {
        console.log('error in category Extraction',error)
        res.status(500).send({msg : 'Internal Sever Error'})
    }

}

async function getCatOnID(req,res){
   try {
     const cId = req.params.id;
 
     const result = await Categories.findOne({where : {id : cId}});
     res.send(result)
   }
    catch (error) {
    console.log('error in category Extraction on ID',error)
    res.status(500).send({msg : 'Internal Sever Error'})
   }
}

module.exports= {createUser,getUser,updateUser,init,createCategory,getAllCategory,getCatOnID}