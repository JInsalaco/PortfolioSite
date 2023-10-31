import { Container, Typography } from '@mui/material';
import CreateArticle from './Publishing/CreateArticle';

const PublishArticleContainer = () => {
    return(
        <Container>
            <Typography variant='h1' sx={{mb: 1}}>Create an Article</Typography>
            <CreateArticle/>
        </Container>
    )
}

export default PublishArticleContainer