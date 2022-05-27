import { Container, Card } from "react-bootstrap";

export function About(){
    return(
        <Container id='about' className="about mb-4">
            <div>
                <h1>About Me</h1>
            </div>
            <Card>
                <Card.Body>
                <h2>Joseph Insalaco</h2>
                <p className="text-muted">
                    B.E. Computer Engineering - Stevens Institute of Technology <br/>
                    M.S. Computer Science - Stevens Institute of Technology
                </p>
                <p>
                    My name is Joseph Insalaco and I am a recent graduate of Stevens Institute of Technology. 
                    I currently hold a Bachelor's of Engineering in Computer Engineering and a Master's Degree
                    in Computer Science.
                </p>
                <p>
                    I am a passionate programmer with experience with several technologies including but not limited to
                    Node.js, MongoDB, PostgreSQL, Express, React, Redis, AWS, and more. My primary focus is around full-stack web
                    development and software engineering.
                </p>
                <p>
                    Please check out <a href="https://drive.google.com/file/d/1qCvVZVbVNmcCtf19baIBBOxXCRNSXxq9/view?usp=sharing" target="_blank" rel="noopener noreferrer">my resume</a> for more information
                </p>
                </Card.Body>
            </Card>
        </Container>
    );
}