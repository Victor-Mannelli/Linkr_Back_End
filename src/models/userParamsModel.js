import joi from "joi";

export const userParamsSchema = joi.object({
	username: joi.string().required(),
});
