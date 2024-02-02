import React from 'react';
import { Container, Card, Grid, Typography, Stack, Link, useTheme, Chip} from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
interface technologyCard {
    title: string,
    url: string,
    content: string,
    technologies: string[],
}
export function Portfolio() {
    const theme = useTheme();
    const cardContent:technologyCard[] = [{
        title: "Wedd.io",
        url: "https://github.com/JInsalaco/CS554_Good_Nodels",
        content: "Full-stack web application to assist with wedding planning and manage guest lists",
        technologies: ["Node.js", "MongoDB", "Redis", "React", "AWS"],
    },
    {
        title: "The Duck Pond",
        url: "https://github.com/JInsalaco/CS546_Group5",
        content: "Online forum for Stevens students to post questions and start discussions",
        technologies: ["Node.js", 'MongoDB', 'Express', "Vue"],
    },
    {
        title: "React Native Blackjack",
        url: "https://github.com/JInsalaco/Blackjack",
        content: "React Native application that simulates a game of blackjack",
        technologies: ["React Native, Typescript"],
    },
    ]
    
    const makeCards = () => {
        return cardContent.map((card) => {
            return(
                <Grid item key={card.title} xs={12} sm={4}>
                    <Card sx={{p: 2, height:'100%'}}>
                        <Stack direction="row" justifyContent={"space-between"} sx={{ mb: 1.5 }}>
                            <Typography variant='h6'>
                                {card.title}
                            </Typography>
                            <Link href={card.url} target="_blank" rel="noreferrer" aria-label={`Link to ${card.title} GitHub repository`}>
                                <GitHubIcon sx={theme.palette.mode === 'light' ? {color:'black'} : {color:'white'}}/>
                            </Link>
                        </Stack>
                        <Typography sx={{ mb: 1.5 }} variant="body1">{card.content}</Typography>
                        {card.technologies.map((technologies, index)=>{
                            return <Chip key={index} label={technologies} sx={{m:.25}}/>
                        })}
                    </Card>
                </Grid>
            )
        })
    }
    return(
        <Container sx={{mb:5}}>
            <Typography variant='h2' sx={{mb:1}}>
                Portfolio
            </Typography>
            <Grid container spacing={2} alignItems={'stretch'}>
                {makeCards()}
            </Grid>
        </Container>
    )
}