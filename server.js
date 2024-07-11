const express = require('express')
const {db} = require('./db/models')
const {postsRoute}= require('./routes/posts')
const {userRoute}= require('./routes/users')


const app = express()
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/api/users',userRoute)
app.use('/api/posts',postsRoute)

app.use('/',express.static(__dirname+ '/public' +
    ''))

db.sync()
    .then(()=>{
        app.listen(8383,()=>{
            console.log('Server started')
        })
    }).catch((err)=>{
        console.error(new Error('Could not start database'))
        console.error(err)
})

