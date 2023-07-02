import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container, Grid, Skeleton, Typography} from '@mui/material';
import { formatTimestamp } from './helpers/helpers';
import { getBlogPost } from '../../api/get';

export function BlogPost(){
    interface blog {
        title: string,
        review: string,
        createdBy: string,
        createdOn: Date,
        photo: string,
        _id: string,
    }
    
    const [post, setPost] = useState<blog>(Object);
    const [loading, setLoading] = useState<boolean>(false);
    const { id } = useParams();
    
    useEffect(() => {
        const fetchData = async() => {
            setLoading(true);
            try{
                const data:blog = await getBlogPost(id);
                setPost(data);
                setLoading(false);
            } catch(e){
                console.log(e);
            }
        };
        fetchData();
    },[id])

    return(
        <>
            {loading ? 
                <Skeleton variant="rectangular" height={600}/> 
            :
                <Container>
                    <Grid container spacing={2}>
                        <Grid item xs={12}>
                            <Typography component="div" variant="h1">
                                {post.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                                by {post.createdBy} | {formatTimestamp(post.createdOn)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <hr/>
                        </Grid>
                        <Grid item xs={12}>
                            <img src={post.photo} width="854" height="480"/>
                        </Grid>
                        <Grid item xs={12}>
                            <hr/>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="div" variant="body1">
                                {post.review}
                            </Typography>
                        </Grid>
                    </Grid>
                </Container>
            }
        </>
    );
}