import { AspectRatio } from "@chakra-ui/react";
import Head from "next/head";
import Layout from "../../components/Layout/Layout";
import userInfo from "../../constants/info";
import utilStyles from "../../styles/utils.module.css";

const Eagle = () => {
  return (
    <Layout>
      <Head>
        <title>{userInfo.siteTitle} - Eagle Livestream</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <AspectRatio minW="50vw" ratio={16 / 9}>
          <iframe
            src="//portal.hdontap.com/s/embed/?stream=dullesgreenway_eaglecam-CUST&ratio=16:9&fluid=true"
            frameBorder="0"
            allowFullScreen={true}
            allow="autoplay; fullscreen"
          />
        </AspectRatio>
      </section>
    </Layout>
  );
};
export default Eagle;
