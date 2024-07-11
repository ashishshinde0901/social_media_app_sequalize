const {Router} = require('express')

const route = Router()

const {createPost , showPosts} = require('../../controllers/posts')


route.get('/',async (req, res)=>{
    const posts = await showPosts()
    res.status(200 ).send(posts)
})

route.post('/',async (req,res)=>{
    const {userId,title,body} = req.body
    if ((!userId)||(!title)||(!body)){
        return res.status(400).send({
            error:'Need userid,title and body to create post'
        })
    }
    const post = await createPost(userId,title,body)
    res.status(200).send(post)
})

module.exports =   {
    postsRoute:route
}