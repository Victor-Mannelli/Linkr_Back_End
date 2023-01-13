import { connection } from "../database/db.js";

export function getTotalPostCommentsByPostId(post_id) {
    return connection.query(
        `
        SELECT 
          comments.*, 
          users.username, 
          users.profile_picture 
        FROM 
          comments 
        JOIN 
          users 
        ON 
          comments.user_id = users.id 
        WHERE post_id=$1;
      `,
        [post_id]
    );
}

export function postCommentsByPostId(post_id, user_id, text) {
    return connection.query(
        `
        INSERT INTO comments
          (post_id, user_id, text)
        VALUES
          ($1, $2, $3);
      `,
        [post_id, user_id, text]
    );
}