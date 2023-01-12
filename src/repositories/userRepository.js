import { connection } from "../database/db.js";

export async function getUser(user_id) {
	return connection.query("SELECT * FROM users WHERE id=$1", [user_id]);
}
export async function getUserPosts(user_id) {
	return connection.query(
		"SELECT u.id, u.username, u.profile_picture, p.* FROM users AS u LEFT JOIN posts as p ON u.id = p.user_id WHERE u.id = $1",
		[user_id]
	);
}
export async function getAllUsers() {
	return connection.query(
		"SELECT u.id, u.username, u.profile_picture FROM users as u"
	);
}
