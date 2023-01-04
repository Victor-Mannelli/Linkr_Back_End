import * as repository from "../repositories/postRepository.js";

export async function updatePost(req, res) {
    const { newCaption, newTrend } = req.body;

    try {
        await repository.updatePostData(newCaption, newTrend);
        return res.sendStatus(204);
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}

export async function deletePost(req, res) {
    try {
        await repository.deletePostData();
        return res.sendStatus(202);
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}