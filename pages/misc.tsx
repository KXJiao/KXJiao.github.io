import Head from "next/head";
import Layout from "../components/Layout/Layout";
import userInfo from "../constants/info";
import utilStyles from "../styles/utils.module.css";

const Misc = () => {
  return (
    <Layout>
      <Head>
        <title>{userInfo.siteTitle} - Miscellaneous</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Page is work in progress!</p>
        <p>This page will contain miscellaneous items.</p>
        <p>Will have interesting links, programs, and other misc items.</p>
      </section>
    </Layout>
  );
};
export default Misc;
