import { connection } from "../database/db.js";

/*async function insertPost(user_id,link,caption,title, image, description) {
	return connection.query(`
    INSERT INTO posts (user_id,link,caption) VALUES ($1, $2, $3, $4, $5, $6);`,
    [user_id, link, caption, title, image, description]);
}*/
async function insertPost(link,caption) {
	return connection.query(`
    INSERT INTO posts (user_id,link,caption) VALUES ($1, $2, $3);`,
    [1, link, caption])};

async function selectPosts() {
	return connection.query('SELECT * FROM posts ORDER BY id DESC LIMIT 20');
}

async function selectId(){
    return connection.query('SELECT id FROM posts ORDER BY id DESC LIMIT 1');
}

async function insertTrend(trend_name, count){
    return connection.query('INSERT INTO trending (trending_name, count) VALUES ($1, $2);',
    [trend_name, count])
}

export const postRepository = {
	insertPost,
    selectPosts,
    selectId,
    insertTrend
}
