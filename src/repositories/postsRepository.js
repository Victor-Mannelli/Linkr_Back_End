import { connection } from "../database/db.js";

async function insertPost(user_id,link,caption,title, image) {
	return connection.query(`
    INSERT INTO posts (user_id,link,caption) VALUES ($1, $2, $3, $4, $5);`,
    [user_id,link,caption, title, image]);
}

async function selectPosts() {
	return connection.query('SELECT * FROM posts ORDER BY id DESC LIMIT 20');
}

export const postRepository = {
	insertPost,
    selectPosts
}
