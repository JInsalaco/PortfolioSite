import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import {Container, Grid, Skeleton, Typography} from '@mui/material';
import { formatTimestamp } from './helpers/helpers';
import { getBlogPost } from '../../api/get';

export default function BlogPost(){
    interface blog {
        title: string,
        body: string,
        createdBy: string,
        createdOn: Date,
        image: string,
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
                                {post?.title}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <Typography component="div" variant="subtitle1">
                                by {post?.createdBy} | {formatTimestamp(post?.createdOn)}
                            </Typography>
                        </Grid>
                        <Grid item xs={12}>
                            <hr/>
                        </Grid>
                        <Grid item xs={12}>
                            <img alt="" src={post?.image} style={{width: '100%'}}/>
                        </Grid>
                        <Grid item xs={12}>
                            <hr/>
                        </Grid>
                        <Grid item xs={12}>
                            <div dangerouslySetInnerHTML={{ __html: post?.body }} />
                        </Grid>
                    </Grid>
                </Container>
            }
        </>
    );
}