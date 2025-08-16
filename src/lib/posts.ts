import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import remarkGfm from 'remark-gfm';

export interface Post {
  id: string;
  title: string;
  date: string;
  content: string;
  excerpt: string;
  tags: string[];
  category: string;
  slug: string;
}

const postsDirectory = path.join(process.cwd(), 'posts');

export function getAllPostIds() {
  const fileNames = getAllMarkdownFiles();
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ''),
      },
    };
  });
}

export function getAllMarkdownFiles(): string[] {
  const allFiles: string[] = [];
  
  function traverseDirectory(dir: string) {
    const items = fs.readdirSync(dir);
    for (const item of items) {
      const fullPath = path.join(dir, item);
      const stat = fs.statSync(fullPath);
      if (stat.isDirectory()) {
        traverseDirectory(fullPath);
      } else if (item.endsWith('.md')) {
        allFiles.push(fullPath.replace(postsDirectory + '/', '').replace(/\.md$/, ''));
      }
    }
  }
  
  traverseDirectory(postsDirectory);
  return allFiles;
}

export function getPostData(slug: string): Post {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = remark()
    .use(html)
    .use(remarkGfm)
    .processSync(matterResult.content)
    .toString();

  return {
    id: slug,
    slug: slug,
    content: processedContent,
    excerpt: matterResult.content.slice(0, 150) + '...',
    ...(matterResult.data as { title: string; date: string; tags: string[]; category: string }),
  };
}

export function getAllPosts(): Post[] {
  const fileNames = getAllMarkdownFiles();
  const allPostsData = fileNames.map((fileName) => {
    return getPostData(fileName);
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
}

export function getPostsByTag(tag: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.tags.includes(tag));
}

export function getPostsByCategory(category: string): Post[] {
  const allPosts = getAllPosts();
  return allPosts.filter(post => post.category === category);
}

export function getAllTags(): string[] {
  const allPosts = getAllPosts();
  const tags = new Set<string>();
  allPosts.forEach(post => {
    post.tags.forEach(tag => tags.add(tag));
  });
  return Array.from(tags).sort();
}

export function getAllCategories(): string[] {
  const allPosts = getAllPosts();
  const categories = new Set<string>();
  allPosts.forEach(post => {
    categories.add(post.category);
  });
  return Array.from(categories).sort();
}

// 카테고리 영문명을 한글명으로 매핑
export function getCategoryDisplayName(category: string): string {
  const categoryMap: { [key: string]: string } = {
    'development': '개발',
    'programming': '프로그래밍',
    'frontend': '프론트엔드',
    'diary': '일기'
  };
  
  return categoryMap[category] || category;
}
