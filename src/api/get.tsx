import axios from 'axios';

export const getAllBlogPosts = async() => {
    try{
        const {data} = await axios.get('https://joseph-insalaco-blog-e0c0660d379a.herokuapp.com/blog');
        return data;
    }catch(e){
        console.error(e);
    }
}

export const getBlogPost = async(id:any) => { 
    try{
        const {data} = await axios.get(`https://joseph-insalaco-blog-e0c0660d379a.herokuapp.com/blog/${id}`)
        return data;
    } catch(e){
        console.error(e)
    }
}