import * as repository from "../repositories/postRepository.js";

export async function validatePostId(req, res, next) {
    const post_id = req.params.postId
    // console.log(req.params);

    try {
      const postExists = (await repository.postById(post_id)).rows;
      if (!postExists.length) return res.sendStatus(404);
      res.locals.post_id = post_id;
      res.locals.postExists = postExists;
  
      next();
    } catch (error) {
      return res.status(500).send(error);
    }
}

export function getOriginalPostId(req, res, next) {
  const { postExists, post_id } = res.locals;

  let referencePostId;
  postExists[0].id
    ? (referencePostId = postExists[0].id)
    : (referencePostId = post_id);

  res.locals.post_id = referencePostId;

  next();
}