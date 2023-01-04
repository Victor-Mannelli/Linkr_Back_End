import {connection} from "../database/db.js";

export async function authValidation(req,res, next){
    const { authorization } = req.headers;
    const token = authorization?.replace("Bearer ", "");

    if(!token){
        return res.sendStatus(401);
    }
    try{
        const userSession = await connection.query('SELECT * FROM sessions WHERE token = $1;', [token]);

        if (userSession.rowCount == 0){
            return res.status(401).send({message:"token inválido"})
        }

        const userSessionId = userSession.rows[0].id;
        res.locals.userId = userSessionId;

    }catch(err){
        res.sendStatus(500);
    }

    next();
}