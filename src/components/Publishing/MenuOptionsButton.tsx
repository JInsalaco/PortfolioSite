import { Button, styled, ButtonProps } from '@mui/material';
import './buttonStyles.css';

interface MenuOptions {
    variant: "text"|"outlined"|"contained",
    onClick: any,
    disabled?: boolean,
    isActive?: boolean,
    content: string,
}

const activeButton = {
    color: 'black',
    backgroundColor: 'white',
    borderColor: 'black',
    fontWeight: 'bold',
}


const MenuButton = styled(Button)<ButtonProps>(() => ({
    '&:hover': {
        backgroundColor: 'rgba(0, 0, 0, 0.6)',
        borderColor: 'rgba(0, 0, 0, 0.87)',
        boxShadow: 'none',
    },

}));

export function MenuOptionsButton(props:MenuOptions){
    const {
        variant,
        onClick,
        disabled=false,
        isActive=false,
        content,
    } = props;
    
    return(
        <MenuButton
            variant={variant}
            onClick={onClick}
            disabled={disabled}
            sx={isActive ? activeButton : {}}
        >
            {content}
        </MenuButton>
    )
}