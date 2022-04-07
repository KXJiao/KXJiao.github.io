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
          src="https://www.youtube.com/embed/qpvadiKYSHo"
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
            A ceiling fan begins spinning, setting the "machine" in motion
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
            A yellow ball spins a few times on the fan, then falls into a bowl.
          </Text>
        </SimpleGrid>

        <Heading size="sm">Bowl</Heading>
        <SimpleGrid justifyItems="center" columns={2} spacing={5}>
          <Image h={64} src="/images/animations/project4/bowl.png" alt="Bowl" />
          <Text justifySelf="start" fontSize="lg">
            A bowl is catches the ball and redirects the ball's bounce to the
            vases.
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
            The ball strikes the vases, which fall down one by one in a domino
            effect.
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
            The last vase hits a bowling ball, which falls off the shelf.
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
            The bowling ball strikes a plank attached to a hinge. (Note: an
            issue with collision between the bowling ball and the plank will be
            fixed.)
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
            The plank knocks over the cake box, revealing a cake under the box.
          </Text>
        </SimpleGrid>

        <Spacer />
        <Heading size="md">Notes</Heading>
        <Text justifySelf="start" fontSize="lg">
          I was inspired by a Rube Goldberg machine from the game Ghost Trick:
          Phantom Detective. I had to take some creative liberties because the
          2D physics was difficult to translate to Maya FX. Regretablly, I had
          to cut the animation short because some items were not playing nicely
          with each other, but I will be releasing a complete version soon, and
          hopefully rendered with Arnold if my laptop can handle it (which
          history says it may not...).
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
        <Link
          href="https://apps.apple.com/us/app/ghost-trick-phantom-detective/id489113377"
          isExternal
        >
          Song is 4 Minutes Before Death, from GHOST TRICK: Phantom Detective by
          CAPCOM
        </Link>
        <Link
          href="https://apps.apple.com/us/app/ghost-trick-phantom-detective/id489113377"
          isExternal
        >
          Song is 4 Minutes Before Death, from GHOST TRICK: Phantom Detective by
          CAPCOM
        </Link>
      </Article>
    </Layout>
  );
};
export default Project4;
