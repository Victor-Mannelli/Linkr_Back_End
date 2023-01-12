import joi from "joi";

export const userParamsSchema = joi.object({
	id: joi.string().required(),
});
