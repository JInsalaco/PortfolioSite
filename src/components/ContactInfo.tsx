import { Container } from "react-bootstrap";

export function ContactInfo() {
    return(
        <Container>
            <div id='contact-info'>
                <h1>Contact Info</h1>
            </div>
            <div>
                <p>Please feel free to reach out to me and check out my socials below:</p>
                <ul>
                    <li>Email: joseph.insalaco1@gmail.com</li>
                    <li>Phone: +1 (718) 689-0507</li>
                    <li><a href="https://github.com/JInsalaco" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href='https://www.linkedin.com/in/joseph-insalaco-ab7679194/' target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </div>
        </Container>
    )
}