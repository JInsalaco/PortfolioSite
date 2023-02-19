import { Container, Card } from "@mui/material";

export function About(){
    return(
        <Container id='about' className="about mb-5">
            <div>
                <h1>About Me</h1>
            </div>
            <Card sx={{p: 2}}>
                <p>
                    I am a current software engineer at Bank of America. I hold a B.E. in Computer
                    Engineering, and a M.S. in Computer Science from Stevens Institute of Technology.
                </p>
                <p>
                    I am a passionate programmer with experience with several technologies including but not limited to
                    Node.js, MongoDB, PostgreSQL, Express, React, Redis, AWS, and more.
                </p>
                <p>
                    Outside of work I enjoy cooking, baking, and lifting. I am also a passionate
                    foodie and I love exploring new restaurants.
                </p>
                <p>
                    Please check out <a href="https://drive.google.com/file/d/1qCvVZVbVNmcCtf19baIBBOxXCRNSXxq9/view?usp=sharing" target="_blank" rel="noopener noreferrer">my resume</a> for more information
                </p>
            </Card>
        </Container>
    );
}