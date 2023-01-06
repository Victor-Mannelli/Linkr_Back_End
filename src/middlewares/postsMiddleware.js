import * as repository from "../repositories/postRepository.js";

export async function validatePostId(req, res, next) {
    const post_id = req.params.postId
    try {
      const postExists = (await repository.postById(post_id)).rows;
      if (!postExists.length) return res.sendStatus(404);
      res.locals.post_id = post_id;
  
      next();
    } catch (error) {
      return res.status(500).send(error);
    }
}