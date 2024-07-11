const {Posts} = require('../db/models')
const {Users} = require('../db/models')

async function createPost(userId,title,body){
    const posts = await Posts.create({
        title,
        body,
        userId,
    })
    return posts
}

async function showPosts(query){
    const posts = await Posts.findAll({
        include: [ Users ]
    })

    return posts

}



module.exports = {
    createPost,
    showPosts
}

async function task(){
    console.log(
        await createPost(
            1,
            'sample1',
            'body of sample1',
        )
    ),
        console.log(
            await createPost(
                2,
                'sample2',
                'body of sample2'
            )
        )
    const posts = await showPosts()

    for(let p of posts){
        if(p.user != null){
            console.log(`${p.title}-`)
            console.log(`${p.body}-`)
            console.log(`${p.user.username}\n`)
        }
    }



}

task()
