const {Users} = require('../db/models')
const {getRandUsername} = require('../utils/username')

async function createUser(){
    const user = await Users.create({
        username: getRandUsername()
    })

    return user

}

async function getUserById(id){
    return await Users.findOne({where : { id }})
}

async function getUserByName(username){
    return await Users.findOne({where:{ username }})
}
async function task(){
    console.log(await createUser());

}

task()

module.exports = {
    createUser,
    getUserById,
    getUserByName

}
