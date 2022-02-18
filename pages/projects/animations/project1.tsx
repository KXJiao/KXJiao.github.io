import Head from "next/head";
import Layout from "../../../components/Layout/Layout";
import Date from "../../../components/Date/Date";
import utilStyles from "../../../styles/utils.module.css";
import userInfo from "../../../constants/info";
import {
  VStack,
  Image,
  OrderedList,
  ListItem,
  Link,
  AspectRatio,
} from "@chakra-ui/react";

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
        <AspectRatio minW="80vw" ratio={16 / 9}>
          <iframe src="https://www.youtube.com/embed/w2u8ZWEfK-E" />
        </AspectRatio>
        <h2 className={utilStyles.headingMd}>Modified Animation Video:</h2>
        <AspectRatio minW="80vw" ratio={16 / 9}>
          <iframe src="https://www.youtube.com/embed/w06QKSekLCk" />
        </AspectRatio>
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
        <h2 className={utilStyles.headingMd}>Credits</h2>
        <Link
          href="https://sketchfab.com/3d-models/mark-zuckerberg-deb8560956d947c8b6c3c41790532160"
          isExternal
        >
          EntropyNine from Sketchfab for the Mark Zuckerberg model.
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/sweet-baby-marks-baby-rays-76e7a8d096a24a3aa20424ada27d54bb"
          isExternal
        >
          pryor.w.k from Sketchfab for the Sweet Baby Ray's Barbecue Sauce
          model.
        </Link>
        <Link href="https://www.solarsystemscope.com/textures/" isExternal>
          solarsystemscope.com for the Solar System textures.
        </Link>
        <Link href="https://www.youtube.com/watch?v=pjNI9K1D_xo" isExternal>
          Mark Zuckerberg for his voice.
        </Link>
      </VStack>
    </Layout>
  );
};
export default Project1;
