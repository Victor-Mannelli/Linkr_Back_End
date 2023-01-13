import { insertFollow,unFollow,getFollow } from "../repositories/followerRepository.js";

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
    const {user_id} = req.info
    const {follow_id} = req.headers

    try {
        const result = await unFollow(user_id,follow_id)
        
        res.sendStatus(200)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export  async function getFollows (req,res){
    const {user_id} = req.info
    const {follow_id} = req.headers
    try {
        const result = await getFollow(user_id,follow_id)
        let obj ={}

        if (result.rowCount > 0) {
            obj ={
                areFollower : true
            }
        }else{
            obj ={
                areFollower : false
            }
        }
        res.status(200).send(obj)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}