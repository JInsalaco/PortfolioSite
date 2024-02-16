import { Container, Card, Link, Typography } from "@mui/material";

export function About(){
    return(
        <Container id='about' sx={{mb:5}}>
            <Typography variant='h2' sx={{mb:1}}>
                About Me
            </Typography>
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
                    Please check out <Link href="/resume">my resume</Link> for more information
                </p>
            </Card>
        </Container>
    );
}