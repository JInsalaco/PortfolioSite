import { Container, Card, Link, Typography } from "@mui/material";

export function About(){
    return(
        <Container id='about' sx={{mb:5}}>
            <Typography variant='h2' sx={{mb:1}}>
                About Me
            </Typography>
            <Card sx={{p: 2}}>
                <p>
                    I am a full-stack web developer based in New York City and currently work at JPMorgan Chase. I have over 5 years of experience in React, Java, Typescript, PostgreSQL, MongoDB, and AWS.
                </p>
                <p>
                    Please check out <Link href="/resume">my resume</Link> for more information on my skillset and work projects.
                </p>
            </Card>
        </Container>
    );
}