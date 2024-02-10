import { useState } from "react";
import { Button, Grid, Typography} from "@mui/material"
import RunawayNo from "./RunawayNo"

const WillYou = () => {
    const [image,setImage] = useState('https://media.tenor.com/hBK9Al_tgq4AAAAM/cute-cat-couple.gif');
    const [text,setText] = useState('Will you be my Valentine?')
    const [showButton,setShowButton] = useState(true);

    const handleYes = () => {
        setShowButton(false);
        setText("WOOHOO");
        setImage('https://media1.tenor.com/m/28G0EVh-CKkAAAAC/cute-cat.gif');
    }
    return (
        <Grid container 
        direction="column"
        justifyContent="center"
        alignItems="center"
        >
            <Grid item xs={12}>
                <Typography align="center" sx={{mb:4, color: 'black'}} variant="h2">{text}</Typography>
            </Grid>
            <Grid item xs={12}>
                <img src={image}/>
            </Grid>
            {showButton && 
            <Grid item xs={12}>
                <Button 
                variant='contained'
                size="large"
                style={{backgroundColor: 'pink', color: 'black', margin: 4}} 
                onClick={handleYes}
                >
                    Yes
                </Button>
                <RunawayNo/>
            </Grid>
            }
        </Grid>
    )
}

export default WillYou;