import { useEffect, useState } from 'react';
import {Card, Box, CardContent, CardMedia, Typography, Link, Grid, Container} from '@mui/material';
import { formatTimestamp } from './helpers/helpers';
import { getAllBlogPosts } from '../../api/get';

export default function Blog(){
    interface blogPost {
        title: string,
        review: string,
        createdBy: string,
        createdOn: Date,
        photo: string,
        _id: string,
    }
    const [blogPosts, setBlogPosts] = useState<blogPost[]>([]);

    useEffect(() => {
        const fetchData = async() => {
            try{
                const data:blogPost[] = await getAllBlogPosts();
                setBlogPosts(data);
            } catch(e){
                console.log(e);
            }
        };
        fetchData();
    },[])

    const buildCards = () => {
         return blogPosts.map((blogPost) => {
            return (
                <Grid key={blogPost._id} item xs={6}>
                    <Card sx={{ display: 'flex', maxWidth: '50rem' }}>
                        <Link href={`/blog/${blogPost._id}`}>
                            <CardMedia
                            sx={{ width: 250 }}
                            component="img"
                            image={blogPost.photo}
                            height="194"/>
                        </Link>
                        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                            <CardContent sx={{ flex: '1 0 auto' }}>
                                <Typography component="div" variant={'h6'}>
                                    <Link href={`/blog/${blogPost._id}`}>
                                        {blogPost.title}
                                    </Link>
                                </Typography>
                                <Typography component="div" variant={'subtitle1'}>
                                    By {blogPost.createdBy}
                                </Typography>
                                <Typography component="div" variant={'subtitle2'}>
                                    {formatTimestamp(blogPost.createdOn)}
                                </Typography>
                            </CardContent>
                        </Box>
                    </Card>
                </Grid>
            )
        })
    }

    return(
        <Container>
            {blogPosts ? 
            <Grid container spacing={6}>
                {buildCards()}
            </Grid>
            :
            <Typography align='center' component={'div'}>Content coming soon!</Typography>
            }
        </Container>
    );
}