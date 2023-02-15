import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

export function Header() {
    return(
        <AppBar className='site-navigation'>
            <Toolbar>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    Home
                </Box>
                <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                    Blog
                </Box>
            </Toolbar>
        </AppBar>
    );
}