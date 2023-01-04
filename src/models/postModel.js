import joi from  "joi";

export const postSchema = joi.object({
    link: joi.string().min(1).required(),
    caption: joi.string(),
});