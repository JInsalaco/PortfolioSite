import Container from '@mui/material/Container';
import { About } from "./HomePage/About";
import { ContactInfo } from "./HomePage/ContactInfo";
import { Portfolio } from "./HomePage/Portfolio";
import { Welcome } from './HomePage/Welcome';

export default function HomeContainer() {
    return(
        <Container className='site-home'>
            <Welcome/>
            <About/>
            <Portfolio/>
            <ContactInfo/>
        </Container>
    )
}