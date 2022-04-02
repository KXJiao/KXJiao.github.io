import { Link } from "@chakra-ui/react";
import Head from "next/head";
import NextLink from "next/link";
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
        <NextLink href={`/misc/eagle/`} passHref>
          <Link color="teal.500">For now, view this Eagle livestream.</Link>
        </NextLink>
      </section>
    </Layout>
  );
};
export default Misc;
