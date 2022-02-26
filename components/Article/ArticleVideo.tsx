import { AspectRatio, LayoutProps } from "@chakra-ui/react";

type ArticleVideoProps = {
  size: LayoutProps["minW"];
  src: string;
};

const ArticleVideo = ({ src, size }: ArticleVideoProps) => {
  return (
    <AspectRatio minW={size} ratio={16 / 9}>
      <iframe src={src} />
    </AspectRatio>
  );
};

export default ArticleVideo;
