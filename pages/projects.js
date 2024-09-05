import { Container, Heading, SimpleGrid } from '@chakra-ui/react';
import Layout from '../components/layouts/article';
import Section from '../components/section';
import { ProjectGridItem} from '../components/grid-item';

import nomadx from '../public/images/works/nomadx.png';
import mongolnet from '../public/images/works/mongolnet.png';
import nyanmarkdown from '../public/images/works/nyanmarkdown.png';
import madoka_react from '../public/images/works/madoka_react.png';

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
		                                    NomadxはNFTマーケットプレイスであり、Webアプリのフロントエンド開発にはReact、Vite、Tailwindを活用しました。モバイルアプリにはFlutterを採用し、快適なユーザー体験を提供しました。本プロジェクトでは、フロントエンドおよびモバイル開発者として携わりました。
						</ProjectGridItem>					
					</Section>
					<Section>
						<ProjectGridItem id="mongolnet" title="mongolnet" thumbnail={mongolnet} url='https://mongol.net'>
		                                  Mongol.netはモンゴルの国立ソーシャルネットワークプラットフォームです。このプロジェクトでは、フロントエンド、バックエンド、モバイルアプリの開発に携わりました。バックエンドにはNestJSとGraphQL、WebフロントエンドにはReact、Vite、Tailwind CSSを使用し、モバイルアプリにはFlutterを採用しました。詳細はお気軽にお問い合わせください。				  
		                                </ProjectGridItem>
					</Section>
					<Section>
						<ProjectGridItem id="NyanMarkDown " title="NyanMarkDown " thumbnail={nyanmarkdown} url='https://github.com/kyuna312/NyanVim'>
						  NyanMarkDownはElectron.jsを使って開発したカスタムMarkdownエディタです。大学時代に自分でプロジェクトとして取り組み、デスクトップアプリケーションとして提供しています。
						</ProjectGridItem>
					</Section>
					<Section>
						<ProjectGridItem id="madoka_react " title="madoka_react " thumbnail={madoka_react} url='https://madoka-kappa.vercel.app'>
						  madoka_reactは、自分で作成したプロジェクトです。このプロジェクトでは、React JS、Vite、SASSを使用してアニメーション付きのウェブサイトを開発しました。
						</ProjectGridItem>
					</Section>
				</SimpleGrid>
			</Container>
		</Layout>
	);
};

export default Projects;
export { getServerSideProps } from '../components/chakra';
