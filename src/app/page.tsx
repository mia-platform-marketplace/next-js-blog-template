import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { fetchCrudCollection, getAllPosts } from "@/lib/api";
import getConfig from "next/config";

const storiess = [
  {
    _id: '67605afb56f673dc5f6c1187',
    title: 'Test Story',
    author: {
      _id: 'authId',
      firstName: 'JJ',
      lastName: 'Kasper',
      picture: "/assets/blog/authors/jj.jpeg",
      coverImage: {
        _id: '67605afb56f673dc5f6c1186',
      name: 'Platmosphere_2024_Info.png',
      file: '67605afb3b342cf04173d283.png',
      size: 239204,
      location: '/files-service/download/67605afb3b342cf04173d283.png'
      }
    },
    content: "Tristique senectus et netus et malesuada fames ac turpis. Ridiculous mus mauris vitae ultricies leo integer malesuada nunc vel. In mollis nunc sed id semper. Egestas tellus rutrum tellus pellentesque. Phasellus vestibulum lorem sed risus ultricies tristique nulla. Quis blandit turpis cursus in hac habitasse platea dictumst quisque. Eros donec ac odio tempor orci dapibus ultrices. Aliquam sem et tortor consequat id porta nibh. Adipiscing elit duis tristique sollicitudin nibh sit amet commodo nulla. Diam vulputate ut pharetra sit amet. Ut tellus elementum sagittis vitae et leo. Arcu non odio euismod lacinia at quis risus sed vulputate.",
    excerpt: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Praesent elementum facilisis leo vel fringilla est ullamcorper eget. At imperdiet dui accumsan sit amet nulla facilities morbi tempus.",
    date: '2024-09-12T14:49:12.759Z',
    coverImage: {
      _id: '67605afb56f673dc5f6c1186',
      name: 'Platmosphere_2024_Info.png',
      file: '67605afb3b342cf04173d283.png',
      size: 239204,
      location: '/files-service/download/67605afb3b342cf04173d283.png'
    },
    __STATE__: 'PUBLIC',
    creatorId: 'public',
    updaterId: 'public',
    updatedAt: '2024-12-17T09:33:43.325Z',
    createdAt: '2024-12-16T16:53:15.838Z',
    authorId: '675c5d19f3d4cfb21816be98',
    slug: 'test-cms'
  }
]

const Index = async () => {
  const allPosts = await getAllPosts();

  console.log('GET all posts', allPosts)

  // const heroPost = allPosts[0];

  // const morePosts = allPosts.slice(1);

  const {serverRuntimeConfig} = getConfig()

  const host = `${serverRuntimeConfig?.WEBSITE_BASE_PATH}`

  const heroPost = allPosts[0]

  return (
    <main>
      <Container>
        <Intro />
        { heroPost ? 
          <HeroPost
            title={heroPost.title}
            coverImage={`${host}${heroPost.coverImage.location}`}
            date={heroPost.date}
            author={heroPost.author?? undefined}
            slug={heroPost.slug}
            excerpt={heroPost.excerpt}
          />
          /* {morePosts.length > 0 && <MoreStories posts={morePosts} />} */ :
          null
        }
      </Container>
    </main>
  );
}

export default Index