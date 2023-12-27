import axios from 'axios';

export const createBlogPost = async(title:string,body:string, image:string, token: string|undefined) => {
    try{
        const {data} = await axios.post('https://joseph-insalaco-blog-e0c0660d379a.herokuapp.com/blog/publish', {title: title, body: body, image: image},{headers: {authorization: `${token}` }});
        return data;
    }catch(e){
        console.error(e);
    }
}