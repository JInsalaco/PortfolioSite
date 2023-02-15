import { Container} from "@mui/material";
import headshot from './headshot.jpeg'
export function Welcome() {
    return(
        <Container id='home' className="mb-4 mt-4">
            <div className='welcome'>
                <img src={headshot} width='100' className="rounded-circle" alt="Headshot of Joseph Insalaco"/>
                <h1>
                Joseph Insalaco
                </h1>
            </div>
        </Container>
    )
}