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
          src="https://www.youtube.com/embed/jxse_iZ4uW0"
        />

        <Spacer />

        <Heading size="md">Images</Heading>
        <Heading size="sm">Dominos Image</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project5/Duke.png"
            alt="Java Duke t-posed on blue screen"
          />
          <Text justifySelf="start" fontSize="lg">
            The image used on the dominos. Did you know that Java has a mascot,
            named Duke? The developers even 3d modeled him in various
            capacities.
          </Text>
        </SimpleGrid>
        <Heading size="sm">Dominos</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project5/icon.png"
            alt="Dominos before falling"
          />
          <Text justifySelf="start" fontSize="lg">
            3 Billion Devices Run Log4j
          </Text>
        </SimpleGrid>
        <Heading size="sm">Background Image</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project5/windows.png"
            alt="Bliss background 4k"
          />
          <Text justifySelf="start" fontSize="lg">
            Windows XP
          </Text>
        </SimpleGrid>

        <Spacer />
        <Heading size="md">Notes</Heading>
        <Text justifySelf="start" fontSize="lg">
          If someone could let me know why there exists a 3d Model of Duke
          driving a car, that would be great
        </Text>
        <Spacer />

        <Heading size="md">Credits</Heading>
        <Link
          href="http://cr.openjdk.java.net/~jeff/Duke/3d-preview/Duke.png"
          isExternal
        >
          Duke from OpenJDK Duke Project
        </Link>
        <Link href="https://github.com/openjdk/duke/tree/master/3D" isExternal>
          Duke Car Bottom Text from openjdk's Github
        </Link>
      </Article>
    </Layout>
  );
};
export default Project5;
