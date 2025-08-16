# SamBlog - Next.js 정적 블로그

Next.js와 TypeScript를 사용하여 만든 정적 블로그입니다. 마크다운으로 글을 작성하고 GitHub Pages에 호스팅할 수 있습니다.

## ✨ 주요 기능

- 📝 **마크다운 지원**: 마크다운으로 글 작성 및 렌더링
- 🏷️ **태그 & 카테고리**: 포스트 분류 및 필터링
- 📱 **반응형 디자인**: 모바일과 데스크톱 최적화
- 🌙 **다크모드**: 사용자 선호도에 따른 테마 전환
- ⚡ **정적 사이트 생성**: 빠른 로딩 속도
- 🚀 **GitHub Pages 배포**: 자동 배포 워크플로우

## 🛠️ 기술 스택

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Markdown**: gray-matter, remark
- **Deployment**: GitHub Pages

## 📁 프로젝트 구조

```
samblog/
├── src/
│   ├── app/                 # Next.js App Router
│   │   ├── page.tsx        # 홈페이지
│   │   ├── about/          # About 페이지
│   │   └── blog/           # 블로그 페이지들
│   ├── components/         # React 컴포넌트
│   └── lib/               # 유틸리티 함수
├── posts/                 # 마크다운 포스트
│   ├── 2024-12/
│   ├── 2024-11/
│   └── 2024-10/
├── public/               # 정적 파일
└── .github/workflows/    # GitHub Actions
```

## 🚀 시작하기

### 1. 저장소 클론

```bash
git clone https://github.com/yourusername/samblog.git
cd samblog
```

### 2. 의존성 설치

```bash
npm install
```

### 3. 개발 서버 실행

```bash
npm run dev
```

브라우저에서 [http://localhost:3000](http://localhost:3000)을 열어 확인하세요.

### 4. 빌드

```bash
npm run build
```

## 📝 포스트 작성하기

### 마크다운 파일 구조

`posts/YYYY-MM/YYYY-MM-DD-title.md` 형식으로 파일을 생성하세요.

```markdown
---
title: "포스트 제목"
date: "2024-12-01"
tags: ["태그1", "태그2"]
category: "카테고리"
---

# 포스트 내용

마크다운으로 작성하세요...
```

### Frontmatter 필드

- `title`: 포스트 제목 (필수)
- `date`: 작성 날짜 (필수, YYYY-MM-DD 형식)
- `tags`: 태그 배열 (선택)
- `category`: 카테고리 (선택)

## 🎨 커스터마이징

### 색상 테마 변경

`tailwind.config.ts`에서 색상을 수정할 수 있습니다.

### 컴포넌트 수정

`src/components/` 디렉토리의 컴포넌트들을 수정하여 디자인을 변경할 수 있습니다.

## 🚀 배포하기

### GitHub Pages 배포

1. GitHub 저장소에 코드를 푸시합니다.
2. 저장소 설정에서 GitHub Pages를 활성화합니다.
3. Source를 "GitHub Actions"로 설정합니다.
4. main 브랜치에 푸시하면 자동으로 배포됩니다.

### 수동 배포

```bash
npm run build
```

빌드된 파일은 `out/` 디렉토리에 생성됩니다.

## 📚 사용된 라이브러리

- **gray-matter**: 마크다운 frontmatter 파싱
- **remark**: 마크다운을 HTML로 변환
- **remark-html**: HTML 출력
- **remark-gfm**: GitHub Flavored Markdown 지원
- **date-fns**: 날짜 포맷팅
- **@tailwindcss/typography**: 마크다운 스타일링

## 🤝 기여하기

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 라이선스

이 프로젝트는 MIT 라이선스 하에 배포됩니다. 자세한 내용은 `LICENSE` 파일을 참조하세요.

## 📞 연락처

프로젝트에 대한 질문이나 제안사항이 있으시면 이슈를 생성해 주세요.

---

⭐ 이 프로젝트가 도움이 되었다면 스타를 눌러주세요!
