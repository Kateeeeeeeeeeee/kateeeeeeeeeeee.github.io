import Link from 'next/link';
import { format } from 'date-fns';
import { Post } from '@/lib/posts';

interface PostCardProps {
  post: Post;
}

export default function PostCard({ post }: PostCardProps) {
  return (
    <article className="bg-white dark:bg-gray-800 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden">
      <div className="p-6">
        <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-2">
          <time dateTime={post.date}>
            {format(new Date(post.date), 'MMMM dd, yyyy')}
          </time>
          <span className="mx-2">•</span>
          <span className="text-blue-600 dark:text-blue-400 font-medium">
            {post.category}
          </span>
        </div>
        
        <Link href={`/blog/${post.slug}`}>
          <h2 className="text-xl font-bold text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors mb-3">
            {post.title}
          </h2>
        </Link>
        
        <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
          {post.excerpt}
        </p>
        
        <div className="flex flex-wrap gap-2 mb-4">
          {post.tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="inline-block px-3 py-1 text-xs font-medium text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
        
        <Link
          href={`/blog/${post.slug}`}
          className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
        >
          Read more
          <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </article>
  );
}
