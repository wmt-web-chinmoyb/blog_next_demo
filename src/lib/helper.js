import axios from "axios"
const baseURL="http://localhost:3000/api/posts"
export default async function getPost(id){
    const posts = await axios.get(`${baseURL}`)
    if(id){
        return posts.data.find(value=>value.id==id)
    }
    
    
 return posts
}   

