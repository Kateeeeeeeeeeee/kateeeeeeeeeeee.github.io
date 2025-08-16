import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import Sidebar from '@/components/Sidebar';
import { getAllPosts } from '@/lib/posts';

export default function BlogPage() {
  const posts = getAllPosts();

  return (
    <Layout>
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="flex-1">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
            Blog Posts
          </h1>
          
          {posts.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-600 dark:text-gray-400 text-lg">
                아직 작성된 포스트가 없습니다.
              </p>
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
