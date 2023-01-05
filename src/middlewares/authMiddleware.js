import * as authRepository from "../repositories/authRepository.js";
import bcrypt from "bcrypt";

export async function validateSignUp(req, res, next) {
	try {
		const userDuplicate = await authRepository.checkEmail(req.body.email);
		if (userDuplicate.rows.length !== 0) {
			return res.status(409).send({ message: "Email already registered" });
		}

		next();
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
export async function validateSignIn(req, res, next) {
	try {
		const user = await authRepository.checkEmail(req.body.email);
		if (user.rows.length === 0) {
			return res.status(404).send({ message: "This email is not registered" });
		}

		if (!bcrypt.compareSync(req.body.password, user.rows[0].password)) {
			return res.status(401).send({ message: "Password is incorrect" });
		}

		res.locals.user = user;
		next();
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
export async function validateLogOut(req, res, next) {
	const { authorization } = req.headers;
	const token = authorization?.replace("Bearer ", "");
	if (!token) return res.sendStatus(401);

	try {
		const session = await authRepository.checkToken(token);
		if (session.rows.length === 0) {
			return res.status(404).send({ message: "User already logged out" });
		}
		
		next();
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
