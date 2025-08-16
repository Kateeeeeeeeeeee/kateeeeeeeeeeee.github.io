import Link from 'next/link';
import { getAllTags, getAllCategories } from '@/lib/posts';

export default function Sidebar() {
  const tags = getAllTags();
  const categories = getAllCategories();

  return (
    <aside className="w-full lg:w-80 space-y-8">
      {/* Categories */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Categories
        </h3>
        <div className="space-y-2">
          {categories.map((category) => (
            <Link
              key={category}
              href={`/blog/category/${category}`}
              className="block text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
            >
              {category}
            </Link>
          ))}
        </div>
      </div>

      {/* Tags */}
      <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
        <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
          Tags
        </h3>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <Link
              key={tag}
              href={`/blog/tag/${tag}`}
              className="inline-block px-3 py-1 text-sm text-blue-600 dark:text-blue-400 bg-blue-100 dark:bg-blue-900/30 rounded-full hover:bg-blue-200 dark:hover:bg-blue-900/50 transition-colors"
            >
              #{tag}
            </Link>
          ))}
        </div>
      </div>
    </aside>
  );
}
