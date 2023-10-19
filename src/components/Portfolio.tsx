import React from 'react';
import { Container, Card, Grid, Typography, Stack, Link, useTheme} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
interface technologyCard {
    title: string,
    url: string,
    content: string,
    technologies: string,
}
export function Portfolio() {
    const theme = useTheme();
    const cardContent:technologyCard[] = [{
        title: "Wedd.io",
        url: "https://github.com/JInsalaco/CS554_Good_Nodels",
        content: "Full-stack web application to assist with wedding planning and manage guest lists",
        technologies: "Node.js, MongoDB, Redis, React, AWS",
    },
    {
        title: "The Duck Pond",
        url: "https://github.com/JInsalaco/CS546_Group5",
        content: "Online forum for Stevens students to post questions and start discussions",
        technologies: "Node.js, MongoDB, Express, Vue",
    },
    {
        title: "Hiragana Tutor",
        url: "https://github.com/JInsalaco/Hiragana-Tutor",
        content: "React single-page application designed to gamify Japanese language learning",
        technologies: "React",
    },
    ]
    
    const makeCards = () => {
        return cardContent.map((card) => {
            return(
                <Grid item key={card.title} xs={12} sm={4}>
                    <Card sx={{p: 2}}>
                        <Stack direction="row" justifyContent={"space-between"} sx={{ mb: 1.5 }}>
                            <Typography>
                                {card.title}
                            </Typography>
                            <Link href={card.url} target="_blank" rel="noreferrer">
                                <GitHubIcon sx={theme.palette.mode === 'light' ? {color:'black'} : {color:'white'}}/>
                            </Link>
                        </Stack>
                        <Typography sx={{ mb: 1.5 }} variant="body1">{card.content}</Typography>
                        <Typography variant="body2" color="text.secondary">{card.technologies}</Typography>
                    </Card>
                </Grid>
            )
        })
    }
    return(
        <Container  id='portfolio' className="portfolio mb-5">
            <div>
                <h1>Portfolio</h1>
            </div>
            <Grid container spacing={2}>
                {makeCards()}
            </Grid>
        </Container>
    )
}