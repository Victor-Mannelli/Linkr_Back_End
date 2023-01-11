import * as userRepository from "../repositories/userRepository.js"

export async function userPage(req, res){
    try {
        const user_id = res.locals.user.rows[0].id
        const userPosts = await userRepository.getUserPosts(user_id)
        res.status(200).send(userPosts.rows)
        
	} catch (error) {
		console.log(error);
		res.sendStatus(500);
	}
}