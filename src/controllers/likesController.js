import { getLikes,insertLikes,delLike } from "../repositories/likesRepository.js";

export  async function getLikesContr (req,res){
    const {post_id} = req.headers
    const {user_id} = req.info
    try {
        const result = await getLikes(post_id,user_id)
        
        res.status(200).send(result.rows)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export  async function postLike(req,res){
    const {post_id} = req.body
    const {user_id} = req.info
    try {
        const result = await insertLikes(user_id,post_id)
        
        res.status(201).send(result.rows[0])
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export  async function deleteLike(req,res){
    const {id} = req.headers

    try {
        const result = await delLike(id)
        console.log(id)
        res.sendStatus(200)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}