import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { fetchCrudCollection, getAllPosts } from "@/lib/api";
import getConfig from "next/config";

const Index = async () => {
  const allPosts = await getAllPosts();
  const homePage = await fetchCrudCollection({endpoint: 'blog-config'})

  const {serverRuntimeConfig} = getConfig()

  const host = `${serverRuntimeConfig?.WEBSITE_BASE_PATH}`

  const heroPost = allPosts[0]
  const morePosts = allPosts.slice(1);
  return (
    <main>
      <Container>
        {allPosts.length? 
        <>
          <Intro title={homePage? homePage[0]?.title : undefined} />
          <HeroPost
            title={heroPost.title}
            coverImage={`${host}${heroPost.coverImage.location}`}
            date={heroPost.date}
            author={heroPost.author}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
          { morePosts.length > 0 && <MoreStories posts={morePosts} />}
          </>
          : null
        }
      </Container>
    </main>
  );
}

export default Index