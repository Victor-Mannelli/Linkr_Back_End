import * as repository from "../repositories/postRepository.js";

export async function updatePost(req, res) {
    const { newCaption, newTrend } = req.body;
    const user_id = res.locals.userId;
    const { post_id } = res.locals;
    console.log(post_id, user_id);
    try {
        const postExists = await repository.postByUserId(post_id, user_id);
        if(!postExists.rowCount)
            return res.sendStatus(401);
        await repository.updatePostData(postExists.rows[0].id, newCaption, newTrend);
        return res.sendStatus(204);
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function deletePost(req, res) {
    const { post_id } = res.locals;
    try {
        await repository.deletePostData(post_id);
        return res.sendStatus(202);
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}