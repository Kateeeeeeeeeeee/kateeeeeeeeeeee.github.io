import Layout from '@/components/Layout';

export default function AboutPage() {
  return (
    <Layout>
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-8">
          About Me
        </h1>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mb-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            안녕하세요! 👋
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            저는 기술과 개발에 대한 이야기를 나누는 블로거입니다. 
            새로운 기술을 배우고, 프로젝트를 진행하며, 그 과정에서 얻은 경험과 
            생각들을 이곳에 기록합니다.
          </p>
          <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg leading-relaxed">
            웹 개발, 모바일 앱 개발, 그리고 최신 기술 트렌드에 관심이 많으며, 
            배운 내용을 공유하고 다른 개발자들과 소통하는 것을 좋아합니다.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {/* Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              기술 스택
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                <span className="text-gray-600 dark:text-gray-300">React & Next.js</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                <span className="text-gray-600 dark:text-gray-300">TypeScript</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                <span className="text-gray-600 dark:text-gray-300">Node.js</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                <span className="text-gray-600 dark:text-gray-300">Python</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                <span className="text-gray-600 dark:text-gray-300">Docker</span>
              </div>
            </div>
          </div>
          
          {/* Interests */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
              관심 분야
            </h3>
            <div className="space-y-2">
              <div className="flex items-center">
                <span className="w-3 h-3 bg-blue-500 rounded-full mr-3"></span>
                <span className="text-gray-600 dark:text-gray-300">웹 개발</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-green-500 rounded-full mr-3"></span>
                <span className="text-gray-600 dark:text-gray-300">모바일 앱 개발</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-yellow-500 rounded-full mr-3"></span>
                <span className="text-gray-600 dark:text-gray-300">AI/ML</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-purple-500 rounded-full mr-3"></span>
                <span className="text-gray-600 dark:text-gray-300">클라우드 기술</span>
              </div>
              <div className="flex items-center">
                <span className="w-3 h-3 bg-red-500 rounded-full mr-3"></span>
                <span className="text-gray-600 dark:text-gray-300">오픈소스</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-8 mt-8">
          <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
            연락처
          </h3>
          <p className="text-gray-600 dark:text-gray-300 mb-4">
            궁금한 점이나 의견이 있으시면 언제든지 연락해 주세요!
          </p>
          <div className="flex space-x-4">
            <a
              href="mailto:contact@example.com"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              📧 Email
            </a>
            <a
              href="https://github.com/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              🐙 GitHub
            </a>
            <a
              href="https://linkedin.com/in/yourusername"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:text-blue-800 dark:hover:text-blue-300 transition-colors"
            >
              💼 LinkedIn
            </a>
          </div>
        </div>
      </div>
    </Layout>
  );
}
