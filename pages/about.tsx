import Head from "next/head";
import Layout from "../components/Layout/Layout";
import userInfo from "../constants/info";
import utilStyles from "../styles/utils.module.css";

const About = () => {
  return (
    <Layout>
      <Head>
        <title>{userInfo.siteTitle} - About</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Page is work in progress!</p>
        <p>This page will have details about me.</p>
        <p>Will include background, resume, interests.</p>
      </section>
    </Layout>
  );
};
export default About;
