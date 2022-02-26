import { Heading, Text, VStack } from "@chakra-ui/react";
import Date from "../../components/Date/Date";

type ArticleProps = {
  title: string;
  date: string;
  children: React.ReactNode;
};

const Article = ({ title, date, children }: ArticleProps) => {
  return (
    <VStack
      as={"article"}
      spacing={5}
      justifyContent="center"
      px={["5vw", "10vw"]}
      my={["2", "2", "5", "5"]}
    >
      <Heading>{title}</Heading>
      <Text color={"gray.500"}>
        <Date dateString={date} />
      </Text>
      {children}
    </VStack>
  );
};

export default Article;
