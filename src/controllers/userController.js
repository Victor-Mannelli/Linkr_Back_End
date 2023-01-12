import * as userRepository from "../repositories/userRepository.js";

export async function getUserById(req, res) {
	const { user_id } = req.info;
	try {
		const result = await userRepository.getUser(user_id);
		res.status(200).send(result.rows[0]);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
export async function getAllUsers(_req, res) {
	try {
		const allUsers = await userRepository.getAllUsers();
		res.status(200).send(allUsers.rows);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
export async function userPage(req, res) {
	try {
		const userPosts = await userRepository.getUserPosts(req.params.id);
		res.status(200).send(userPosts.rows);
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}
