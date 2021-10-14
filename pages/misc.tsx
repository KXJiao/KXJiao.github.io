import Head from "next/head";
import Layout, { siteTitle } from "../components/layout";
import utilStyles from "../styles/utils.module.css";

const Misc = () => {
  return (
    <Layout>
      <Head>
        <title>{siteTitle} - Miscellaneous</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>This page will contain miscellaneous items.</p>
        <p>Will have interesting links, programs, and other misc items.</p>
      </section>
    </Layout>
  );
};
export default Misc;
