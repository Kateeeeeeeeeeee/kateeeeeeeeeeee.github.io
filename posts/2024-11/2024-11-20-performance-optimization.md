---
title: "웹 성능 최적화 완벽 가이드"
date: "2024-11-20"
tags: ["성능", "최적화", "웹개발", "프론트엔드"]
category: "frontend"
---

# 웹 성능 최적화 완벽 가이드

웹 애플리케이션의 성능을 향상시키는 다양한 기법들을 알아보겠습니다.

## 성능 최적화의 중요성

웹 성능은 사용자 경험과 비즈니스 성과에 직접적인 영향을 미칩니다.

### 성능 지표

- **LCP (Largest Contentful Paint)**: 2.5초 이하
- **FID (First Input Delay)**: 100ms 이하
- **CLS (Cumulative Layout Shift)**: 0.1 이하
- **TTFB (Time to First Byte)**: 600ms 이하

## 이미지 최적화

### WebP 포맷 사용

```html
<picture>
  <source srcset="image.webp" type="image/webp">
  <img src="image.jpg" alt="이미지 설명">
</picture>
```

### 지연 로딩 (Lazy Loading)

```html
<img src="image.jpg" loading="lazy" alt="지연 로딩 이미지">
```

### 반응형 이미지

```html
<img 
  srcset="small.jpg 300w, medium.jpg 600w, large.jpg 900w"
  sizes="(max-width: 600px) 300px, (max-width: 900px) 600px, 900px"
  src="fallback.jpg" 
  alt="반응형 이미지">
```

## JavaScript 최적화

### 코드 분할 (Code Splitting)

```javascript
// React.lazy 사용
const LazyComponent = React.lazy(() => import('./LazyComponent'));

function App() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LazyComponent />
    </Suspense>
  );
}
```

### 번들 최적화

```javascript
// webpack.config.js
module.exports = {
  optimization: {
    splitChunks: {
      chunks: 'all',
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
        },
      },
    },
  },
};
```

### 메모이제이션

```javascript
// React.memo 사용
const ExpensiveComponent = React.memo(({ data }) => {
  return <div>{/* 복잡한 렌더링 로직 */}</div>;
});

// useMemo 사용
const expensiveValue = useMemo(() => {
  return computeExpensiveValue(a, b);
}, [a, b]);

// useCallback 사용
const handleClick = useCallback(() => {
  console.log('클릭됨');
}, []);
```

## CSS 최적화

### Critical CSS

```html
<!-- 인라인으로 중요한 CSS만 포함 -->
<style>
  .header { background: #fff; }
  .hero { padding: 2rem; }
</style>

<!-- 나머지 CSS는 비동기 로드 -->
<link rel="preload" href="styles.css" as="style" onload="this.onload=null;this.rel='stylesheet'">
```

### CSS 최적화 기법

```css
/* 불필요한 선택자 제거 */
/* 나쁜 예 */
div.container .wrapper .content .title { color: red; }

/* 좋은 예 */
.title { color: red; }

/* CSS 변수 활용 */
:root {
  --primary-color: #007bff;
  --secondary-color: #6c757d;
}

.button {
  background-color: var(--primary-color);
}
```

## 네트워크 최적화

### HTTP/2 활용

```javascript
// 서버 설정 (Node.js)
const http2 = require('http2');
const fs = require('fs');

const server = http2.createSecureServer({
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
});
```

### 리소스 우선순위

```html
<!-- 중요한 리소스 먼저 로드 -->
<link rel="preload" href="critical.js" as="script">
<link rel="preload" href="critical.css" as="style">

<!-- DNS 미리 확인 -->
<link rel="dns-prefetch" href="//cdn.example.com">

<!-- 연결 미리 설정 -->
<link rel="preconnect" href="https://api.example.com">
```

### 캐싱 전략

```javascript
// Service Worker를 통한 캐싱
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});
```

## 서버 사이드 최적화

### 압축

```javascript
// Gzip 압축 (Express.js)
const compression = require('compression');
app.use(compression());
```

### 캐싱 헤더

```javascript
// 정적 파일 캐싱
app.use('/static', express.static('public', {
  maxAge: '1y',
  etag: true
}));
```

### 데이터베이스 최적화

```sql
-- 인덱스 추가
CREATE INDEX idx_user_email ON users(email);

-- 쿼리 최적화
SELECT id, name, email FROM users WHERE active = 1 LIMIT 10;
```

## 모니터링 및 측정

### Core Web Vitals 측정

```javascript
// LCP 측정
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('LCP:', entry.startTime);
  }
}).observe({entryTypes: ['largest-contentful-paint']});

// FID 측정
new PerformanceObserver((entryList) => {
  for (const entry of entryList.getEntries()) {
    console.log('FID:', entry.processingStart - entry.startTime);
  }
}).observe({entryTypes: ['first-input']});
```

### 성능 모니터링 도구

- **Lighthouse**: 종합적인 성능 분석
- **WebPageTest**: 상세한 성능 측정
- **Chrome DevTools**: 실시간 성능 분석
- **Real User Monitoring (RUM)**: 실제 사용자 경험 측정

## 모바일 최적화

### 터치 최적화

```css
/* 터치 영역 최소 44px */
.button {
  min-height: 44px;
  min-width: 44px;
  touch-action: manipulation;
}
```

### 배터리 최적화

```javascript
// 불필요한 애니메이션 제거
if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  // 애니메이션 비활성화
}
```

## 결론

웹 성능 최적화는 지속적인 과정입니다. 

정기적인 측정과 모니터링을 통해 사용자에게 최고의 경험을 제공할 수 있습니다!
