import { Container, Card, List, ListItem, Link} from "@mui/material";

export function ContactInfo() {
    return(
        <Container id='contact-info' sx={{p: 2}}>
            <div>
                <h1>Contact Info</h1>
            </div>
            <Card sx={{p: 1}}>
                <List>
                    <ListItem>Email: joseph.insalaco1@gmail.com</ListItem>
                    <ListItem>Phone: +1 (718) 689-0507</ListItem>
                    <ListItem><Link href="https://github.com/JInsalaco" target="_blank" rel="noopener noreferrer">GitHub</Link></ListItem>
                    <ListItem><Link href='https://www.linkedin.com/in/joseph-insalaco-ab7679194/' target="_blank" rel="noopener noreferrer">LinkedIn</Link></ListItem>
                </List>
            </Card>
        </Container>
    )
}