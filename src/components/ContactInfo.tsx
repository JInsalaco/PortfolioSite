import { Container, Card, List, ListItem, Typography} from "@mui/material";

export function ContactInfo() {
    return(
        <Container id='contact-info' className="contact-info">
            <div>
                <h1>Contact Info</h1>
            </div>
            <Card className="mb-4">
            <Card>
                <Typography className='margin-2'>Please feel free to reach out to me and check out my socials below</Typography>
                <List dense={true} className="border-0">
                    <ListItem className="border-0">Email: joseph.insalaco1@gmail.com</ListItem>
                    <ListItem className="border-0">Phone: +1 (718) 689-0507</ListItem>
                    <ListItem className="border-0"><a href="https://github.com/JInsalaco" target="_blank" rel="noopener noreferrer">GitHub</a></ListItem>
                    <ListItem className="border-0"><a href='https://www.linkedin.com/in/joseph-insalaco-ab7679194/' target="_blank" rel="noopener noreferrer">LinkedIn</a></ListItem>
                </List>
            </Card>
            </Card>
        </Container>
    )
}