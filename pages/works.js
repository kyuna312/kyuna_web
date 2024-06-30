import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { WorkGridItem } from '../components/grid-item';

import nomadx from '../public/images/works/nomadx.png';
import mongolnet from '../public/images/works/mongolnet.png';

const Works = () => (
	<Layout title="Works">
		<Container paddingTop={20}>
			<Heading as="h3" fontSize={20} mb={4}>
				Works
			</Heading>

			<SimpleGrid columns={[ 1, 1, 2 ]} gap={6}>
				<Section>
					<WorkGridItem id="NomadX" title="NomadX" thumbnail={nomadx}>
						Mongolian NFT Market Place Web Application and Mobile Application
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem id="mongolnet" title="mongolnet" thumbnail={mongolnet}>
						I developed a National Social Network Platform called Mongol.net using React with Vite, Tailwind
						CSS, NestJS, Flutter , and GraphQL. If you have any specific inquiries or would like more
						information about this project
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem id="NyanMarkDown " title="NyanMarkDown " thumbnail={mongolnet}>
						NyanMarkDown Custom Mark Down Editor{' '}
					</WorkGridItem>
				</Section>
				<Section>
					<WorkGridItem id="madoka_react " title="madoka_react " thumbnail={mongolnet}>
						My Custom React JS Vite Based SASS animated web
					</WorkGridItem>
				</Section>
				<Section delay={0.1}>
					<WorkGridItem id="nyanvim" title="nyanvim" thumbnail={mongolnet}>
						my custom vim code
					</WorkGridItem>
				</Section>
			</SimpleGrid>
		</Container>
	</Layout>
);

export default Works;
export { getServerSideProps } from '../components/chakra';
