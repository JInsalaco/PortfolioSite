import { Typography, Stack, Container, Avatar } from "@mui/material";
import headshot from '../../images/headshot.jpeg';
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    fullname: {
        fontSize: '36pt',
        paddingLeft: '1rem',
    }
 }));


export function Welcome() {
    const { classes } = useStyles();
    return(
        <Container>
            <Stack direction="row" id='home' alignItems="center">
                <Avatar src={headshot} sx={{width:100, height:100}} alt="Headshot of Joseph Insalaco"/>
                <Typography variant='h1' className={classes.fullname}>
                    Joseph Insalaco
                </Typography>
            </Stack>
        </Container>
        
    )
}