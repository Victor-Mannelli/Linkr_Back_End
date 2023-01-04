import { connection } from "../database/db.js";

export async function checkEmail(email) {
	return await connection.query("SELECT * FROM users WHERE email = $1", [
		email,
	]);
}
export async function createUser({
	email,
	hashedPassword,
	username,
	profile_picture,
}) {
	await connection.query(
		"INSERT INTO users (email, password, username, profile_picture) VALUES ($1, $2, $3, $4)",
		[email, hashedPassword, username, profile_picture]
	);
}
export async function createSession({ user_id, token }) {
	await connection.query(
		"INSERT INTO sessions (user_id, token) VALUES ($1, $2)",
		[user_id, token]
	);
}
export async function logOut(token) {
	await connection.query("DELETE FROM sessions WHERE token = $1", [token]);
}
export async function checkToken(token) {
    return await connection.query("SELECT * FROM sessions WHERE token = $1", [token])
}