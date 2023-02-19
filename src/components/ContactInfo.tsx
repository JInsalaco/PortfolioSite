import { Container, Card, List, ListItem} from "@mui/material";

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
                    <ListItem><a href="https://github.com/JInsalaco" target="_blank" rel="noopener noreferrer">GitHub</a></ListItem>
                    <ListItem><a href='https://www.linkedin.com/in/joseph-insalaco-ab7679194/' target="_blank" rel="noopener noreferrer">LinkedIn</a></ListItem>
                </List>
            </Card>
        </Container>
    )
}