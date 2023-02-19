import { AppBar, Toolbar, Button, CssBaseline } from '@mui/material';
import { Link as RouterLink } from "react-router-dom";
import { makeStyles } from "tss-react/mui";

const useStyles = makeStyles()(() => ({
    header: {
       marginBottom: '25px'
    },
    menuButton: {
        marginLeft: '1rem'
    },
    toolbar: {
        justifyContent: 'flex-end',
    },
    headshot: {
        borderRadius: '50%',
        display: 'inline-block',
    },
    fullname: {
        fontSize: '36pt',
        paddingLeft: '1rem',
    }
 }));

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

export function Header() {
    const { classes } = useStyles(); 

    const showMenuButtons = () => {
         return menuButtons.map(({title, href}) => {
            return(
                <Button
                    {...{
                        key: title,
                        color: "inherit",
                        to: href,
                        component: RouterLink,
                        className: classes.menuButton,
                    }}
                >
                    {title}
                </Button>
            )
        })
    }
    
    return(
        <AppBar className={classes.header} position="static">
            <CssBaseline/>
            <Toolbar className={classes.toolbar}>
                {showMenuButtons()}
            </Toolbar>
        </AppBar>
    );
}
