import { Container} from "react-bootstrap";

export function Welcome() {
    return(
        <Container className="mb-4">
            <div id='home' className='text-center'>
                <h1>Welcome to my site!</h1>
                <p>Welcome to the personal website of Joseph Insalaco</p>
            </div>
        </Container>
    )
}