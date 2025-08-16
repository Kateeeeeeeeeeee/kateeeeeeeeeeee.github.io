import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import Sidebar from '@/components/Sidebar';
import { getPostsByTag, getAllTags } from '@/lib/posts';
import { notFound } from 'next/navigation';
import Link from 'next/link';

interface TagPageProps {
  params: Promise<{
    tag: string;
  }>;
}

export async function generateStaticParams() {
  const tags = getAllTags();
  return tags.map((tag) => ({
    tag: tag,
  }));
}

export default async function TagPage({ params }: TagPageProps) {
  const { tag } = await params;
  const posts = getPostsByTag(tag);
  const allTags = getAllTags();
  
  if (!allTags.includes(tag)) {
    notFound();
  }

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
              Tag: #{tag}
            </h1>
            <p className="text-gray-600 dark:text-gray-400">
              {posts.length}개의 포스트를 찾았습니다.
            </p>
          </div>
          
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                이 태그로 작성된 포스트가 없습니다.
              </p>
              <Link
                href="/blog"
                className="inline-block mt-4 text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
              >
                모든 포스트 보기
              </Link>
            </div>
          ) : (
            <div className="grid gap-8 md:grid-cols-2">
              {posts.map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
          )}
        </div>
        
        {/* Sidebar */}
        <Sidebar />
      </div>
    </Layout>
  );
}
