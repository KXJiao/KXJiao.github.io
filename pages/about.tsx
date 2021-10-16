import Head from "next/head";
import Layout, { siteTitle } from "../components/Layout/Layout";
import utilStyles from "../styles/utils.module.css";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - About</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This page will have details about me.</p>
        <p>Will include background, resume, interests.</p>
      </section>
    </Layout>
  );
};
export default About;
