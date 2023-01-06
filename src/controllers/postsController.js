import { postRepository } from "../repositories/postsRepository.js";
import { getLinkPreview, getPreviewFromContent } from "link-preview-js";
import { updatePostTrend } from "../repositories/postRepository.js";
import { connection } from "../database/db.js";

export  async function postPost (req,res){
    //const user_id = res.locals.userId;
    const { link, caption} = req.body;
    const trends = ["#loucura", "#cara"];
    try {
        //const data = await getLinkPreview(link);
        //await postRepository.insertPost(user_id,link,caption, data.title, data.images[0], data.description);
        await postRepository.insertPost(link,caption);
        const idPost = (await postRepository.selectId()).rows[0].id;
        console.log(idPost);

        trends.forEach(async(iten)=>{
            const trendExist = await connection.query('SELECT * FROM trending WHERE trend_name = $1;',[iten]);
            const trendId = trendExist.rows[0].id;
            const trenCount = trendExist.rows[0].count;
            if(trendExist.rowCount>0){
                const count = trenCount +1;
                await connection.query('UPDATE trending SET count = $1 WHERE id = $2;',[count, trendId]);
            }else{
                await postRepository.insertTrend(iten);
            }
        })
        
        res.sendStatus(200); 
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}

export  async function getPosts (req,res){
    try {
        const result = await postRepository.selectPosts();
        res.status(200).send(result.rows)
    } catch (error) {
        console.log(error);
        res.sendStatus(500);
    }
}
