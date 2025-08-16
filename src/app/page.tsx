import Layout from '@/components/Layout';
import PostCard from '@/components/PostCard';
import { getAllPosts } from '@/lib/posts';
import Link from 'next/link';

export default function Home() {
  const posts = getAllPosts().slice(0, 6); // 최신 6개 포스트만 표시

  return (
    <Layout>
      {/* Hero Section */}
      <section className="text-center py-16 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg text-white mb-12">
        <div className="flex justify-center mb-8">
          <img 
            src="/blog-icon.png" 
            alt="SamBlog Icon" 
            className="w-24 h-24 md:w-32 md:h-32 drop-shadow-lg animate-bounce"
            style={{ animationDuration: '3s' }}
          />
        </div>
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Welcome to SamBlog
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-blue-100">
          기술과 생각을 나누는 공간
        </p>
        <Link
          href="/blog"
          className="inline-block bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors"
        >
          블로그 보기
        </Link>
      </section>

      {/* Latest Posts */}
      <section className="mb-12">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            최신 포스트
          </h2>
          <Link
            href="/blog"
            className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 font-medium transition-colors"
          >
            모든 포스트 보기 →
          </Link>
        </div>
        
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <PostCard key={post.id} post={post} />
          ))}
        </div>
      </section>

      {/* About Preview */}
      <section className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8">
        <div className="flex items-center mb-6">
          <img 
            src="/blog-icon.png" 
            alt="SamBlog Icon" 
            className="w-12 h-12 mr-4"
          />
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
            About Me
          </h2>
        </div>
        <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
          안녕하세요! 저는 기술과 개발에 대한 이야기를 나누는 블로거입니다. 
          새로운 기술을 배우고, 프로젝트를 진행하며, 그 과정에서 얻은 경험과 
          생각들을 이곳에 기록합니다.
        </p>
        <Link
          href="/about"
          className="inline-block bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
        >
          더 알아보기
        </Link>
      </section>
    </Layout>
  );
}
