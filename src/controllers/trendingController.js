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