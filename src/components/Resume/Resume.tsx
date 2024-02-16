import { Container } from '@mui/material';
const Resume = () => {

    return(
        <Container style={{height:'100%'}} maxWidth={'xl'}>
                {/*  */}
                <iframe src="https://drive.google.com/file/d/1qCvVZVbVNmcCtf19baIBBOxXCRNSXxq9/preview" style={{ width: "100%", height: `90vh` }} allow="autoplay"></iframe>
        </Container>
            // <iframe  title="Joseph Insalaco Resume"  width="100%" height={height} allow="autoplay" onLoad={onLoad}></iframe>
    )
};

export default Resume;