import { Post } from "@/interfaces/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

import getConfig from "next/config";
import { Author } from "@/interfaces/author";

const postsDirectory = join(process.cwd(), "_posts");

const {serverRuntimeConfig} = getConfig()

export const fetchCrudCollection = async ({endpoint, query = ''} : {endpoint: string, query?: string}) => {
  console.log(serverRuntimeConfig?.CRUD_PATH)
    try {
        const data = await fetch(`${serverRuntimeConfig?.CRUD_PATH}/${endpoint}?${query}`, { 
            next: { revalidate: 60 },
            headers: {
                'Cache-Control': 'public, max-age=3600',
            }
        })
        return data.json()
    } catch (error) {
        console.error("Error:", error);
    }

}

export function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

export async function getPostBySlug(slug: string) {
  const postSlug = await fetchCrudCollection({
    endpoint: 'stories',
    query: `slug=${slug}`
  })

  console.log('POST SLUG', postSlug)

  const authors = await fetchCrudCollection({endpoint: 'authors', query: `_id=${postSlug[0].authorId}`})

  const postSlugWithAuthor = creatPosts(postSlug, authors)

  console.log('GET post by SLUG',slug,  postSlugWithAuthor)

  return postSlugWithAuthor[0]
  // const realSlug = slug.replace(/\.md$/, "");
  // const fullPath = join(postsDirectory, `${realSlug}.md`);
  // const fileContents = fs.readFileSync(fullPath, "utf8");
  // const { data, content } = matter(fileContents);

  // return { ...data, slug: realSlug, content } as Post;
}

export async function getAllPosts() {
  // const slugs = getPostSlugs();
  // const posts = slugs
  //   .map((slug) => getPostBySlug(slug))
  //   // sort posts by date in descending order
  //   .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  // return posts;
  const posts = await fetchCrudCollection({endpoint: 'stories'})
  const authors = await fetchCrudCollection({endpoint: 'authors'})

  console.log('GET Authors',authors )
  if(posts) {
    const postsWithAuthors = creatPosts(posts, authors)
    console.log('GET all POSTS', posts)
    return postsWithAuthors;
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