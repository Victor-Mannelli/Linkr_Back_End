import { connection } from "../database/db.js";

async function getTrend() {
	return connection.query('SELECT * FROM trending ORDER BY count DESC LIMIT 10');
}
async function getTrendPost(trend) {
	return connection.query('SELECT p.*, p."createdAt" AS date,u.profile_picture as "image",tr.trending_name AS trend FROM post_trending  pt  JOIN posts p ON  pt.post_id = p.id JOIN trending tr ON pt.trending_id = tr.id  JOIN users u  ON p.user_id = u.id WHERE tr.trending_name = $1 ORDER BY p."createdAt" DESC LIMIT 20',["#"+trend]);
}
`SELECT posts.*,
    users.username, users.profile_picture as "image"
    FROM posts 
    JOIN users 
    ON posts.user_id = users.id 
    ORDER BY posts.id DESC LIMIT 20`
export const trendRepository = {
	getTrend,
	getTrendPost
}

