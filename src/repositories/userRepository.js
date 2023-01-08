import { connection } from "../database/db.js";

export async function getUser(user_id) {
	return connection.query('SELECT * FROM users WHERE  id=$1',[user_id]);
}

