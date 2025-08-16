---
title: "React Hooks 완벽 가이드"
date: "2024-11-15"
tags: ["React", "Hooks", "JavaScript", "프론트엔드"]
category: "frontend"
---

# React Hooks 완벽 가이드

React Hooks는 함수형 컴포넌트에서 상태와 생명주기를 관리할 수 있게 해주는 기능입니다. 이 글에서는 주요 Hooks들을 자세히 살펴보겠습니다.

## useState

가장 기본적인 Hook으로, 컴포넌트에서 상태를 관리합니다.

```typescript
import { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>
    </div>
  );
}
```

### 객체 상태 관리

```typescript
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });
  
  const updateUser = (field: string, value: string | number) => {
    setUser(prev => ({
      ...prev,
      [field]: value
    }));
  };
  
  return (
    <form>
      <input
        value={user.name}
        onChange={(e) => updateUser('name', e.target.value)}
        placeholder="Name"
      />
      <input
        value={user.email}
        onChange={(e) => updateUser('email', e.target.value)}
        placeholder="Email"
      />
    </form>
  );
}
```

## useEffect

컴포넌트의 생명주기와 관련된 작업을 처리합니다.

```typescript
import { useEffect, useState } from 'react';

function UserProfile({ userId }: { userId: number }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`/api/users/${userId}`);
        const userData = await response.json();
        setUser(userData);
      } catch (error) {
        console.error('Failed to fetch user:', error);
      } finally {
        setLoading(false);
      }
    };
    
    fetchUser();
  }, [userId]); // userId가 변경될 때만 실행
  
  if (loading) return <div>Loading...</div>;
  if (!user) return <div>User not found</div>;
  
  return <div>{user.name}</div>;
}
```

### 클린업 함수

```typescript
function Timer() {
  const [seconds, setSeconds] = useState(0);
  
  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);
    
    // 클린업 함수
    return () => clearInterval(interval);
  }, []);
  
  return <div>Seconds: {seconds}</div>;
}
```

## useContext

전역 상태를 관리할 때 사용합니다.

```typescript
import { createContext, useContext, useState } from 'react';

// Context 생성
const ThemeContext = createContext<{
  theme: string;
  toggleTheme: () => void;
}>({
  theme: 'light',
  toggleTheme: () => {}
});

// Provider 컴포넌트
function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState('light');
  
  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };
  
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

// Hook 사용
function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within ThemeProvider');
  }
  return context;
}

// 사용 예시
function App() {
  return (
    <ThemeProvider>
      <Header />
      <Main />
    </ThemeProvider>
  );
}

function Header() {
  const { theme, toggleTheme } = useTheme();
  
  return (
    <header className={theme}>
      <button onClick={toggleTheme}>
        Toggle Theme
      </button>
    </header>
  );
}
```

## useReducer

복잡한 상태 로직을 관리할 때 사용합니다.

```typescript
import { useReducer } from 'react';

type State = {
  count: number;
  step: number;
};

type Action = 
  | { type: 'increment' }
  | { type: 'decrement' }
  | { type: 'setStep'; payload: number };

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case 'increment':
      return { ...state, count: state.count + state.step };
    case 'decrement':
      return { ...state, count: state.count - state.step };
    case 'setStep':
      return { ...state, step: action.payload };
    default:
      return state;
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, {
    count: 0,
    step: 1
  });
  
  return (
    <div>
      <p>Count: {state.count}</p>
      <p>Step: {state.step}</p>
      <button onClick={() => dispatch({ type: 'increment' })}>
        +
      </button>
      <button onClick={() => dispatch({ type: 'decrement' })}>
        -
      </button>
      <input
        type="number"
        value={state.step}
        onChange={(e) => dispatch({ 
          type: 'setStep', 
          payload: parseInt(e.target.value) || 1 
        })}
      />
    </div>
  );
}
```

## 커스텀 Hooks

재사용 가능한 로직을 만들 때 커스텀 Hook을 사용합니다.

```typescript
import { useState, useEffect } from 'react';

function useLocalStorage<T>(key: string, initialValue: T) {
  const [storedValue, setStoredValue] = useState<T>(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      console.error(error);
      return initialValue;
    }
  });
  
  const setValue = (value: T | ((val: T) => T)) => {
    try {
      const valueToStore = value instanceof Function ? value(storedValue) : value;
      setStoredValue(valueToStore);
      window.localStorage.setItem(key, JSON.stringify(valueToStore));
    } catch (error) {
      console.error(error);
    }
  };
  
  return [storedValue, setValue] as const;
}

// 사용 예시
function TodoApp() {
  const [todos, setTodos] = useLocalStorage('todos', []);
  
  const addTodo = (text: string) => {
    setTodos(prev => [...prev, { id: Date.now(), text, completed: false }]);
  };
  
  return (
    <div>
      {/* Todo 컴포넌트들 */}
    </div>
  );
}
```

## 결론

React Hooks는 함수형 컴포넌트를 더욱 강력하게 만들어줍니다. 적절한 Hook을 선택하고 사용하면 코드를 더 깔끔하고 재사용 가능하게 만들 수 있습니다.

각 Hook의 특성을 이해하고 상황에 맞게 사용하는 것이 중요합니다!
