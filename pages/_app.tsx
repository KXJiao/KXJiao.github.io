import "../styles/global.css";
import { AppProps } from "next/app";
import { ChakraProvider } from "@chakra-ui/react";

export default function App({ Component, pageProps }: AppProps) {
  console.info("Chicken emoji from Twemoji: https://twemoji.twitter.com/");
  return (
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
