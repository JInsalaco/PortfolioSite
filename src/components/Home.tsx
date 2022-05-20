import { Container } from "react-bootstrap";
import { About } from "./About";
import { ContactInfo } from "./ContactInfo";
import { Portfolio } from "./Portfolio";
import { Welcome } from './Welcome';

export function Home() {
    return(
        <Container className='site-home'>
            <Welcome/>
            <About/>
            <Portfolio/>
            <ContactInfo/>
        </Container>
    )
}