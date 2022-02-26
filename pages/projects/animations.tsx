import { SimpleGrid, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Card, { CardProps } from "../../components/Card/Card";
import Layout from "../../components/Layout/Layout";
import userInfo from "../../constants/info";

const Animations = () => {
  return (
    <Layout>
      <Head>
        <title>{userInfo.siteTitle} - Animations</title>
      </Head>
      <Stack
        spacing={10}
        justifyContent="center"
        px={["5vw", "10vw"]}
        my={["2", "2", "5", "5"]}
      >
        <SimpleGrid columns={{ sm: 1, md: 4 }} spacing={8}>
          {userInfo.animations.map((animation: CardProps) => (
            <Card
              key={animation.title}
              imageURL={animation.imageURL}
              title={animation.title}
              description={animation.description}
              githubLink={animation.githubLink}
              deployLink={animation.deployLink}
              tags={animation.tags}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Layout>
  );
};
export default Animations;
