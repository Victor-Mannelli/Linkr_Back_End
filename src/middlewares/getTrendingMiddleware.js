import { connection } from "../database/db.js";

export async function getTrendMd(req,res,next){

    const { authorization } = req.headers;
    const token = authorization?.replace('Bearer ', '');
    
    if (!token) return res.sendStatus(401);

    try {
        const sessions = await connection.query("SELECT * FROM sessions WHERE token=$1",[token])
        if (sessions.rowCount<=0) {
            res.sendStatus(401)
            return
        }

    } catch (error) {
        
        res.sendStatus(500)
    }
    next();

}