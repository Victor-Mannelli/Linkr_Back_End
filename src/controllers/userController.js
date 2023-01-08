import { getUser } from "../repositories/userRepository.js";

export  async function getUserContr (req,res){
    const {user_id} = req.info
    try {
        const result = await getUser(user_id)
        res.status(200).send(result.rows[0])
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}