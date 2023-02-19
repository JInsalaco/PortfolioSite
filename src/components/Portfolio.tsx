import { Container, Card, Grid, Typography, Stack} from "@mui/material";
import githubIcon from './github-icon.svg'

export function Portfolio() {
    return(
        <Container  id='portfolio' className="portfolio mb-5">
            <div>
                <h1>Portfolio</h1>
            </div>
            <Grid container spacing={2}>
                <Grid item xs={12} sm={4}>
                    <Card sx={{p: 2}}>
                        <Stack direction="row" justifyContent={"space-between"} sx={{ mb: 1.5 }}>
                            <Typography>
                                Wedd.io
                            </Typography>
                            <a href="https://github.com/JInsalaco/CS554_Good_Nodels" target="_blank" rel="noreferrer">
                                <img width='25' src={githubIcon} alt="GitHub" />
                            </a>
                        </Stack>
                        <Typography sx={{ mb: 1.5 }} variant="body1">Full-stack web application to assist with wedding planning and manage guest lists</Typography>
                        <Typography variant="body2" color="text.secondary">Node.js, MongoDB, Redis, React, AWS</Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{p: 2}}>
                        <Stack direction="row" justifyContent={"space-between"} sx={{ mb: 1.5 }}>
                        <Typography>
                            The Duck Pond
                        </Typography>
                        <a href="https://github.com/JInsalaco/CS546_Group5" target="_blank" rel="noreferrer">
                            <img width='25' src={githubIcon} alt="GitHub" />
                        </a>
                        </Stack>
                        <Typography sx={{ mb: 1.5 }} variant="body1">Online forum for Stevens students to post questions and start discussions</Typography>
                        <Typography variant="body2" color="text.secondary">Node.js, MongoDB, Express, Vue</Typography>
                    </Card>
                </Grid>
                <Grid item xs={12} sm={4}>
                    <Card sx={{p: 2}}>
                        <Stack direction="row" justifyContent={"space-between"} sx={{ mb: 1.5 }}>
                        <Typography>
                            Hiragana Tutor
                        </Typography>
                        <a href="https://github.com/JInsalaco/Hiragana-Tutor" target="_blank" rel="noreferrer">
                            <img width='25' src={githubIcon} alt="GitHub" />
                        </a>
                        </Stack>
                        <Typography sx={{ mb: 1.5 }} variant="body1">React single-page application designed to gamify Japanese language learning</Typography>
                        <Typography variant="body2" color="text.secondary">React</Typography>
                    </Card>
                </Grid>
            </Grid>
        </Container>
    )
}