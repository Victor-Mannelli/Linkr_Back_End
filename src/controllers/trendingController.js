import { trendRepository } from "../repositories/trendRepository.js";

export  async function getTrending (req,res){

    try {
        const result = await trendRepository.getTrend()
        res.status(200).send(result.rows)
        
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}
export async function getTrendingPosts(req,res){
    const {hashtag} = req.params
    try {
        const result = await trendRepository.getTrendPost(hashtag)
        res.status(200).send(result.rows)
    } catch (error) {
        console.log(error)
        res.sendStatus(500)
    }
}