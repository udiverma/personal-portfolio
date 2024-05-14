import { AppBar, Button, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import { useContext } from 'react';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import { INavbar } from '../../Types/Types';
import { ColorModeContext } from '../../../pages/_app';
import Logo from '../Logo/Logo';
import { useRouter } from 'next/router';

const Navbar = ({ toggleDrawer, navbarSx }: INavbar) => {
    const colorMode = useContext(ColorModeContext);
    const color = colorMode.mode === 'light' ? 'black' : 'white';
    const router = useRouter();

    const handleLinkedInClick = () => {
        window.open('https://www.linkedin.com/in/uverma/', '_blank');
    };

    return (
        <AppBar
            sx={{
                background: 'transparent',
                boxShadow: 'rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px',
                py: '.45em',
                zIndex: '555',
                backdropFilter: 'blur(1px)',
                position: 'fixed',
                ...navbarSx,
            }}
            position="static"
        >
            <Container
                sx={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    margin: '0 auto',
                }}
                maxWidth="lg"
            >
                <Logo color={color} toggleDrawer={toggleDrawer} colorMode={colorMode} />
                <Button
                    onClick={handleLinkedInClick}
                    sx={{ mr: '1em', fontWeight: '500', ':hover': { color: '#0092ff' }, color: color }}
                >
                    Let&apos;s Connect
                </Button>
                <IconButton
                    sx={{
                        color,
                        ':hover': {
                            color,
                        },
                        ':focus': {
                            color,
                        },
                    }}
                    onClick={colorMode.toggleColorMode}
                    size="large"
                    edge="start"
                    aria-label="toggle theme"
                >
                    <DarkModeIcon />
                </IconButton>
            </Container>
        </AppBar>
    );
};

export default Navbar;