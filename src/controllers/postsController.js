import { postRepository } from "../repositories/postsRepository.js";

export  async function postPost (req,res){
    const user_id = res.locals.userId;
    const { link, caption } = req.body;
    try {
        await postRepository.insertPost(user_id,link,caption);
        res.sendStatus(200); 
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export  async function getPosts (req,res){
    try {
        const result = await postRepository.selectPosts();
        res.status(200).send(result.rows)
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
