import { connection } from "../database/db.js";

async function getTrend() {
	return connection.query('SELECT * FROM trending ');
}

export const trendRepository = {
	getTrend
}

