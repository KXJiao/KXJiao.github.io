import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import {
  Box,
  chakra,
  Flex,
  HStack,
  IconButton,
  Link,
  Stack,
  useColorModeValue,
  useDisclosure,
  VisuallyHidden,
} from "@chakra-ui/react";
import NextLink from "next/link";
import userInfo from "../../constants/info";
import ChickenIcon from "../ChickenIcon/ChickenIcon";
import NavbarLink from "../NavbarLink/NavbarLink";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex alignItems="center" justifyContent="space-between" mx="auto">
          {!isOpen ? (
            <Flex>
              <NextLink href="/" passHref>
                <Link title="Home Page" display="flex" alignItems="center">
                  <ChickenIcon />
                  <VisuallyHidden>KJ</VisuallyHidden>
                </Link>
              </NextLink>
              <chakra.h1 fontSize="xl" fontWeight="medium" ml="2">
                Kevin Jiao
              </chakra.h1>
            </Flex>
          ) : null}
          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            />
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
              >
                {userInfo.siteLinks.map((link) => (
                  <NavbarLink key={link} link={link}></NavbarLink>
                ))}
              </HStack>
            </HStack>
          </Flex>
        </Flex>
        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {userInfo.siteLinks.map((link) => (
                <NavbarLink key={link} link={link}></NavbarLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
};

export default Navbar;
