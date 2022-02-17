import Head from "next/head";
import Layout from "../../../components/Layout/Layout";
import Date from "../../../components/Date/Date";
import utilStyles from "../../../styles/utils.module.css";
import userInfo from "../../../constants/info";
import { VStack, AspectRatio } from "@chakra-ui/react";

const Project1 = () => {
  return (
    <Layout>
      <Head>
        <title>{userInfo.siteTitle} - Animations: Project1</title>
      </Head>
      <VStack
        as={"article"}
        spacing={5}
        justifyContent="center"
        px={["5vw", "10vw"]}
        my={["2", "2", "5", "5"]}
      >
        <h1 className={utilStyles.headingXl}>Project 1: Solar Systems</h1>
        <div className={utilStyles.lightText}>
          <Date dateString="2022-02-16" />
        </div>
        <div>Help me</div>
        <AspectRatio maxW="560px" ratio={16 / 9}>
          <iframe
            title="Solar System Tutorial"
            src="https://www.youtube.com/embed/w2u8ZWEfK-E"
            allowFullScreen
          />
        </AspectRatio>
        <AspectRatio maxW="560px" ratio={16 / 9}>
          <iframe
            title="Solar System Modified"
            src="https://www.youtube.com/embed/w06QKSekLCk"
            allowFullScreen
          />
        </AspectRatio>
      </VStack>
    </Layout>
  );
};
export default Project1;
