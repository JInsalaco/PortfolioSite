import Container from '@mui/material/Container';
import { About } from "./HomePage/About";
import { ContactInfo } from "./HomePage/ContactInfo";
import { Portfolio } from "./HomePage/Portfolio";
import { Welcome } from './HomePage/Welcome';
import { Skills } from './HomePage/Skills';

export default function HomeContainer() {
    return(
        <Container>
            <Welcome/>
            <About/>
            <Skills/>
            <Portfolio/>
            <ContactInfo/>
        </Container>
    )
}