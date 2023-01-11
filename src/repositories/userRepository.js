import { connection } from "../database/db.js";

export async function getUser(user_id) {
	return connection.query("SELECT * FROM users WHERE  id=$1", [user_id]);
}
export async function getUserByUsername(username) {
	return connection.query("SELECT * FROM users WHERE username = $1", [
		username,
	]);
}
export async function getUserPosts(user_id) {
	return connection.query(
		"SELECT p.*, u.profile_picture, u.username FROM posts AS p JOIN users as u ON p.user_id = u.id WHERE u.id = $1",
		[user_id]
	);
}
