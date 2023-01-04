import { connection } from "../database/db.js";

async function getTrend() {
	return connection.query('SELECT * FROM trending ORDER BY count DESC LIMIT 10');
}
async function getTrendPost(trend) {
	return connection.query('SELECT p.user_id, p.link ,p.caption, p."createdAt" AS date,tr.trending_name AS trend FROM post_trending  pt  JOIN posts p ON  pt.post_id = p.id JOIN trending tr ON pt.trending_id = tr.id WHERE tr.trending_name = $1 ORDER BY p."createdAt" DESC',[trend]);
}

export const trendRepository = {
	getTrend,
	getTrendPost
}

