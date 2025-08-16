import Layout from '@/components/Layout';
import { getAllPosts, getPostData } from '@/lib/posts';
import { format } from 'date-fns';
import Link from 'next/link';
import { notFound } from 'next/navigation';

interface PostPageProps {
  params: Promise<{
    slug: string;
  }>;
}

// 정적 사이트 생성을 위해 dynamicParams 제거

// 정적 경로 생성 (선택적)
export async function generateStaticParams() {
  const posts = getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export default async function PostPage({ params }: PostPageProps) {
  const { slug } = await params;
  
  try {
    const post = getPostData(slug);
    
    return (
      <Layout>
        <article className="max-w-3xl mx-auto">
          {/* Post Header */}
          <header className="mb-8">
            <div className="flex items-center text-sm text-gray-500 dark:text-gray-400 mb-4">
              <time dateTime={post.date}>
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </time>
              <span className="mx-2">•</span>
              <span className="text-blue-600 dark:text-blue-400 font-medium">
                {post.category}
              </span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
              {post.title}
            </h1>
            
            <div className="flex flex-wrap gap-2 mb-6">
              {post.tags.map((tag) => (
                <Link
                  key={tag}
                  href={`/blog/tag/${tag}`}
                  className="inline-block px-3 py-1 text-sm text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </header>
          
          {/* Post Content */}
          <div 
            className="prose prose-lg max-w-none dark:prose-invert prose-headings:text-gray-900 dark:prose-headings:text-white prose-p:text-gray-700 dark:prose-p:text-gray-300 prose-a:text-blue-600 dark:prose-a:text-blue-400 prose-code:text-gray-800 dark:prose-code:text-gray-200 prose-pre:bg-gray-100 dark:prose-pre:bg-gray-800"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          {/* Back to Blog */}
          <div className="mt-12 pt-8 border-t border-gray-200 dark:border-gray-700">
            <Link
              href="/blog"
              className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
            >
              <svg className="mr-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
              Back to Blog
            </Link>
          </div>
        </article>
      </Layout>
    );
  } catch (error) {
    console.error('Post not found:', slug, error);
    notFound();
  }
}
