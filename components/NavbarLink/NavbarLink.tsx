import NextLink from "next/link";
import { Link, useColorModeValue } from "@chakra-ui/react";

interface NavbarLinkProps {
  link: string;
}

const NavbarLink = ({ link }: NavbarLinkProps) => {
  return (
    <NextLink href={`/${link.toLowerCase()}/`}>
      <Link
        px={2}
        py={1}
        rounded={"md"}
        _hover={{
          textDecoration: "none",
          bg: useColorModeValue("gray.200", "gray.700"),
        }}
      >
        {link}
      </Link>
    </NextLink>
  );
};

export default NavbarLink;