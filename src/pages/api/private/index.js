import { getUsers } from "../../../controllers";

export default async function handler(req , res){
    const result = await getUsers(req.body)
    res.status(200).json({
        data:result,
        message:"Success"
    })
}