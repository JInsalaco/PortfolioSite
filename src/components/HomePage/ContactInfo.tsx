import { Container, Card, List, ListItem, Link, Typography} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
export function ContactInfo() {
    return(
        <Container id='contact-info' sx={{p: 2, mb:5}}>
            <Typography variant='h2' sx={{mb:1}}>
                Contact Info
            </Typography>
            <Card sx={{p: 1}}>
                <List>
                    <ListItem><EmailIcon/>&nbsp;<Link href="mailto:joseph.insalaco1@gmail.com">joseph.insalaco1@gmail.com</Link></ListItem>
                    <ListItem><PhoneIcon/>&nbsp;<Link href="tel:+17186890507">(718) 689-0507</Link></ListItem>
                    <ListItem><GitHubIcon/>&nbsp;<Link href="https://github.com/JInsalaco" target="_blank" rel="noopener noreferrer">GitHub</Link></ListItem>
                    <ListItem><LinkedInIcon/>&nbsp;<Link href='https://www.linkedin.com/in/joseph-insalaco-ab7679194/' target="_blank" rel="noopener noreferrer">LinkedIn</Link></ListItem>
                </List>
            </Card>
        </Container>
    )
}