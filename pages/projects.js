import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { ProjectGridItem} from '../components/grid-item';
import { useTranslation } from 'react-i18next';

import nomadx from '../public/images/works/nomadx.png';
import mongolnet from '../public/images/works/mongolnet.png';
import nyanmarkdown from '../public/images/works/nyanmarkdown.png';
import madoka_react from '../public/images/works/madoka_react.png';
import nyanvim from '../public/images/works/nyanvim.png';

const Projects = () => {
	const { t } = useTranslation('common');
	
	return (
		<Layout title="Projects">
			<Container paddingTop={20}>
				<Heading as="h3" fontSize={20} mb={4}>
					{t('projects.title')}
				</Heading>

				<SimpleGrid columns={[ 1, 1, 2 ]} gap={6}>
					<Section>
						<ProjectGridItem id="NomadX" title="NomadX" thumbnail={nomadx} url='https://nomadx.world' >
							Mongolian NFT Market Place Web Application and Mobile Application
						</ProjectGridItem>					
					</Section>
					<Section>
						<ProjectGridItem id="mongolnet" title="mongolnet" thumbnail={mongolnet} url='https://mongol.net'>
							I developed a National Social Network Platform called Mongol.net using React with Vite, Tailwind
							CSS, NestJS, Flutter , and GraphQL. If you have any specific inquiries or would like more
							information about this project
						</ProjectGridItem>
					</Section>
					<Section>
						<ProjectGridItem id="NyanMarkDown " title="NyanMarkDown " thumbnail={nyanmarkdown} url='https://github.com/kyuna312/NyanVim'>
							NyanMarkDown Custom Mark Down Editor{' '}
						</ProjectGridItem>
					</Section>
					<Section>
						<ProjectGridItem id="madoka_react " title="madoka_react " thumbnail={madoka_react} url='https://madoka-kappa.vercel.app'>
							My Custom React JS Vite Based SASS animated web
						</ProjectGridItem>
					</Section>
					<Section delay={0.1}>
						<ProjectGridItem id="nyanvim" title="nyanvim" thumbnail={nyanvim}>
							my custom neo vim project
						</ProjectGridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	);
};

export default Projects;
export { getServerSideProps } from '../components/chakra';
