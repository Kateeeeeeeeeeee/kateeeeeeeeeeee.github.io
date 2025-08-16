---
title: "TypeScript 실전 팁 10가지"
date: "2024-12-02"
tags: ["TypeScript", "JavaScript", "개발팁"]
category: "programming"
---

# TypeScript 실전 팁 10가지

TypeScript를 사용하면서 알게 된 유용한 팁들을 공유해보겠습니다.

## 1. 타입 추론 활용하기

TypeScript는 매우 똑똑한 타입 추론을 제공합니다. 불필요한 타입 어노테이션을 줄여보세요.

```typescript
// 좋지 않은 예
const name: string = "John";
const age: number = 25;

// 좋은 예
const name = "John"; // string으로 추론됨
const age = 25; // number로 추론됨
```

## 2. 유니온 타입 활용

여러 타입을 허용해야 할 때 유니온 타입을 사용하세요.

```typescript
type Status = "loading" | "success" | "error";

function handleStatus(status: Status) {
  switch (status) {
    case "loading":
      return "로딩 중...";
    case "success":
      return "성공!";
    case "error":
      return "오류 발생";
  }
}
```

## 3. 인터페이스 vs 타입

인터페이스는 확장 가능하고, 타입은 유니온과 교차 타입에 유용합니다.

```typescript
// 인터페이스 - 확장 가능
interface User {
  name: string;
  email: string;
}

interface AdminUser extends User {
  permissions: string[];
}

// 타입 - 유니온에 유용
type Status = "idle" | "loading" | "success" | "error";
```

## 4. 제네릭 활용

재사용 가능한 타입을 만들 때 제네릭을 사용하세요.

```typescript
function createArray<T>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

const stringArray = createArray(3, "hello"); // string[]
const numberArray = createArray(3, 42); // number[]
```

## 5. 옵셔널 체이닝

안전한 속성 접근을 위해 옵셔널 체이닝을 사용하세요.

```typescript
interface User {
  name: string;
  address?: {
    street: string;
    city: string;
  };
}

function getCity(user: User): string | undefined {
  return user.address?.city;
}
```

## 6. 타입 가드

런타임에 타입을 확인하는 타입 가드를 사용하세요.

```typescript
function isString(value: unknown): value is string {
  return typeof value === "string";
}

function processValue(value: unknown) {
  if (isString(value)) {
    // 여기서 value는 string 타입으로 추론됨
    console.log(value.toUpperCase());
  }
}
```

## 7. const assertions

객체를 읽기 전용으로 만들 때 const assertions를 사용하세요.

```typescript
const colors = ["red", "green", "blue"] as const;
type Color = typeof colors[number]; // "red" | "green" | "blue"
```

## 8. 조건부 타입

타입을 조건에 따라 다르게 정의할 때 조건부 타입을 사용하세요.

```typescript
type NonNullable<T> = T extends null | undefined ? never : T;

type User = {
  name: string;
  email: string | null;
};

type RequiredUser = {
  name: NonNullable<User["name"]>;
  email: NonNullable<User["email"]>;
};
```

## 9. 유틸리티 타입 활용

TypeScript의 내장 유틸리티 타입들을 활용하세요.

```typescript
interface User {
  id: number;
  name: string;
  email: string;
  password: string;
}

// 모든 속성을 선택적으로 만들기
type PartialUser = Partial<User>;

// 특정 속성만 선택하기
type UserCredentials = Pick<User, "email" | "password">;

// 특정 속성 제외하기
type PublicUser = Omit<User, "password">;
```

## 10. 에러 처리

타입 안전한 에러 처리를 위해 Result 타입을 사용하세요.

```typescript
type Result<T, E = Error> = 
  | { success: true; data: T }
  | { success: false; error: E };

function divide(a: number, b: number): Result<number> {
  if (b === 0) {
    return { success: false, error: new Error("0으로 나눌 수 없습니다") };
  }
  return { success: true, data: a / b };
}
```

## 결론

이러한 팁들을 활용하면 TypeScript로 더 안전하고 유지보수하기 쉬운 코드를 작성할 수 있습니다. 계속해서 새로운 패턴들을 학습하고 적용해보세요!
