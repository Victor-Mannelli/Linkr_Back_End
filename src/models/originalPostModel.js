import Joi from "joi";
export const postSchema = Joi.object({
    link: Joi.string().min(1).required(),
    caption: Joi.string().allow(''),
    trends: Joi.array(),
});