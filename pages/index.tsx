import { createClient } from 'contentful';
import { NextPage } from 'next';
import { Box } from '@mui/material';
import Experience from '../src/components/Sections/TechTools/TechTools';
import Hero from '../src/components/Sections/Hero/Hero';
import Projects from '../src/components/Sections/Projects/Projects';
import About from '../src/components/Sections/About/About';
import Layout from '../Layout/Layout';
import { IProject, IIcon } from '../src/Types/Types';

interface HomeProps {
    projectsArray: IProject[];
    iconsArray: IIcon[];
}

const Home: NextPage<HomeProps> = ({ projectsArray, iconsArray }) => {
    return (
        <Layout
            desc={`Udit Verma is a Computer Science student at George Mason University specializing in Machine Learning and Artificial Intelligence, with hands-on experience in developing innovative projects and internships that enhance data processing, system security, and operational efficiency.`}
            title="Udit Verma | Personal Portfolio"
        >
            <Box
                sx={{
                    margin: '0 auto',
                    color: 'white', 
                }}
            >
                <Hero />
                <Experience iconsArray={iconsArray} />
                <Projects projectsArray={projectsArray} />
                <About />
            </Box>
        </Layout>
    );
};

export default Home;

export async function getServerSideProps() {
    const space = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID;
    const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN;

    if (!space || !accessToken) {
        throw new Error('Contentful space ID and access token need to be defined in environment variables');
    }

    const client = createClient({
        space,
        accessToken,
    });

    try {
        const projectsResponse = await client.getEntries({
            content_type: 'projectCollection',
        });

        const iconsResponse = await client.getEntries({
            content_type: 'iconsCollection',
        });

        const projectsArray = projectsResponse.items.map((item: any) => ({
            title: item.fields.title,
            repoUrl: item.fields.repoUrl,
            siteUrl: item.fields.siteUrl,
            description: item.fields.description,
            img: item.fields.img ? item.fields.img.fields.file.url : null,
        }));

        const iconsArray = iconsResponse.items.map((item: any) => ({
            filter: item.fields.filter,
            svg: item.fields.svg.fields.file.url,
            title: item.fields.title,
            isFrontend: item.fields.isFrontend,
        }));

        return {
            props: {
                projectsArray,
                iconsArray,
            },
        };
    } catch (err) {
        console.log('Error fetching data from Contentful:', err);
        return {
            props: {
                projectsArray: [],
                iconsArray: [],
            },
        };
    }
}
