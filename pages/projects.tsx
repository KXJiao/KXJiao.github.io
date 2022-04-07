import { SimpleGrid, Stack } from "@chakra-ui/react";
import Head from "next/head";
import Card, { CardProps } from "../components/Card/Card";
import Layout from "../components/Layout/Layout";
import userInfo from "../constants/info";

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>{userInfo.siteTitle} - Projects</title>
      </Head>
      <Stack
        spacing={10}
        justifyContent="center"
        px={["5vw", "10vw"]}
        my={["2", "2", "5", "5"]}
      >
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 3 }} spacing={8}>
          {userInfo.projects.map((project: CardProps) => (
            <Card
              key={project.title}
              imageURL={project.imageURL}
              title={project.title}
              description={project.description}
              githubLink={project.githubLink}
              deployLink={project.deployLink}
              tags={project.tags}
              external={project.external}
            />
          ))}
        </SimpleGrid>
      </Stack>
    </Layout>
  );
};
export default Projects;
