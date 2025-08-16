---
title: "효율적인 Git 워크플로우 가이드"
date: "2024-12-04"
tags: ["Git", "개발팁", "협업", "버전관리"]
category: "development"
---

# 효율적인 Git 워크플로우 가이드

팀 개발에서 Git을 효과적으로 사용하는 방법과 워크플로우에 대해 알아보겠습니다.

## Git 워크플로우란?

Git 워크플로우는 팀원들이 Git을 사용하여 협업할 때 따라야 할 규칙과 절차입니다.

### 워크플로우의 중요성

- **일관성**: 모든 팀원이 동일한 방식으로 작업
- **충돌 방지**: 병합 충돌 최소화
- **추적 가능성**: 변경사항의 명확한 히스토리
- **롤백 용이성**: 문제 발생 시 빠른 복구

## 브랜치 전략

### Git Flow

```
main (master)
├── develop
│   ├── feature/user-auth
│   ├── feature/payment
│   └── hotfix/critical-bug
├── release/v1.0.0
└── hotfix/security-patch
```

### 브랜치별 역할

- **main**: 프로덕션 배포용
- **develop**: 개발 통합용
- **feature/**: 새로운 기능 개발
- **release/**: 배포 준비
- **hotfix/**: 긴급 수정

## 커밋 메시지 규칙

### Conventional Commits

```
type(scope): description

[optional body]

[optional footer]
```

### 타입 종류

- **feat**: 새로운 기능
- **fix**: 버그 수정
- **docs**: 문서 변경
- **style**: 코드 포맷팅
- **refactor**: 코드 리팩토링
- **test**: 테스트 추가/수정
- **chore**: 빌드 프로세스 변경

### 예시

```bash
feat(auth): 사용자 로그인 기능 추가
fix(api): 사용자 정보 조회 API 오류 수정
docs(readme): 설치 가이드 업데이트
```

## Pull Request 워크플로우

### 1. 브랜치 생성

```bash
git checkout -b feature/new-feature
```

### 2. 개발 및 커밋

```bash
git add .
git commit -m "feat: 새로운 기능 구현"
```

### 3. 원격 저장소에 푸시

```bash
git push origin feature/new-feature
```

### 4. Pull Request 생성

- 제목: 명확하고 간결하게
- 설명: 변경사항, 테스트 방법, 관련 이슈
- 리뷰어 지정
- 라벨 추가

### 5. 코드 리뷰

- **코드 품질**: 가독성, 성능, 보안
- **테스트**: 충분한 테스트 커버리지
- **문서**: README, API 문서 업데이트

### 6. 병합

- Squash and merge: 커밋 히스토리 정리
- Delete branch: 병합 후 브랜치 삭제

## 유용한 Git 명령어

### 브랜치 관리

```bash
# 브랜치 목록 확인
git branch -a

# 브랜치 삭제
git branch -d feature/old-feature

# 브랜치 강제 삭제
git branch -D feature/old-feature
```

### 커밋 관리

```bash
# 마지막 커밋 수정
git commit --amend

# 커밋 히스토리 확인
git log --oneline --graph

# 특정 파일의 변경사항 확인
git log -p filename
```

### 스태시 활용

```bash
# 현재 작업 임시 저장
git stash

# 스태시 목록 확인
git stash list

# 스태시 적용
git stash pop

# 특정 스태시 적용
git stash apply stash@{1}
```

## 충돌 해결

### 1. 충돌 발생 시

```bash
git status  # 충돌 파일 확인
```

### 2. 충돌 해결

```bash
# 충돌 파일 편집
# <<<<<<< HEAD
# 현재 브랜치 코드
# =======
# 병합할 브랜치 코드
# >>>>>>> feature/branch
```

### 3. 해결 후

```bash
git add .
git commit -m "resolve merge conflicts"
```

## Git Hooks 활용

### pre-commit

```bash
#!/bin/sh
# 린터 실행
npm run lint
# 테스트 실행
npm run test
```

### commit-msg

```bash
#!/bin/sh
# 커밋 메시지 형식 검증
npx commitlint --edit $1
```

## 모범 사례

### 1. 작은 단위로 커밋

```bash
# 좋은 예
git commit -m "feat: 사용자 인증 기능 추가"
git commit -m "test: 인증 기능 테스트 추가"
git commit -m "docs: 인증 API 문서 업데이트"

# 나쁜 예
git commit -m "사용자 인증 기능 구현 및 테스트 추가"
```

### 2. 의미있는 커밋 메시지

```bash
# 좋은 예
git commit -m "fix(auth): 로그인 시 세션 만료 오류 수정"

# 나쁜 예
git commit -m "버그 수정"
```

### 3. 정기적인 동기화

```bash
# develop 브랜치 최신화
git checkout develop
git pull origin develop
git checkout feature/my-feature
git rebase develop
```

## 결론

효율적인 Git 워크플로우는 팀의 생산성과 코드 품질을 크게 향상시킵니다. 

일관된 규칙과 명확한 절차를 통해 협업의 효율성을 극대화할 수 있습니다!
