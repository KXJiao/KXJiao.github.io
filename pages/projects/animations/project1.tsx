import Head from "next/head";
import Layout from "../../../components/Layout/Layout";
import Date from "../../../components/Date/Date";
import utilStyles from "../../../styles/utils.module.css";
import userInfo from "../../../constants/info";
import { VStack, Image, OrderedList, ListItem } from "@chakra-ui/react";
import YouTube from "react-youtube";

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
        <h1 className={utilStyles.headingXl}>Project 1: Planet Animations</h1>
        <div className={utilStyles.lightText}>
          <Date dateString="2022-02-16" />
        </div>
        <h2 className={utilStyles.headingMd}>Planet Tutorial Animation:</h2>
        <YouTube videoId="w2u8ZWEfK-E" />
        <h2 className={utilStyles.headingMd}>Modified Animation Video:</h2>
        <YouTube videoId="w06QKSekLCk" />
        <h2 className={utilStyles.headingMd}>Changes Made</h2>
        <OrderedList spacing={5}>
          <ListItem>
            Textures were added to the sun, planets, and moons.
          </ListItem>
          <Image src="/images/Change1.PNG" />
          <ListItem>
            The orbits of the planets were "modified", along with the sun
            transforming into something else entirely.
          </ListItem>
          <Image src="/images/Change2.PNG" />
          <ListItem>
            The harbinger of the Metaverse arrives, spreading the Metaverse to
            all.
          </ListItem>
          <Image src="/images/Change3.PNG" />
        </OrderedList>
      </VStack>
    </Layout>
  );
};
export default Project1;
