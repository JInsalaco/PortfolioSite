import React, {useState} from "react";
import { IconButton } from "@mui/material";
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

export default function ScrollButton() {
    const [isButtonVisible, setIsButtonVisible] = useState<boolean>(false);

    const handleScroll = () => {
        window.scrollTo({top:0,behavior:"smooth"});
    }
    
    React.useEffect(()=>{
        const handleButtonVisibility = () => {
            window.scrollY > 300 ? setIsButtonVisible(true) : setIsButtonVisible(false);
        }
        window.addEventListener('scroll', handleButtonVisibility)
    })


    return (
    <>
    {isButtonVisible && <IconButton sx={{float: 'right', margin: '4rem',}} onClick={handleScroll}><ExpandLessIcon sx={{height: '2rem', width: '2rem'}}/></IconButton>}
    </>
    )
}