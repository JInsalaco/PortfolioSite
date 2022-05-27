import { Container, Card, ListGroup } from "react-bootstrap";

export function ContactInfo() {
    return(
        <Container id='contact-info' className="contact-info">
            <div>
                <h1>Contact Info</h1>
            </div>
            <Card className="mb-4">
            <Card.Body>
                <Card.Title className='margin-2'>Please feel free to reach out to me and check out my socials below</Card.Title>
                <ListGroup variant="flush" className="border-0">
                    <ListGroup.Item className="border-0">Email: joseph.insalaco1@gmail.com</ListGroup.Item>
                    <ListGroup.Item className="border-0">Phone: +1 (718) 689-0507</ListGroup.Item>
                    <ListGroup.Item className="border-0"><a href="https://github.com/JInsalaco" target="_blank" rel="noopener noreferrer">GitHub</a></ListGroup.Item>
                    <ListGroup.Item className="border-0"><a href='https://www.linkedin.com/in/joseph-insalaco-ab7679194/' target="_blank" rel="noopener noreferrer">LinkedIn</a></ListGroup.Item>
                </ListGroup>
            </Card.Body>
            </Card>
        </Container>
    )
}