import { connection } from "../database/db.js";

export async function updatePostData(post_id, newCaption, newTrend) {
    updatePostCaption(post_id, newCaption);
    updatePostTrend(post_id, newTrend);
    return
}

export async function updatePostCaption(post_id, newCaption) {
    await connection.query(
        `UPDATE posts SET caption=$1 WHERE id=$2;`,
        [newCaption, post_id]
    );
    return;
}

export async function updatePostTrend() {

}

export async function deletePostData(post_id) {
    await connection.query(
        `DELETE FROM post_trending WHERE "post_id"=$1;`,
        [post_id]
    );

    await connection.query(
        `DELETE FROM likes WHERE "post_id"=$1;`,
        [post_id]
    );

    await connection.query(
        `DELETE FROM posts WHERE id=$1;`,
        [post_id]
    );
    return;
}