const {serverPort} = require('./config/config.server')
const express = require('express')
const app = express()
const {sequelize}= require('./models')

const routes = require('./routes')

app.set('view engine','pug')
app.set('views','./views')
app.use(express.json())
app.use(routes)

// app.listen(8080, async ()=> 
//               {console.log('Server is running on port : 8000')
//             //   await user.sync({force:true})
//             //   await Post.sync({force:true})
//               // replacement of this two lines can be 
//               await sequelize.authenticate();
//             }
//               );

             

// console.log('Port', process.env.PORT)
// console.log('App_NAME',process.env.APP_NAME)

app.listen(serverPort, async ()=> {console.log('Server is running on Port : ', serverPort)});