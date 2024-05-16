import { Box, Button, Container, Grid, Typography } from '@mui/material';
import gsap from 'gsap';
import { useRef, useEffect } from 'react';
import ScrollToPlugin from "gsap/dist/ScrollToPlugin";
import HeroSectionAnimation from '../../../gsap/HeroSectionAnimation';
import Image from 'next/image';
import { Typewriter } from 'react-simple-typewriter';

export const btnStyles = {
    padding: '.77em 1.5em',
    borderRadius: '3px'
};

const Hero = () => {
    const ref = useRef();
    const q = gsap.utils.selector(ref);
    gsap.registerPlugin(ScrollToPlugin);

    useEffect(() => {
        HeroSectionAnimation(q);
    }, []);

    return (
        <Container
            id='hero'
            maxWidth='lg'
            sx={{
                margin: '0 auto',
                py: {
                    xs: '7.5em',
                    sm: '8.5em'
                }
            }}>
            <Grid
                container
                sx={{
                    justifyContent: 'space-between'
                }}>
                <Grid item xs={12} sm={10} md={8} lg={7}>
                    <Box ref={ref}>
                        <Typography
                            className='t1'
                            variant='h1'
                            sx={{
                                fontSize: {
                                    xs: '2.4em',
                                    sm: '3.4em',
                                    md: '3.8em'
                                },
                                textAlign: 'left',
                                transform: 'translateY(40px)',
                                opacity: 0,
                                pt: '0em',
                                fontWeight: '600'
                            }}>
                            <Typewriter
                                words={['Udit Verma', 'Software Engineer', 'ML / AI Dev','AWS Certified Cloud Practitioner', "Full Stack Dev"]}
                                loop={true}
                                cursor
                                cursorStyle='_'
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}
                            />
                        </Typography>
                        <Typography
                            variant='h2'
                            className='secondary t2 t25o0'
                            sx={{
                                textAlign: 'left',
                                pt: '1.5em',
                                fontSize: {
                                    xs: '.9em',
                                    sm: '1em'
                                },
                                maxWidth: '570px',
                                fontWeight: '300'
                            }}>
                            Hey there! I&apos;m Udit Verma, an 18-year-old Computer Science student at George Mason University specializing in Machine Learning and Artificial Intelligence. With a passion for technology, I have developed innovative projects and gained hands-on experience through internships, enhancing data processing, system security, and operational efficiency. I&apos;m an active member of various student organizations, striving to make a positive impact through collaboration and continuous learning. Welcome to my portfolio!
                        </Typography>
                        <Box
                            sx={{
                                my: '2.5em',
                                gap: '.8em',
                                display: 'flex',
                                flexWrap: 'wrap',
                                alignItems: 'center'
                            }}>
                            <Button
                                className="b1 explore offset"
                                sx={{
                                    opacity: 0,
                                    borderRadius: 0,
                                    padding: '.75em 2.5em',
                                    flex: { xs: 1, sm: 'inherit' },
                                }}
                                onClick={() => gsap.to(window, {
                                    duration: 2,
                                    scrollTo: `#ProjectSection`
                                })}>
                                View Projects
                            </Button>
                            <a href={`https://github.com/udiverma/assets/blob/d4685f0853dd5e13a2360eae85406ec19f7d8467/Udit_Resume_ML_Fall_2024.pdf`} rel="noreferrer" target='_blank'>
                                <Button
                                    className='b2'
                                    sx={{
                                        ...btnStyles,
                                        opacity: 0,
                                        height: 'max-content',
                                        padding: '1em 1.5em',
                                        width: { xs: '100%', sm: 'auto' },
                                        ":hover": {
                                            color: '#0092ff'
                                        }
                                    }}
                                    variant='text'>
                                    <Typography fontSize='14px'>
                                        View Resume
                                    </Typography>
                                </Button>
                            </a>
                        </Box>
                    </Box>
                </Grid>
                <Grid
                    sx={{
                        mb: {
                            xs: '3.5em',
                            sm: '4em',
                            lg: '1em'
                        },
                        mr: {
                            sm: '1em',
                            md: '2em',
                            lg: '0em'
                        },
                        display: 'flex',
                        alignItems: 'baseline',
                        justifyContent: 'flex-end'
                    }}
                    item
                    xs={12}
                    sm={12}
                    md={12}
                    lg={5}>
                    <Box
                        sx={{
                            borderRadius: '6px',
                            width: {
                                xs: '100%',
                                sm: '350px',
                                md: '400px'
                            }
                        }}>
                        <Box
                            className='mainBox'
                            sx={{
                                opacity: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                position: 'relative',
                                height: '460px',
                                boxShadow: {
                                    xs: '.5em 3em 0 #313131 ',
                                    sm: '2em 3em 0px #313131'
                                }
                            }}>
                            <Image
                                layout='fill'
                                style={{
                                    opacity: 0,
                                    borderRadius: '6px',
                                    zIndex: '2'
                                }}
                                className='img1'
                                src='/Hero_Image.jpeg'
                                alt="Personal Image"
                            />
                            <Box
                                className='gradientBg'
                                sx={{
                                    width: '100px',
                                    height: '100px',
                                    zIndex: '0',
                                    position: 'absolute',
                                    right: {
                                        xs: '-1%',
                                        sm: '-5%'
                                    },
                                    opacity: 0,
                                    bottom: '-5%',
                                    background: 'transparent',
                                    backgroundImage: 'radial-gradient(white 2px, transparent 0)',
                                    backgroundSize: '15px 13px'
                                }}></Box>
                            <Box
                                className='quoteBox'
                                sx={{
                                    zIndex: '2',
                                    position: 'absolute',
                                    bottom: {
                                        xs: '0%',
                                        lg: '-5%'
                                    },
                                    width: '100%',
                                    right: {
                                        sm: '25%'
                                    },
                                    top: '105%',
                                    overflow: 'hidden',
                                    opacity: 0,
                                    background: '#0092ff'
                                }}>
                                <Typography
                                    sx={{
                                        fontWeight: '300',
                                        fontSize: '.85em',
                                        padding: '1em'
                                    }}>
                                    {`"The only way to discover the limits of the possible is to go beyond them into the impossible."

                                – Arthur C. Clarke`}
                                </Typography>
                            </Box>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
        </Container>
    );
}

export default Hero;