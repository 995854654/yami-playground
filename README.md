

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```
## project prograss

### chatbot
![alt text](document/image.png)

- chatbot
  - [X] front-end UI develop
  - [ ] API develop
  - [ ] F/E & B/E join testing


## React-Typescript

函数式编程用typescript编写
```typescript
interface AuthenFormProps {
    submitForm: (formData: {username:string, password:string}) => void;
  }
const AuthenForm: React.FC<AuthenFormProps> = ({submitForm}) => {}
export default AuthenFormProps

```
## 常用组件

### 消息提示
有两种方式，
1. 函数式显性调用
```typescript
import { SnackbarProvider, VariantType, useSnackbar } from 'notistack';
const handleClickVariant = (variant: VariantType) => () => {
    // variant could be success, error, warning, info, or default
    enqueueSnackbar('This is a success message!', { variant });
  };
```

## Redux

有两种写法调用redux
### React Hooks Types
```typescript
useSelector
import React from 'react'
import { RootState } from './store'
import { useSelector } from 'react-redux'
 
const Count = () => {
	const countState = useSelector((state: RootState) => state.count)
 
	return <div>example</div>
}
useDispatch
import React, { useEffect } from 'react'
import { Dispatch } from './store'
import { useDispatch } from 'react-redux'
 
const Count = () => {
	const dispatch = useDispatch<Dispatch>()
	useEffect(() => {
		dispatch.count.incrementAsync(2)
                       
(property) incrementAsync: (payload: number) => void
	}, [])
 
	return <div>example</div>
}
```

### React class types
```typescript

import React from 'react'
import { RootState, Dispatch } from './store'
import { connect } from 'react-redux'
 
class App extends React.PureComponent<Props> {
	render() {
		const { countState } = this.props
		return <div>example</div>
	}
}
 
const mapState = (state: RootState) => ({
	countState: state.count,
})
 
const mapDispatch = (dispatch: Dispatch) => ({
	count: dispatch.count,
})
 
type StateProps = ReturnType<typeof mapState>
type DispatchProps = ReturnType<typeof mapDispatch>
type Props = StateProps & DispatchProps
 
export default connect(mapState, mapDispatch)(App)
```

## FAQ

###  You're importing a component that needs useState. It only works in a Client Component but none of its parents are marked with "use client"
在文件首行添加 `"use client"`

### 如何解决刷新页面redux数据重置问题

使用rematch的persist

综合代码
```typescript
// sotre.tsx
import { init, RematchDispatch, RematchRootState } from '@rematch/core'
import { models, RootModel } from '@/models'
import persistPlugin from "@rematch/persist";
import storage from "redux-persist/lib/storage";

const persist_plugin = persistPlugin<RootModel, RootModel>({
    key: "root",
    storage,
  })

export const store = init({
    name:"global-redux-store",
	models,
    plugins:[persist_plugin]
})
 
export type Store = typeof store
export type Dispatch = RematchDispatch<RootModel>
export type RootState = RematchRootState<RootModel>
```

在全局App下需要配置Persist Gate, 否则会警告`Warning: Text content did not match. Server: "Sign in Yamiusername:usernameusernamepassword:passwordpasswordLOG IN" Client: "FunctionList"`

```typescript
// Layout.tsx
"use client"
import React from 'react'
import { Provider } from "react-redux";
import { store } from "@/store";
import { Box } from '@mui/material';
import { getPersistor } from "@rematch/persist";
import { PersistGate } from "redux-persist/lib/integration/react";
const persistor = getPersistor();

export default function IndexLayout({ children }: { children: React.ReactNode }) {
    return (
        <Box>
            <PersistGate persistor={persistor}>
                <Provider store={store}>
                    {children}
                </Provider>
            </PersistGate>

        </Box>

    )
}

```

### 在useEffect中使用定时器，每次循环都执行两次，为什么？如何解决？
> setInterval函数在react中可以用来实现定时执行某个函数的效果，但在某些情况下可能会出现执行多次的情况。这通常是因为在组件卸载前没有清除interval导致的。
>
> 当使用setInterval时，需要在组件卸载前清除interval，可以使用useEffect函数的返回值来清除interval。

```jsx
import React, { useEffect } from 'react';

function MyComponent() {
  useEffect(() => {
    const interval = setInterval(() => {
      console.log('This will be executed every 1 second');
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div>
      My Component
    </div>
  );
}

export default MyComponent;

```


### 设置屏幕颜色，高度为100vh，如果元素多，需要往下滚动，下面的元素背景颜色就会不一样，如何解决？
使用`min-height:100vh`代替`height: 100vh`