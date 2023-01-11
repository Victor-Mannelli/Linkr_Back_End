import { v4 as uuid } from "uuid";
import * as authRepository from "../repositories/authRepository.js";
import bcrypt from "bcrypt";

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
		const user_id = res.locals.user.rows[0].id;
		const token = uuid();
		await authRepository.createSession({ token, user_id });

		res.status(200).send({ token: token });
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
}

export async function logOut(req, res) {
	try {
		const { authorization } = req.headers;
		const token = authorization?.replace("Bearer ", "");
		await authRepository.logOut(token);

		res.status(200).send({ message: "User logged out" });
	} catch (error) {
		console.log(error);
		return res.sendStatus(500);
	}
}
