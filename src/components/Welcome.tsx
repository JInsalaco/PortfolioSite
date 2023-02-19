import { Typography, Stack } from "@mui/material";
import headshot from './headshot.jpeg'
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
        <Stack direction="row" id='home' alignItems="center" spacing={2}>
            <img src={headshot} width='100' className={classes.headshot} alt="Headshot of Joseph Insalaco"/>
            <Typography variant='h1' className={classes.fullname}>
                Joseph Insalaco
            </Typography>
        </Stack>
    )
}