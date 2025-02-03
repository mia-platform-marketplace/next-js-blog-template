import { type Author } from "./author";

export type Post = {
  slug: string;
  title: string;
  date: string;
  coverImage: {
    location: string
  };
  authorId: string;
  excerpt: string;
  ogImage: {
    location: string;
  };
  content: string;
  preview?: boolean;
  author?: Author
};
