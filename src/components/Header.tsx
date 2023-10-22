import React from 'react';
import { AppBar, Toolbar, Button, Box, IconButton} from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { ColorModeContext } from '../ColorModeContext';
const menuButtons: {href: string, title: string}[] = [
    {
        href: '/',
        title: 'Home'
    },
    {
        href: '/blog',
        title: "Blog",
    }
];

export default function Header() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);

    const showMenuButtons = () => {
         return menuButtons.map(({title, href}) => {
            return(
                <Button
                 key={title}
                 color='inherit'
                 to={href}
                 component={RouterLink}
                 sx={{ml:1}}
                >
                    {title}
                </Button>
            )
        })
    }

    const themeToggle = (()=>{
        return (
            <Box
                sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'text.primary',
                    borderRadius: 1,
                }}
                >
                <IconButton
                    sx={{ ml: 1 }}
                    onClick={colorMode.toggleColorMode}
                    color="inherit"
                >
                    {theme.palette.mode === 'dark' ? (
                    <Brightness7Icon />
                    ) : (
                    <Brightness4Icon />
                    )}
                </IconButton>
            </Box>
        )
    })
    
    return(
        <AppBar sx={{mb:5}} position="static">
            
            <Toolbar sx={{justifyContent: 'flex-end'}}>
                <>
                {showMenuButtons()}
                {themeToggle()}
                </>
                
            </Toolbar>
        </AppBar>
    );
}
