import { connection } from "../database/db.js";

export async function getLikes(post_id,user_id) {
	return connection.query('SELECT COUNT(lk.id), CASE WHEN lk.user_id =$2 THEN true ELSE false  END AS isYou, u.username AS name FROM likes lk JOIN users  u ON  u.id = lk.user_id WHERE  post_id=$1 GROUP BY lk.user_id , name ',[post_id,user_id]);
}

export async function insertLikes(user_id,post_id) {
	return connection.query('INSERT INTO likes (user_id,post_id) VALUES ($1,$2) RETURNING id',[user_id,post_id]);
}

