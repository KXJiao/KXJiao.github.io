import Head from "next/head";
import Layout from "../components/Layout/Layout";
import utilStyles from "../styles/utils.module.css";
import userInfo from "../constants/info";

const Projects = () => {
  return (
    <Layout>
      <Head>
        <title>{userInfo.siteTitle} - Projects</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This page will have a list of projects.</p>
        <p>Each project will have a description and link.</p>
      </section>
    </Layout>
  );
};
export default Projects;
