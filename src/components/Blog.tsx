import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

export function Blog(){
    interface blogPost {
        title: string,
        body: string,
        image: string,
    } 
    const testData: blogPost = {
        title: "Sushi By M",
        body: "Great food",
        image: 'https://i.pinimg.com/564x/a2/cf/55/a2cf558189547edbde93503ca58d689a.jpg',
    }
    
    return(
        <Card>
            <CardContent>
                <Typography>
                    {testData?.title}
                </Typography>
                <Typography>
                    {testData?.body}
                </Typography>
                <Box/>
            </CardContent>
        </Card>
    );
}