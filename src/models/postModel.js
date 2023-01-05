import Joi from "joi";

export const updatePostSchema = Joi.object({
    newCaption: Joi.string().allow(''),
    // newTrend: Joi.string().items(Joi.string()).required()
});
