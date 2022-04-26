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

const Project5 = () => {
  return (
    <Layout>
      <Head>
        <title>{userInfo.siteTitle} - Animations: Project 5</title>
      </Head>
      <Article title="Project 5: Python Scripting" date="2022-04-28">
        <Heading size="md">Final Animation:</Heading>
        <ArticleVideo
          size="80vw"
          src="https://www.youtube.com/embed/dQw4w9WgXcQ"
        />

        <Spacer />
        <Heading size="md">Storyboard</Heading>
        <Image
          h={800}
          src="/images/animations/project5/storyboard.png"
          alt="Python scripting animation storyboard"
        />

        <Spacer />

        <Heading size="md">Words</Heading>
        <Heading size="sm">Wow</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project5/picture.png"
            alt="image"
          />
          <Text justifySelf="start" fontSize="lg">
            They call me Lorrem Ipsum Dolor Sit Amet
          </Text>
        </SimpleGrid>

        <Spacer />
        <Heading size="md">Notes</Heading>
        <Text justifySelf="start" fontSize="lg">
          Notes
        </Text>
        <Spacer />

        <Heading size="md">Credits</Heading>
        <Link href="https://www.youtube.com/watch?v=gy1B3agGNxw" isExternal>
          Credits by Credits
        </Link>
      </Article>
    </Layout>
  );
};
export default Project5;
