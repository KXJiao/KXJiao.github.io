import {
  Box,
  chakra,
  Image,
  Link,
  Stack,
  Tag,
  TagLabel,
  TagLeftIcon,
  useColorModeValue,
} from "@chakra-ui/react";
import { IconType } from "react-icons";
import {
  FaCode,
  FaDatabase,
  FaExternalLinkAlt,
  FaGithub,
  FaJs,
  FaPepperHot,
  FaPython,
  FaReact,
  FaSass,
} from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";

export type CardProps = {
  imageURL: string;
  title: string;
  description: string;
  githubLink: string;
  deployLink: string;
  tags: string[];
};

const Card = ({
  imageURL,
  title,
  description,
  githubLink,
  deployLink,
  tags,
}: CardProps) => {
  const getTag = (tag: string) => {
    let values: [color: string, icon: IconType] = ["", FaCode];
    if (tag == "React") {
      values[0] = "blue";
      values[1] = FaReact;
    } else if (tag == "Python") {
      values[0] = "orange";
      values[1] = FaPython;
    } else if (tag == "Javascript") {
      values[0] = "yellow";
      values[1] = FaJs;
    } else if (tag == "Sass") {
      values[0] = "pink";
      values[1] = FaSass;
    } else if (tag == "Flask") {
      values[0] = "green";
      values[1] = FaPepperHot;
    } else if (tag == "SQL") {
      values[0] = "blue";
      values[1] = FaDatabase;
    } else if (tag == "Next.js") {
      values[0] = "gray";
      values[1] = SiNextdotjs;
    } else {
      values[0] = "gray";
      values[1] = FaCode;
    }
    return values;
  };

  const Tags = tags.map((item) => (
    <Tag key={item} colorScheme={getTag(item)[0]} size={"md"}>
      <TagLeftIcon as={getTag(item)[1]}></TagLeftIcon>
      <TagLabel>{item}</TagLabel>
    </Tag>
  ));
  return (
    <Box
      mx="auto"
      rounded="lg"
      shadow="md"
      bg={useColorModeValue("white", "gray.800")}
      maxW="3xl"
    >
      <Image
        roundedTop="lg"
        w="full"
        h={64}
        fit="cover"
        src={imageURL}
        alt="Project image"
      />

      <Box p={6}>
        <Box>
          <Link
            display="block"
            color={useColorModeValue("gray.800", "white")}
            fontWeight="bold"
            fontSize="2xl"
            mt={2}
            href={deployLink}
            _hover={{ color: "gray.600", textDecor: "underline" }}
          >
            {title}
          </Link>
          <Stack isInline>{Tags}</Stack>
          <chakra.p
            mt={2}
            fontSize="sm"
            color={useColorModeValue("gray.600", "gray.400")}
          >
            {description}
          </chakra.p>
        </Box>
        <Stack
          isInline
          justifyContent="flex-end"
          alignItems="center"
          spacing={4}
        >
          {githubLink && (
            <Link href={githubLink} color="black" isExternal>
              <FaGithub aria-label="github" size={23} />
            </Link>
          )}
          {deployLink && (
            <Link href={deployLink} color="black" isExternal>
              <FaExternalLinkAlt aria-label="project link" size={20} />
            </Link>
          )}
        </Stack>
      </Box>
    </Box>
  );
};
export default Card;
