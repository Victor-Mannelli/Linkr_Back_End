import * as repository from "../repositories/commentsRepository.js";

export async function getComments(req, res) {
    const { post_id } = res.locals;
    try {
        const comments = await repository.getTotalPostCommentsByPostId(post_id);

        return res.status(200).send(comments.rows);
    } catch (error) {
        return res.status(STATUS_CODE.SERVER_ERROR).send(error.message);
    }
}

export async function postComments(req, res) {
    const { post_id } = res.locals;
    const comment = req.body;

    try {
        await repository.postCommentsByPostId(post_id, comment.user_id, comment.text);
        return res.sendStatus(200);
    } catch (error) {
        return res.status(500).send(error.message);
    }
};
