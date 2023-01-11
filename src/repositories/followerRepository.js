import { connection } from "../database/db.js";

export async function insertFollow(follow_id,user_id) {

    return connection.query('INSERT INTO followers (follow_id,user_id) VALUES ($1,$2) RETURNING id',[follow_id,user_id]);
}

export async function unFollow(id) {
    return connection.query('DELETE FROM followers WHERE id = $1',[id]);
}