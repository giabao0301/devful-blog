import { MetadataRoute } from 'next'
import { allBlogs } from "../../.contentlayer/generated";
import { slug } from "github-slugger";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const categories = Array.from(new Set(allBlogs.flatMap((blog) => blog.tags)));
    const blogs = allBlogs.map((blog) => blog._raw.flattenedPath);
    
    return [
        {
            url: 'https://devful-blog.vercel.app',
            lastModified: new Date(),
            priority: 1,
        },
        {
            url: 'https://devful-blog.vercel.app/about',
            lastModified: new Date(),
            priority: 0.8,
        },
        {
            url: 'https://devful-blog.vercel.app/contact',
            lastModified: new Date(),
            priority: 0.8,
        },
        ...categories.map((category) => ({
            url: 'https://devful-blog.vercel.app/categories/' + slug(category),
            lastModified: new Date(),
            priority: 0.7,
        })),
        ...blogs.map((blog) => ({
            url: 'https://devful-blog.vercel.app/blogs/' + blog,
            lastModified: new Date(),
            priority: 0.9,
        })),
    ]
}
