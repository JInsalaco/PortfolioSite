import Container from '@mui/material/Container';
import { About } from "./About";
import { ContactInfo } from "./ContactInfo";
import { Portfolio } from "./Portfolio";
import { Welcome } from './Welcome';
import { Skills } from './Skills';

export default function HomeContainer() {
    return(
        <Container maxWidth={'xl'} sx={{height:'100%'}}>
            <Welcome/>
            <About/>
            <Skills/>
            <Portfolio/>
            <ContactInfo/>
        </Container>
    )
}