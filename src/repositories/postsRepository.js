import { connection } from "../database/db.js";

async function insertPost(user_id,link,caption,title, image, description) {
	return connection.query(`

    INSERT INTO posts (user_id,link,caption,title,image_link,description) VALUES ($1, $2, $3, $4, $5, $6);`,
    [user_id, link, caption, title, image, description]);
}
/*async function insertPost(link,caption) {
	return connection.query(`
    INSERT INTO posts (user_id,link,caption) VALUES ($1, $2, $3);`,
    [1, link, caption])};
*/
async function selectPosts(user_id) {
	return connection.query(`
    SELECT posts.*,
    users.username, users.profile_picture as "image",
    f.user_id AS fuser_id
    FROM posts 
    LEFT JOIN users 
    ON posts.user_id = users.id  
    LEFT JOIN followers  f 
    ON   f.follow_id = users.id
    WHERE f.user_id  = $1 
    OR posts.user_id = $1
    ORDER BY posts.id DESC LIMIT 20`,[user_id]);
}


async function selectId(){
    return connection.query('SELECT id FROM posts ORDER BY id DESC LIMIT 1');
}

async function insertTrend(trend_name){
    return connection.query('INSERT INTO trending (trending_name, count) VALUES ($1, $2) RETURNING id;',
    [trend_name, 1])
}

export const postRepository = {
	insertPost,
    selectPosts,
    selectId,
    insertTrend
}
