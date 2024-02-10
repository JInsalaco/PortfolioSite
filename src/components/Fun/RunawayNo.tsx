import { Dangerous } from "@mui/icons-material";
import { Button } from "@mui/material"
import { useState } from "react";
const RunawayNo = () => {
    const maxHeight = window.innerHeight - 200;
    const maxWidth = window.innerWidth - 200;
    const [left,setLeft] = useState(0);
    const [top,setTop] = useState(0)

    const handleMouseOver = () => {
        console.log("ping")
        setLeft((Math.random() * 2 -1) * (maxWidth / 2  + 1))
        setTop((Math.random() * 2 - 1) * (maxHeight / 2 + 1))
    }

    return(
        <Button size='large' onMouseEnter={handleMouseOver} variant="contained" style={{top: top, left: left, backgroundColor: 'red'}}>No</Button>
    )
}

export default RunawayNo;