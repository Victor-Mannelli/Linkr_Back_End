import { connection } from "../database/db.js";

export async function followMd(req,res, next){
    const { authorization } = req.headers;
    const {follow_id} = req.body
    const token = authorization?.replace("Bearer ", "");

    if(!token){
        return res.sendStatus(401);
    }
    try{
        const userSession = await connection.query('SELECT * FROM sessions WHERE token = $1;', [token]);

        if (userSession.rowCount == 0){
            return res.status(401).send({message:"token inválido"})
        }
        const {user_id}= userSession.rows[0];
        if (follow_id) {
            const isFollower = await connection.query(`SELECT * FROM followers WHERE follow_id = $1 AND user_id = $2 `,[follow_id,user_id])
            if (isFollower.rowCount>0) {
                return res.status(409).send({message:"Você já segue esta pessoa."})
            }
        }
        
        req.info = {
            user_id
        }

    }catch(err){
        console.log(err)
        res.sendStatus(500);
    }

    next();
}