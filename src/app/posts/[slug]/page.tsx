import { Metadata } from "next";
import { notFound } from "next/navigation";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { CMS_NAME } from "@/lib/constants";
import markdownToHtml from "@/lib/markdownToHtml";
import Container from "@/app/_components/container";
import Header from "@/app/_components/header";
import { PostBody } from "@/app/_components/post-body";
import { PostHeader } from "@/app/_components/post-header";
import getConfig from "next/config";


  const {serverRuntimeConfig} = getConfig()

  const host = `${serverRuntimeConfig?.WEBSITE_BASE_PATH}`

export default async function Post(props: Params) {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);



  if (!post) {
    return notFound();
  }

  const content = await markdownToHtml(post.content || "");

  return (
    <main>
      <Container>
        <Header />
        <article className="mb-32">
          <PostHeader
            title={post.title}
            coverImage={post.coverImage.location}
            date={post.date}
            author={post.author}
          />
          <PostBody content={content} />
        </article>
      </Container>
    </main>
  );
}

type Params = {
  params: Promise<{
    slug: string;
  }>;
};

export async function generateMetadata(props: Params): Promise<Metadata> {
  const params = await props.params;
  const post = await getPostBySlug(params.slug);

  if (!post) {
    return notFound();
  }


  const title = `${post.title} | Next.js Blog Example with ${CMS_NAME}`;
  const images = `${host}${post.ogImage.location}`

  return {
    title,
    openGraph: {
      title,
      images,
    },
  };
}

// export async function generateStaticParams() {
//   const posts = await getAllPosts();

//   return posts?.map((post: any) => ({
//     slug: post.slug,
//   }));
// }
