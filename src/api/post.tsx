import axios from 'axios';

export const createBlogPost = async(title:string, image:string, body:string, token: string|undefined) => {
    try{
        const {data} = await axios.post('http://localhost:3001/blog/publish', {title: title,  image: image, body: body},{headers: {authorization: `${token}` }});
        return data;
    }catch(e){
        console.error(e);
    }
}