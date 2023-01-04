import { postSchema } from "../models/originalPostModel.js";

export function postValidation(req, res, next){
    const { link, caption } = req.body;

    const {error} = postSchema.validate({link, caption}, {abortEarly: false});
    if(error){
        const errors = error.details.map((detail)=> detail.message)
        return res.status(422).send(errors);
    };
    res.locals.postForm = {link, caption};
    next();
}
