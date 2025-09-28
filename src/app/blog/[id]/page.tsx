import { notFound } from 'next/navigation';
import Image from 'next/image';
import { blogs } from '../../../data/blogs';

export default async function BlogDetailPage({ params }: { params: { id: string } }) {
  const { id } = await params;
  const blog = blogs.find(b => String(b.id) === id);
  if (!blog) return notFound();


  return (
    <div className="bg-gray-50 dark:bg-[#1a1a1a] min-h-screen text-gray-800 dark:text-gray-200">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 max-w-3xl">
        <a href="/blog" className="text-[#ED6C35] hover:underline mb-8 block">&larr; Back to all articles</a>
        <header className="mb-8">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-900 dark:text-white mb-4">{blog.title}</h1>
          <div className="flex items-center gap-x-8 text-sm text-gray-600 dark:text-gray-300 mb-2">
            <span className="font-semibold text-gray-900 dark:text-white">{blog.author}</span>
            <span>{blog.publishDate}</span>
            <span>{blog.category}</span>
          </div>
        </header>
        
        <article className="prose dark:prose-invert prose-lg max-w-none">
          {blog.content}
        </article>
      </div>
    </div>
  );
}
