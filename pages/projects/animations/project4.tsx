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

const Project4 = () => {
  return (
    <Layout>
      <Head>
        <title>{userInfo.siteTitle} - Animations: Project 4</title>
      </Head>
      <Article title="Project 4: Rube Goldberg Machine" date="2022-04-07">
        <Heading size="md">Final Animation:</Heading>
        <ArticleVideo
          size="80vw"
          src="https://www.youtube.com/embed/rL8MNM544lE"
        />

        <Spacer />
        <Heading size="md">Storyboard</Heading>
        <Image
          h={800}
          src="/images/animations/project4/storyboard.png"
          alt="Rube Goldberg animation storyboard"
        />

        <Spacer />

        <Heading size="md">Objects</Heading>
        <Heading size="sm">Ceiling Fan</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project4/fan.png"
            alt="Ceiling Fan"
          />
          <Text justifySelf="start" fontSize="lg">
            Used on several occasions with the ball bird, most notably when it
            bounces at the end of the animation.
          </Text>
        </SimpleGrid>

        <Heading size="sm">Yellow Ball</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project4/yball.png"
            alt="Yellow Ball"
          />
          <Text justifySelf="start" fontSize="lg">
            Used on several occasions with the ball bird, most notably when it
            bounces at the end of the animation.
          </Text>
        </SimpleGrid>

        <Heading size="sm">Bowl</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image h={64} src="/images/animations/project4/bowl.png" alt="Bowl" />
          <Text justifySelf="start" fontSize="lg">
            Used on several occasions with the ball bird, most notably when it
            bounces at the end of the animation.
          </Text>
        </SimpleGrid>

        <Heading size="sm">Vases</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project4/vases.png"
            alt="Vases"
          />
          <Text justifySelf="start" fontSize="lg">
            Used on several occasions with the ball bird, most notably when it
            bounces at the end of the animation.
          </Text>
        </SimpleGrid>

        <Heading size="sm">Bowling Ball</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project4/bball.png"
            alt="Bowling Ball"
          />
          <Text justifySelf="start" fontSize="lg">
            Used on several occasions with the ball bird, most notably when it
            bounces at the end of the animation.
          </Text>
        </SimpleGrid>

        <Heading size="sm">Plank</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project4/plank.png"
            alt="Plank"
          />
          <Text justifySelf="start" fontSize="lg">
            Used on several occasions with the ball bird, most notably when it
            bounces at the end of the animation.
          </Text>
        </SimpleGrid>

        <Heading size="sm">Cake Box</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image
            h={64}
            src="/images/animations/project4/box.png"
            alt="Cake Box"
          />
          <Text justifySelf="start" fontSize="lg">
            Used on several occasions with the ball bird, most notably when it
            bounces at the end of the animation.
          </Text>
        </SimpleGrid>

        <Spacer />
        <Heading size="md">Challenges</Heading>
        <Text justifySelf="start" fontSize="lg">
          text
        </Text>
        <Spacer />

        <Heading size="md">Credits</Heading>
        <Link
          href="https://sketchfab.com/3d-models/ceiling-fan-ec2c6087d4824211abc827f2a4c2b578"
          isExternal
        >
          Ceiling Fan from Sketchfab, by MozillaHubs
        </Link>
        <Link
          href="https://sketchfab.com/3d-models/3december-2020-frosted-chocolate-cake-18a7bc41962748aab88ace9c70b90c31"
          isExternal
        >
          Chocolate Cake from Sketchfab, by Jack Kelly
        </Link>
      </Article>
    </Layout>
  );
};
export default Project4;
