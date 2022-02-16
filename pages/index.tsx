import Head from "next/head";
import Layout from "../components/Layout/Layout";
import utilStyles from "../styles/utils.module.css";
import { getSortedPostsData } from "../lib/posts";
import {
  Button,
  Flex,
  Heading,
  Image,
  Link,
  Stack,
  Text,
} from "@chakra-ui/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import userInfo from "../constants/info";

interface HomeProps {
  allPostsData: {
    date: string;
    title: string;
    id: string;
  }[];
}

const Home = ({ allPostsData }: HomeProps) => {
  return (
    <Layout home>
      <Head>
        <title>{userInfo.siteTitle}</title>
      </Head>
      <Flex
        p={8}
        flex={1}
        align={"center"}
        gap={10}
        direction={{ base: `column`, lg: `row` }}
        mx="auto"
      >
        <Image
          src={require("../public/images/profile.jpg")}
          className={utilStyles.borderCircle}
          height={144}
          width={144}
          alt={userInfo.name}
        />
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text as={"span"} position={"relative"}>
              Hi! I'm
            </Text>
            <br />{" "}
            <Text color={"blue.400"} as={"span"}>
              Kevin Jiao
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            This will be my future portfolio site! Currently work in progress...
          </Text>
          <Stack isInline spacing={4}>
            <Link href={userInfo.socialLinks.github} isExternal>
              <Button
                leftIcon={<FaGithub color="#4299E1" />}
                position="static"
                color="black"
              >
                Github
              </Button>
            </Link>
            <Link href={userInfo.socialLinks.linkedin} isExternal>
              <Button
                leftIcon={<FaLinkedin color="#4299E1" />}
                position="static"
                color="black"
              >
                LinkedIn
              </Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </Layout>
  );
};

export default Home;

export const getStaticProps = async () => {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
};
