import { Container, Typography, Grid, Divider } from '@mui/material';
import { useContext, useEffect } from 'react';
import { ColorModeContext } from '../../../../pages/_app';
import MainTitleAnimation from '../../../gsap/MainTitleAnimation';
import { centeredStyles } from '../Perks/Perks';
import ToolCard from './ToolCard';
import gsap from 'gsap';

const TechTools = ({ iconsArray }: any) => {
    const colorMode = useContext(ColorModeContext);
    
    // Function to determine if the filter should be applied
    const isfilterMode = (item: any) => (colorMode?.mode === 'light' ? false : item?.filter);

    // Sort iconsArray alphabetically by title
    const sortedIconsArray = iconsArray.sort((a: any, b: any) => a.title.localeCompare(b.title));

    // Separate the sorted array into backend and frontend tools
    const BackendTools = sortedIconsArray.filter((icon: any) => !icon.isFrontend);
    const FrontendTools = sortedIconsArray.filter((icon: any) => icon.isFrontend);

    useEffect(() => {
        MainTitleAnimation('.title1', '.title2');
        gsap.to('.secondTitle', {
            opacity: 1,
            y: 0,
            scrollTrigger: {
                trigger: '.secondTitle',
                start: 'top 70%',
            },
        });
    }, []);

    return (
        <>
            <Container
                maxWidth="lg"
                sx={{
                    margin: '0 auto',
                    py: {
                        xs: '6em',
                    },
                }}
            >
                <Grid container>
                    <Grid item sx={centeredStyles}>
                        <Typography
                            className="title1 t25o0"
                            variant="h1"
                            sx={{
                                fontSize: {
                                    xs: '2.2em',
                                    sm: '2.5em',
                                    md: '3em',
                                },
                                fontWeight: '600',
                            }}
                        >
                            My Tech Stack
                        </Typography>
                        <Typography
                            variant="h2"
                            className="secondary title2 t25o0"
                            sx={{
                                pt: '1.5em',
                                maxWidth: '570px',
                                fontSize: {
                                    xs: '.8em',
                                    sm: '1em',
                                },
                            }}
                        >
                            Backend Technologies I&apos;ve Worked With
                        </Typography>
                    </Grid>
                    <Grid
                        sx={{
                            ...centeredStyles,
                            flexDirection: 'row',
                            justifyContent: {
                                xs: 'center',
                            },
                            mt: '3em',
                            flexWrap: 'wrap',
                        }}
                        xs={12}
                        item
                    >
                        {BackendTools.map((item: any) => (
                            <ToolCard
                                className="toolCard1"
                                filter={isfilterMode(item)}
                                svg={item.svg}
                                title={item.title}
                                key={item.title}
                            />
                        ))}
                    </Grid>

                    {FrontendTools.length > 0 && (
                        <>
                            <Grid item sx={centeredStyles}>
                                <Typography
                                    variant="h2"
                                    className="secondary secondTitle t25o0"
                                    sx={{
                                        pt: '3.5em',
                                        opacity: 0,
                                        fontSize: {
                                            xs: '.8em',
                                            sm: '1em',
                                        },
                                    }}
                                >
                                    Frontend Technologies I&apos;ve Worked With
                                </Typography>
                            </Grid>
                            <Grid
                                sx={{
                                    ...centeredStyles,
                                    flexDirection: 'row',
                                    justifyContent: {
                                        xs: 'center',
                                    },
                                    mt: '3em',
                                    flexWrap: 'wrap',
                                }}
                                xs={12}
                                item
                            >
                                {FrontendTools.map((tool: any) => (
                                    <ToolCard
                                        className="toolCard2"
                                        filter={isfilterMode(tool)}
                                        svg={tool.svg}
                                        title={tool.title}
                                        key={tool.title}
                                    />
                                ))}
                            </Grid>
                        </>
                    )}
                </Grid>
            </Container>
            <Divider />
        </>
    );
};

export default TechTools;
