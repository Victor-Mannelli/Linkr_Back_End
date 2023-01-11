import { userParamsSchema } from "../models/userParamsModel.js";
import { getUserByUsername } from "../repositories/userRepository.js";

export async function validateUsername(req, res, next) {
	const { error } = userParamsSchema.validate(req.params, {
		abortEarly: false,
	});
	if (error) {
		res.status(422).send(error.details.map((detail) => detail.message));
		return;
	}
	try {
		const user = await getUserByUsername(req.params.username);

		if (user.rowCount === 0) {
			res.status(404).send({ message: "No user found with this username" });
			return;
		}

		res.locals.user = user;
		next();
	} catch (error) { 
		console.log(error);
		res.sendStatus(500);
	}
}
 
