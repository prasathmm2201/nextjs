import { DBConnection } from "../dbConnect"

export const getUsers=({id})=>{
    return new Promise(async(resolve , reject)=>{
        try{
            const data  = await DBConnection.select("*").from("users")
            resolve(data)
        }
        catch(err){
            reject(err)
        }
    })
}