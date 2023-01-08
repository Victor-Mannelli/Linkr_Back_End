import { connection } from "../database/db.js";

export async function postLikeMd(req,res, next){
    const { authorization } = req.headers;
    const {post_id} = req.body
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

        req.info = {
            user_id
        }

        const haveLike = await connection.query('SELECT * FROM likes WHERE user_id = $1 AND post_id=$2;', [user_id,post_id]);

        if (haveLike.rowCount >0) {
            return res.status(409).send({message:"Like Já aplicado"})
        }
        
    }catch(err){
        console.log(err)
        res.sendStatus(500);
    }
   
    next();
}