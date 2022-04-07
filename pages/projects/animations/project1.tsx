import { Heading, Image, Link, ListItem, OrderedList } from "@chakra-ui/react";
import Head from "next/head";
import Article from "../../../components/Article/Article";
import ArticleVideo from "../../../components/Article/ArticleVideo";
import Layout from "../../../components/Layout/Layout";
import userInfo from "../../../constants/info";

const Project1 = () => {
  return (
    <Layout>
      <Head>
        <title>{userInfo.siteTitle} - Animations: Project 1</title>
      </Head>
      <Article title="Project 1: Planet Animation" date="2022-02-17">
        <Heading size="md">Planet Tutorial Animation:</Heading>
        <ArticleVideo
          size="80vw"
          src="https://www.youtube.com/embed/w2u8ZWEfK-E"
        />
        <Heading size="md">Modified Animation Video:</Heading>
        <ArticleVideo
          size="80vw"
          src="https://www.youtube.com/embed/w06QKSekLCk"
        />
        <Heading size="md">Changes Made</Heading>
        <OrderedList spacing={5}>
          <ListItem>
            Textures were added to the sun, planets, and moons.
          </ListItem>
          <Image
            src="/images/animations/project1/Change1.PNG"
            alt="Planets textured"
          />
          <ListItem>
            The orbits of the planets were "modified", along with the sun
            transforming into something else entirely.
          </ListItem>
          <Image
            src="/images/animations/project1/Change2.PNG"
            alt="Planets with orbit shifted"
          />
          <ListItem>
            The harbinger of the Metaverse arrives, spreading the Metaverse to
            all.
          </ListItem>
          <Image
            src="/images/animations/project1/Change3.PNG"
            alt="Mark Zuckerberg from below"
          />
        </OrderedList>
        <Heading size="md">Credits</Heading>
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
      </Article>
    </Layout>
  );
};
export default Project1;
