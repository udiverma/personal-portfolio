import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Image from 'next/image';
import { IToolCard } from '../../../Types/Types';
import { centeredStyles } from '../Perks/Perks';
import { useEffect } from 'react';
import gsap from 'gsap';

const ToolCard = ({ title, svg, filter, className }: IToolCard) => {
    useEffect(() => {
        gsap.to(`.${className}`, {
            opacity: 1,
            stagger: 0.10,
            scrollTrigger: {
                trigger: `.${className}`,
                start: 'top 70%',
            },
        });
    }, [className]);

    return (
        <Box
            className={className}
            sx={{
                my: '1em',
                opacity: 0,
                maxWidth: '250px',
                transition: '.2s ease',
                width: {
                    xs: '100%',
                    sm: '45%',
                    md: '30%',
                },
                textAlign: 'center',
            }}
        >
            <Box
                sx={{
                    ...centeredStyles,
                    width: '100%',
                    height: 'auto',
                    mb: '1em',
                }}
            >
                <Image
                    alt='Icon'
                    className={`${filter ? 'filter ' : ''}icon`}
                    src={svg}
                    width={60}
                    height={60}
                />
            </Box>
            <Typography
                variant='h3'
                sx={{
                    fontSize: {
                        xs: '.86em',
                        sm: '1em',
                    },
                    textAlign: 'center',
                }}
            >
                {title}
            </Typography>
        </Box>
    );
};

export default ToolCard;
