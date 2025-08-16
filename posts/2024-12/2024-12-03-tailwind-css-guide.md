---
title: "Tailwind CSS 완벽 가이드"
date: "2024-12-03"
tags: ["CSS", "Tailwind", "프론트엔드", "스타일링"]
category: "frontend"
---

# Tailwind CSS 완벽 가이드

Tailwind CSS는 유틸리티 퍼스트 CSS 프레임워크로, 빠르고 효율적인 웹 개발을 가능하게 합니다.

## Tailwind CSS란?

Tailwind CSS는 미리 정의된 클래스들을 조합하여 스타일을 적용하는 방식의 CSS 프레임워크입니다.

### 주요 특징

- **유틸리티 퍼스트**: 작은 단위의 클래스들을 조합
- **반응형 디자인**: 기본적으로 모바일 퍼스트
- **커스터마이징**: 설정 파일을 통한 테마 커스터마이징
- **JIT 모드**: Just-In-Time 컴파일로 최적화된 CSS 생성

## 기본 사용법

### 레이아웃 클래스

```html
<div class="container mx-auto px-4">
  <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-xl font-bold text-gray-900 mb-4">카드 제목</h2>
      <p class="text-gray-600">카드 내용입니다.</p>
    </div>
  </div>
</div>
```

### 색상 시스템

```html
<!-- 배경색 -->
<div class="bg-blue-500">파란색 배경</div>
<div class="bg-green-200">연한 초록색 배경</div>

<!-- 텍스트 색상 -->
<p class="text-gray-900">진한 회색 텍스트</p>
<p class="text-blue-600">파란색 텍스트</p>
```

### 간격 (Spacing)

```html
<!-- 마진 -->
<div class="m-4">모든 방향 마진 1rem</div>
<div class="mt-8 mb-4">위쪽 마진 2rem, 아래쪽 마진 1rem</div>

<!-- 패딩 -->
<div class="p-6">모든 방향 패딩 1.5rem</div>
<div class="px-4 py-2">좌우 패딩 1rem, 상하 패딩 0.5rem</div>
```

## 반응형 디자인

```html
<div class="w-full md:w-1/2 lg:w-1/3">
  <!-- 모바일: 전체 너비 -->
  <!-- 태블릿: 절반 너비 -->
  <!-- 데스크톱: 1/3 너비 -->
</div>
```

## 호버 및 포커스 상태

```html
<button class="bg-blue-500 hover:bg-blue-700 focus:ring-2 focus:ring-blue-300 text-white px-4 py-2 rounded">
  호버 및 포커스 효과
</button>
```

## 다크모드 지원

```html
<div class="bg-white dark:bg-gray-800 text-gray-900 dark:text-white">
  다크모드 지원 요소
</div>
```

## 커스터마이징

### tailwind.config.js

```javascript
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#eff6ff',
          500: '#3b82f6',
          900: '#1e3a8a',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      }
    }
  }
}
```

## 성능 최적화

### JIT 모드 활성화

```javascript
// tailwind.config.js
module.exports = {
  mode: 'jit',
  // ...
}
```

### 사용하지 않는 스타일 제거

Tailwind CSS는 사용하지 않는 클래스들을 자동으로 제거하여 최종 CSS 파일 크기를 최소화합니다.

## 결론

Tailwind CSS는 현대적인 웹 개발에 매우 유용한 도구입니다. 빠른 프로토타이핑부터 프로덕션 환경까지 모든 단계에서 효율적인 개발을 가능하게 합니다.

특히 컴포넌트 기반 개발과 함께 사용할 때 그 진가를 발휘합니다!
