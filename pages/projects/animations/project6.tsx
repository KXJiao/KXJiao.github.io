import {
  Heading,
  Image,
  Link,
  SimpleGrid,
  Spacer,
  Text,
} from "@chakra-ui/react";
import Head from "next/head";
import Article from "../../../components/Article/Article";
import ArticleVideo from "../../../components/Article/ArticleVideo";
import Layout from "../../../components/Layout/Layout";
import userInfo from "../../../constants/info";

const Project6 = () => {
  return (
    <Layout>
      <Head>
        <title>{userInfo.siteTitle} - Animations: Project 5</title>
      </Head>
      <Article title="Project 6: Final Project" date="2022-05-13">
        <Heading size="md">Final Animation:</Heading>
        <ArticleVideo
          size="80vw"
          src="" //https://www.youtube.com/embed/jxse_iZ4uW0
        />

        <Spacer />

        <Heading size="md">Images</Heading>
        <Heading size="sm">img</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project5/Duke.png"
            alt="Java Duke t-posed on blue screen"
          />
          <Text justifySelf="start" fontSize="lg">
            text
          </Text>
        </SimpleGrid>
        <Heading size="sm">img</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project5/Duke.png"
            alt="Java Duke t-posed on blue screen"
          />
          <Text justifySelf="start" fontSize="lg">
            text
          </Text>
        </SimpleGrid>
        <Heading size="sm">img</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project5/Duke.png"
            alt="Java Duke t-posed on blue screen"
          />
          <Text justifySelf="start" fontSize="lg">
            text
          </Text>
        </SimpleGrid>

        <Spacer />
        <Heading size="md">Notes</Heading>
        <Text justifySelf="start" fontSize="lg">
          text
        </Text>
        <Spacer />

        <Heading size="md">Credits</Heading>
        <Link href="https://www.youtube.com/watch?v=QKr_0DMYV5g" isExternal>
          source
        </Link>
      </Article>
    </Layout>
  );
};
export default Project6;
