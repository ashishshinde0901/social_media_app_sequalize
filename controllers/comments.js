const {Comments} = require('../db/models')
const {Users} = require('../db/models')

async function createComments(userId,title,body){
    const comments = await Comments.create({
        title,
        body,
        userId,
    })
    return comments
}

async function showComments(query){
    const comments = await Comments.findAll({
        include: [ Users ]
    })

    return comments

}

module.exports = {createComments,showComments}