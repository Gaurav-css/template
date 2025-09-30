// src/app/sitemap.ts
import { MetadataRoute } from 'next';

// A function to get all your blog posts (replace with your actual data fetching)
async function getAllBlogPosts() {
    return [
        { slug: 'first-post', updatedAt: '2025-09-29T10:00:00.000Z' },
        { slug: 'second-post', updatedAt: '2025-09-28T12:00:00.000Z' },
    ];
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://www.hoomanpets.com/'; // Replace with your domain

    // Get all blog posts
    const posts = await getAllBlogPosts();

    const blogPostUrls = posts.map(post => ({
        url: `${baseUrl}/blog/${post.slug}`,
        lastModified: new Date(post.updatedAt),
        changeFrequency: 'monthly' as const,
        priority: 0.8,
    }));

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/About`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/Contact-Us`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
        // Add other static pages here...
        ...blogPostUrls, // Add all dynamic blog URLs
    ];
}