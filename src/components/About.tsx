import { Container, Card } from "react-bootstrap";

export function About(){
    return(
        <Container id='about' className="about mb-5">
            <div>
                <h1>About Me</h1>
            </div>
            <Card>
                <Card.Body>
                <p>
                    I am a recent graduate of Stevens Institute of Technology with a 
                    Bachelor of Engineering in Computer Engineering and a Master of Science
                    in Computer Science.
                </p>
                <p>
                    I am a passionate programmer with experience with several technologies including but not limited to
                    Node.js, MongoDB, PostgreSQL, Express, React, Redis, AWS, and more. I currently work as a Data Architect
                    under my company's Enterprise Business Architecture and Tools department. However, my primary focus is 
                    around full-stack web development and software engineering.
                </p>
                <p>
                    Outside of work I enjoy cooking, baking, and lifting. I am also a passionate
                    foodie and I love exploring new restaurants.
                </p>
                <p>
                    Please check out <a href="https://drive.google.com/file/d/1qCvVZVbVNmcCtf19baIBBOxXCRNSXxq9/view?usp=sharing" target="_blank" rel="noopener noreferrer">my resume</a> for more information
                </p>
                </Card.Body>
            </Card>
        </Container>
    );
}