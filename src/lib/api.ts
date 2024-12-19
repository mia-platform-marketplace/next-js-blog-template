import { Post } from "@/interfaces/post";
import getConfig from "next/config";
import { Author } from "@/interfaces/author";

const {serverRuntimeConfig} = getConfig()

export const fetchCrudCollection = async ({endpoint, query = ''} : {endpoint: string, query?: string}) => {
    try {
        const data = await fetch(`${serverRuntimeConfig?.CRUD_PATH}/${endpoint}?${query}`, { 
            next: { revalidate: 5 },
            headers: {
                'Cache-Control': 'public, max-age=3600',
            }
        })
        return data.json()
    } catch (error) {
        console.error("Error:", error);
    }

}

export async function getPostBySlug(slug: string) {
  const postSlug = await fetchCrudCollection({
    endpoint: 'stories',
    query: `slug=${slug}`
  })


  const authors = await fetchCrudCollection({endpoint: 'authors', query: `_id=${postSlug[0].authorId}`})

  const postSlugWithAuthor = creatPosts(postSlug, authors)

  return postSlugWithAuthor[0]
}

export async function getAllPosts() {
  const posts = await fetchCrudCollection({endpoint: 'stories', query: '_s=date'})
  const authors = await fetchCrudCollection({endpoint: 'authors'})

  if(posts) {
    const postsWithAuthors = creatPosts(posts, authors)
    const sortedPosts = postsWithAuthors.sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
    return sortedPosts;
  }
  return []
}


const creatPosts = (posts: Post[], authors: Author[]) => {
  return posts?.map((post) => {
    const author = authors.find((auth) => auth._id === post.authorId);

    return {
      ...post,
      author: author || undefined
    };
  });

}