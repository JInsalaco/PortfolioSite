import { Typography, Stack, Container, Avatar, Grid, Chip } from "@mui/material";
import headshot from '../../images/headshot.jpeg';

export function Welcome() {
    return(
        <Container sx={{p: 2, mb:5}}>
            <Stack direction="row" id='home' alignItems="center">
                <Avatar src={headshot} sx={{width:100, height:100}} alt="Headshot of Joseph Insalaco"/>
                <Grid container justifyContent={'flex-start'} sx={{ml:1}}>
                    <Grid item>
                            <Typography variant='h1' sx={{fontWeight: 'strong'}}>
                                Joseph&nbsp;
                            </Typography>
                    </Grid>
                    <Grid item>
                            <Typography variant='h1' sx={{fontWeight: 'strong', color: '#2196f3'}}>
                                Insalaco
                            </Typography>
                    </Grid>
                    <Grid item xs={12}>
                        <Typography variant='h3' component={'h2'}sx={{ fontWeight: 'strong', fontSize: '1rem'}}>
                            <Chip sx={{m:.25}} label={'Full-stack Developer'}/><Chip sx={{m:.25}} label={'New York City'}/>
                        </Typography>
                    </Grid>
                </Grid>
            </Stack>
        </Container>
    )
}