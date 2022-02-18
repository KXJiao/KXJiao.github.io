import { Flex } from "@chakra-ui/react";
import Head from "next/head";
import userInfo from "../../constants/info";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

interface LayoutProps {
  children: React.ReactNode;
  home?: boolean;
}

const Layout = ({ children, home }: LayoutProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <meta name="description" content="Kevin Jiao Personal Site" />
        <meta property="og:image" content={userInfo.metaPic} />
        <meta name="og:title" content={userInfo.siteTitle} />
        <meta name="twitter:card" content="summary_large_image" />
      </Head>
      <Flex minH={"100vh"} direction="column">
        <Navbar />
        <Flex flex={1} direction={"column"} as={"main"}>
          {children}
        </Flex>
        <Footer />
      </Flex>
    </>
  );
};

export default Layout;
