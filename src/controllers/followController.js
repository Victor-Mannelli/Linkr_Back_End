import { insertFollow,unFollow } from "../repositories/followerRepository.js";

export  async function postFollow (req,res){
    const {follow_id} = req.body
    const {user_id} = req.info
    
    try {
        const result = await insertFollow(follow_id,user_id)
        res.sendStatus(201)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export  async function deleteFollow (req,res){
    const {id} = req.body

    try {
        const result = await unFollow(id)
        
        res.sendStatus(200)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}