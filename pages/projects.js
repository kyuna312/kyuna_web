import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { ProjectGridItem} from '../components/grid-item';

import nomadx from '../public/images/works/nomadx.png';
import mongolnet from '../public/images/works/mongolnet.png';
import nyanmarkdown from '../public/images/works/nyanmarkdown.png';
import madoka_react from '../public/images/works/madoka_react.png';
import nyanvim from '../public/images/works/nyanvim.png';

const Projects = () => {
 	return (
		<Layout title="Projects">
			<Container paddingTop={20}>
				<Heading as="h3" fontSize={20} mb={4}>
				  プロジェクト
				</Heading>

				<SimpleGrid columns={[ 1, 1, 2 ]} gap={6}>
					<Section>
						<ProjectGridItem id="NomadX" title="NomadX" thumbnail={nomadx} url='https://nomadx.world' >
						  モンゴルのNFTマーケットプレイスWebアプリケーションおよびモバイルアプリケーション
						</ProjectGridItem>					
					</Section>
					<Section>
						<ProjectGridItem id="mongolnet" title="mongolnet" thumbnail={mongolnet} url='https://mongol.net'>
						  React、Vite、Tailwind CSS、NestJS、Flutter、GraphQLを使用してMongol.netという国立ソーシャルネットワークプラットフォームを開発しました。このプロジェクトに関する具体的な問い合わせや詳細については、お問い合わせください。
						</ProjectGridItem>
					</Section>
					<Section>
						<ProjectGridItem id="NyanMarkDown " title="NyanMarkDown " thumbnail={nyanmarkdown} url='https://github.com/kyuna312/NyanVim'>
						  NyanMarkDownカスタムMarkdownエディタ
						</ProjectGridItem>
					</Section>
					<Section>
						<ProjectGridItem id="madoka_react " title="madoka_react " thumbnail={madoka_react} url='https://madoka-kappa.vercel.app'>
						  私のカスタムReact JS ViteベースのSASSアニメーションウェブ
						</ProjectGridItem>
					</Section>
					<Section delay={0.1}>
						<ProjectGridItem id="nyanvim" title="nyanvim" thumbnail={nyanvim}>
						  私のカスタムNeoVimプロジェクト
						</ProjectGridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	);
};

export default Projects;
export { getServerSideProps } from '../components/chakra';
