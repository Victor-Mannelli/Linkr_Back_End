import { connection } from "../database/db.js";
import { userParamsSchema } from "../models/userParamsModel.js";
import * as userRepository from "../repositories/userRepository.js";

export async function authValidation(req, res, next) {
	const { authorization } = req.headers;
	const token = authorization?.replace("Bearer ", "");

	if (!token) {
		return res.sendStatus(401);
	}
	try {
		const userSession = await connection.query(
			"SELECT * FROM sessions WHERE token = $1;",
			[token]
		);
		if (userSession.rowCount === 0) {
			return res.status(401).send({ message: "token inválido" });
		}

		const userSessionId = userSession.rows[0].user_id;
		res.locals.userId = userSessionId;

		next();
	} catch (err) {
		res.sendStatus(500);
	}
}
export async function validateUserIdParams(req, res, next) {
	try {
		const { error } = userParamsSchema.validate(req.params, {
			abortEarly: false,
		});
		if (error) {
			res.status(422).send(error.details.map((detail) => detail.message));
			return;
		}

		const userExists = await userRepository.getUser(req.params.id);
		if (userExists.rowCount === 0) {
			res.status(404).send({ message: "No user found with this id" });
			return;
		}

		next();
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
export async function validateUser(req, res, next) {
	const { authorization } = req.headers;
	const token = authorization?.replace("Bearer ", "");

	if (!token) {
		return res.sendStatus(401);
	}
	try {
		const userSession = await connection.query(
			"SELECT * FROM sessions WHERE token = $1;",
			[token]
		);

		if (userSession.rowCount == 0) {
			return res.status(401).send({ message: "token inválido" });
		}

		const { user_id } = userSession.rows[0];
		req.info = {
			user_id,
		};

		next();
	} catch (err) {
		console.log(err);
		res.sendStatus(500);
	}
}
