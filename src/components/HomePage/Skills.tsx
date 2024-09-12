import { Container, Card, Grid, Typography, CardContent, CardActionArea } from "@mui/material";
import '../../images/skill-icons.css';
interface skillCard {
    skill: string,
    icon: any,
}
export function Skills(){
    const cardContent:skillCard[] = [
        {
        skill: 'React.js',
        icon: 'ib mdi-react',
        },
        {
        skill: 'Node.js',
        icon: 'ib mdi-nodejs',
        },
        {
        skill: 'Next.js',
        icon: 'ib file-icons-nextjs',
        },
        {
        skill: 'MongoDB',
        icon: 'ib simple-icons-mongodb',
        },
        {
        skill: 'AWS',
        icon: 'ib mdi-aws',
        },
        {
        skill: 'Redis',
        icon: 'ib cib-redis',
        },
    ]
    const makeCards = () => {
        return cardContent.map((card) => {
            return(
                <Grid item key={card.skill} xs={12} sm={4}>
                    <Card sx={{height:'100%'}}>
                        <CardActionArea sx={{display: 'flex', alignItems: 'center', justifyContent:'center'}}>
                            <CardContent>
                                <Typography className={card.icon}/>
                                <Typography align='center' variant="body1">{card.skill}</Typography>
                            </CardContent>
                        </CardActionArea>
                    </Card>
                </Grid>
            )
        })
    }

    return(
        <Container sx={{mb:5}}>
            <Typography variant='h2' sx={{mb:1}}>
                Skills
            </Typography>
            <Grid container spacing={2} alignItems={'stretch'}>
                {makeCards()}
            </Grid>
        </Container>
    );
}