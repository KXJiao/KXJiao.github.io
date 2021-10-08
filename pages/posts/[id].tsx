import Layout from "../../components/layout";
import Date from "../../components/date";
import { getAllPostIds, getPostData } from "../../lib/posts";
import Head from "next/head";
import utilStyles from "../../styles/utils.module.css";

interface PostProps {
  postData: {
    title: string;
    date: string;
    contentHtml: string;
  };
}

const Post = ({ postData }: PostProps) => {
  return (
    <Layout>
      <Head>{postData.title}</Head>
      <article>
        <h1 className={utilStyles.headingXl}>{postData.title}</h1>
        <div className={utilStyles.lightText}>
          <Date dateString={postData.date} />
        </div>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>
    </Layout>
  );
};
export default Post;

export const getStaticProps = async ({
  params,
}: {
  params: { id: string };
}) => {
  const postData = await getPostData(params.id);
  return {
    props: {
      postData,
    },
  };
};

export async function getStaticPaths() {
  const paths = getAllPostIds();
  return {
    paths,
    fallback: false,
  };
}
