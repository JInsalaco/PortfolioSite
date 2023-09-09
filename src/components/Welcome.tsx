import { Typography, Stack, Container } from "@mui/material";
import headshot from '../images/headshot.jpeg';
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    headshot: {
        borderRadius: '50%',
        display: 'inline-block',
    },
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
                <img src={headshot} width='100' className={classes.headshot} alt="Headshot of Joseph Insalaco"/>
                <Typography variant='h1' className={classes.fullname}>
                    Joseph Insalaco
                </Typography>
            </Stack>
        </Container>
        
    )
}