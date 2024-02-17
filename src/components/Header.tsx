import React from 'react';
import { AppBar, Toolbar, Button, Box, IconButton, Typography, Menu, MenuItem} from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { useTheme } from '@mui/material/styles';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import MenuIcon from '@mui/icons-material/Menu';
import { ColorModeContext } from '../ColorModeContext';
const menuButtons: {href: string, title: string}[] = [
    {
        href: '/',
        title: 'Home'
    },
    {
        href: '/resume',
        title: 'Resume',
    },
    {
        href: '/blog',
        title: "Blog",
    },
];

export default function Header() {
    const theme = useTheme();
    const colorMode = React.useContext(ColorModeContext);
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

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
                    aria-label='Dark mode toggle button'
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
        <AppBar sx={{mb:5}} position="sticky">
            <Toolbar sx={{justifyContent: 'flex-end'}}>
                <Box sx={{display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
                >
                    <MenuIcon />
                </IconButton>
                <Menu
                    id="menu-appbar"
                    anchorEl={anchorElNav}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}
                    keepMounted
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'left',
                    }}
                    open={Boolean(anchorElNav)}
                    onClose={handleCloseNavMenu}
                    sx={{
                        display: { xs: 'block', md: 'none' },
                    }}
                >
                {menuButtons.map(({title, href}) => (
                    <MenuItem key={title} onClick={handleCloseNavMenu}>
                        <Typography component="a" href={href} textAlign="center">{title}</Typography>
                    </MenuItem>
                ))}
                </Menu>
                </Box>
                <Typography variant="h6" component="a" href='/' sx={{ flexGrow: 1, color: 'inherit', textDecoration: 'none' }}>
                    Joseph Insalaco
                </Typography>
                <Box sx={{display: { xs: 'none', md: 'flex' } }}>
                    {showMenuButtons()}
                </Box>

                {themeToggle()}
            </Toolbar>
        </AppBar>
    );
}
