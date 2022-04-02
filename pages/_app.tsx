import { ChakraProvider } from "@chakra-ui/react";
import { AppProps } from "next/app";
import "../styles/global.css";
import theme from "../utils/theme";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}
