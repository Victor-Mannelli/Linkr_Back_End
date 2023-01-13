import * as repository from "../repositories/postRepository.js";

export async function updatePost(req, res) {
    const { newCaption, newTrend } = req.body;
    const { post_id } = res.locals;
    try {
        await repository.updatePostData(post_id, newCaption, newTrend);
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