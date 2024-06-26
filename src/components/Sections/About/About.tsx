import { Container, Box, Grid } from '@mui/material';
import Image from 'next/image';
import Typography from '@mui/material/Typography';
import { ColorModeContext } from '../../../../pages/_app';
import { useContext } from 'react';

const About = () => {
    const colorMode = useContext(ColorModeContext);

    return (
        <>
            <Container
                id='about'
                maxWidth='lg'
                sx={{
                    margin: '0 auto',
                    py: '6em',
                }}>
                <Grid
                    container
                    sx={{
                        justifyContent: {
                            sm: 'center',
                            md: 'space-between',
                        },
                    }}>
                    <Grid item xs={12} sm={12} md={4} lg={5}>
                        <Box
                            sx={{
                                maxWidth: '400px',
                                width: '100%',
                                height: '450px',
                                margin: '0 auto',
                                boxShadow: {
                                    xs: '-.5em 1.5em 0px #0092ff',
                                    sm: '-1.5em 1.5em 0px #0092ff',
                                },
                                position: 'relative',
                            }}>
                            <Box
                                sx={{
                                    width: '100px',
                                    height: '100px',
                                    zIndex: '0',
                                    position: 'absolute',
                                    right: {
                                        xs: '-4%',
                                        sm: '90%',
                                    },
                                    bottom: {
                                        xs: '-5%',
                                        sm: '-10%',
                                    },
                                    background: 'transparent',
                                    backgroundImage: colorMode.mode === 'dark' ? 'radial-gradient(white 2px, transparent 0)' : 'radial-gradient(black 2px, transparent 0)',
                                    backgroundSize: '15px 13px',
                                }}></Box>
                            <Image
                                alt='Personal Image'
                                className='img1'
                                layout='fill'
                                src='/About_Me_Image.jpeg'
                            />
                        </Box>
                    </Grid>
                    <Grid item xs={12} sm={12} md={7.5} lg={7}>
                        <Box sx={{
                            pb: '.5em',
                        }}>
                            <Typography
                                variant='h1'
                                sx={{
                                    fontSize: {
                                        xs: '2.2em',
                                        sm: '2.5em',
                                        md: '3em',
                                    },
                                    py: '.5em',
                                    pt: {
                                        xs: '1.8em',
                                        md: 0,
                                    },
                                }}
                                fontWeight='600'>
                                About Me, <br />I&apos;m Udit Verma
                            </Typography>
                            <Typography
                                variant='h2'
                                sx={{
                                    maxWidth: '800px',
                                    fontSize: {
                                        xs: '.8em',
                                        sm: '1em',
                                    },
                                }}>
                                My journey in technology began in middle school when I discovered the world of web development through HTML and CSS. Creating something from scratch ignited a passion for coding that has only grown since then. By high school, I was diving into more complex areas like machine learning and data processing, which led me to develop innovative projects such as RentGMU and FixMyResume.
                                <br /><br />I&apos;ve gained valuable hands-on experience through internships, where I enhanced data processing and system security. These experiences have deepened my understanding of the theoretical aspects of my field and equipped me with practical skills.
                                <br /><br />Despite being deeply immersed in technology, I value a balanced life. I enjoy reading, exploring new technologies, and engaging in activities that promote personal growth. My active involvement in various organizations at George Mason University, including the Computer Science Club, Social Sandbox, the Society of Asian Scientists and Engineers, Tech for Good, Indian Student Association, and Tu Bhi Nachle, where I serve as the Financial Officer, has broadened my horizons and demonstrated my dedication to personal and professional development.
                            </Typography>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </>
    );
};

export default About;