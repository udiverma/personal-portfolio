import {Box, Typography, Divider, Grid} from '@mui/material';
import { useRouter } from 'next/router';

const styles = {
    mt: '1em',
    display: 'flex',
    flexDirection: 'column',
    gap: '15px',
    flexWrap: 'wrap',
    color: 'white'
}

function Footer() {
    const router = useRouter()
    return (
        <Box >
            <Divider/>
            <Box
                sx={{
                width: '100%',
                color: 'white',
                minHeight: '200px',
                display: 'flex',
                margin: '0 auto'
            }}>
                <Grid
                    sx={{
                    gap: '1.5em',
                    mx: {
                        xs: '3vw',
                        lg: 'auto'
                    },
                    my: '2em'
                }}
                    maxWidth='lg'
                    container>
                    <Grid item xs={12} sm={10} md={8}>
                        <Typography variant='h1' fontSize='1.4em' fontWeight='400'>About.</Typography>
                        <Box sx={styles}>
                            <Typography variant='h3' fontSize='1em'>
                            Hi, my name is Udit Verma, and I am a Computer Science student at George Mason University specializing in Machine Learning and Artificial Intelligence. With a strong background in developing innovative projects and internships that enhance data processing, system security, and operational efficiency, I have won hackathons and created solutions like the Smart Garden System. I am passionate about leveraging technology to solve real-world problems and am actively seeking opportunities in the machine learning and AI sector to further my career.
                            </Typography>
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={3} md={3}>
                        <Typography variant='h1' fontSize='1.4em' fontWeight='400'>Contact</Typography>
                        <Box className='link' sx={styles}>
                            <a target='_blank' rel="noreferrer" href='https://github.com/udiverma'>Github</a>
                            <Typography variant='h1' fontSize='1em'>udiverma@outlook.com</Typography>
                            <Typography variant='h1' fontSize='1em'>Washington DC Metro Area</Typography>
                            <Typography variant='h1' fontSize='1em'>+1 703.462.4500</Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Box>
        </Box>

    );
}
export default Footer