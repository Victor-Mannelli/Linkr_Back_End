import { connection } from "../database/db.js";

export function updatePostData(post_id, newCaption, newTrend) {
    updatePostCaption(post_id, newCaption);
    updatePostTrend(post_id, newTrend);
    return;
}

export async function updatePostCaption(post_id, newCaption) {
    await connection.query(
        `UPDATE posts SET caption=$1 WHERE id=$2;`,
        [newCaption, post_id]
    );
    return;
}

export async function updatePostTrend(post_id, newTrend) {
    await connection.query(`
        DELETE FROM post_trending WHERE post_id=$1;`,
        [post_id]
    );

    try {
        for (let i = 0; i < newTrend.length; i++) {
            const trend = newTrend[i];
            let trending_id = (await connection.query(
                `SELECT id FROM trending WHERE trending_name=$1;`,
                [trend]
            )).rows;
            if (!trending_id.length) {
                await connection.query(
                    `INSERT INTO trending (trending_name) VALUES ($1);`,
                    [trend]
                )
                trending_id = (await connection.query(
                    `SELECT id FROM trending WHERE trending_name=$1`,
                    [trend]
                )).rows;
            }

            await connection.query(
                `INSERT INTO post_trending (post_id, trending_id) VALUE ($1, $2);`,
                [post_id, trending_id[0].id]
            )

        }
        return;
    } catch (error) {
        console.log(error)
    }
}

export function postByUserId(post_id, user_id) {
    return connection.query(`
        SELECT id FROM posts WHERE id=$1 AND user_id=$2;`,
        [post_id, user_id]
    );
}

export function postById(post_id) {
    return connection.query(
        `SELECT * FROM posts WHERE id=$1;`,
        [post_id]
    );
}

export async function deletePostData(post_id) {
    await connection.query(
        `DELETE FROM post_trending WHERE post_id=$1;`,
        [post_id]
    );

    await connection.query(
        `DELETE FROM likes WHERE post_id=$1;`,
        [post_id]
    );

    await connection.query(
        `DELETE FROM posts WHERE id=$1;`,
        [post_id]
    );
    return;
}