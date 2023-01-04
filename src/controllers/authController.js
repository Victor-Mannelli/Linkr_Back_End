import { v4 as uuid } from "uuid";
import * as authRepository from "../repositories/authRepository.js";

export async function signUp(req, res) {
	const { email, username, profile_picture } = req.body;

	try {
		const hashedPassword = bcrypt.hashSync(req.body.password, 10);
		await authRepository.createUser({
			email,
			username,
			hashedPassword,
			profile_picture,
		});

		res.status(201).send({ message: "User Created" });
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
}

export async function signIn(_req, res) {
	try {
		console.log(res.locals.user.rows);
		const user_id = res.locals.user.rows[0].user_id;
		const token = uuid();
		await authRepository.createSession({ token, user_id });

		res.status(200).send(token);
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
}

export async function logOut(req, res) {
	try {
		await authRepository.logOut(req.body.token);
		res.status(200).send({ message: "User logged out" });
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
}
