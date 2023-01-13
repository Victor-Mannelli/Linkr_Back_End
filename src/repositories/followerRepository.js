import { connection } from "../database/db.js";

export async function insertFollow(follow_id,user_id) {

    return connection.query('INSERT INTO followers (follow_id,user_id) VALUES ($1,$2) RETURNING id',[follow_id,user_id]);
}

export async function unFollow(user_id,follow_id) {
    return connection.query('DELETE FROM followers WHERE follow_id = $1 AND user_id = $2',[follow_id,user_id]);
}

export async function getFollow(id,follow_id) {
    return connection.query('SELECT * FROM followers WHERE user_id = $1 AND follow_id = $2',[id,follow_id]);
}