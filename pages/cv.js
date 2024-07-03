import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Layout from '../components/layouts/article'
import Section from '../components/section'
import { GridItem } from '../components/grid-item'
import nomadx from './../public/images/maya.png';

const Cv = () => (
  <Layout title="Posts">
    <Container paddingTop={20} paddingBottom={250}>
      <Heading as="h3" fontSize={20} mb={4}>
        CV
      </Heading>

      <Section delay={0.1}>
        <SimpleGrid columns={[1, 2]} gap={12}>
          <GridItem
            title="CV English"
            thumbnail={nomadx}
            // thumbnail={thumbPortfolio}
            href="https://docs.google.com/document/d/1HxRlAZ_ke7MAcVHUZsoveZC9YBuvOICW35y-HDiDIgY/edit?usp=sharing"
          />
          <GridItem
            title="Cv Japanese"
            thumbnail={nomadx}
            // thumbnail={thumbHowToUseInkdrop}
            href="https://docs.google.com/document/d/1ybedNLUPpoqChfSpAtpVON3wS40RiynG/edit?usp=sharing&ouid=103606792688552098181&rtpof=true&sd=true"
          /> 
        </SimpleGrid>
      </Section>
    </Container>
  </Layout>
)

export default Cv
export { getServerSideProps } from '../components/chakra'