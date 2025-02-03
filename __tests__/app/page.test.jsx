import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react';
import Index from '@/app/page'

const stories = [
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

const homePage = [
    {
        title: 'Test Blog Page'
    }
]
  
jest.mock('@/lib/api', () => ({
    getAllPosts: jest.fn(() => stories),
    fetchCrudCollection: jest.fn(() => homePage),
}));

describe('Page', () => {
    it('renders a heading', async () => {
       const jsx = await Index()
        render(jsx);

        const testHomePageHeading = screen.getByRole('heading', { level: 1, name: new RegExp(`${homePage[0].title}.`, 'i')});
        expect(testHomePageHeading).toBeInTheDocument();

        const testStoryHeading = screen.getByRole('heading', { level: 3, name: new RegExp(stories[0].title, 'i')});
        expect(testStoryHeading).toBeInTheDocument();
    });
});