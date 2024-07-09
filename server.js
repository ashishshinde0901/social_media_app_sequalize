const express = require('express')
const {db} = require('../db/models')
const {userRoute}= require('/users/index')
const {postsRoute}= require('/posts')

const app = express()

app.use('api/users',userRoute)
app.use('api/posts',postsRoute)

app.use('/',express.static('../public'))

db.sync()
    .then(()=>{
        app.listen(8383,()=>{
            console.log('Server started')
        })
    }).catch((err)=>{
        console.error(new Error('Could not start database'))
        console.error(err)
})

