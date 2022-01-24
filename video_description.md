#Продвинутый Redux. Redux Toolkit, RTK query, TypeScript.

https://www.youtube.com/watch?v=Od5H_CiU2vM 


+ hooks
+ models
    + IUser.ts
+ store
    - [reducers]
        - UserSlice.ts
    + store.ts
+ App.tsx
+ index.tsx

store.ts
```typescript
import {combineReducers, configureStore} from "@reduxjs/toolkit"
import userReducer from './reducers/UserSlice'

const rootReducder = combineReducers( {
    userReducer
})

export const setupStore = () => {
    return configureStore({
        reducer: rootReducer
    })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
```
models/IUser.ts
```typescript
export interface IUser {
    id: number;
    name: string;
    email: string;
}
```

hooks/redux.ts
```typescript
import {TypedUseSelectorHook, useDispatch, useSelector} from "react-redux"
import {AppDispatch, RootState} from "../store/store"

export const userAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector

```

store/reducers/UserSlice.ts
```typescript
import {IUser} from "../../models/IUser"

interface UserState {
    users: IUser[];
    isLoading: boolean;
    error: string;
}

const  initialState: UserState = {
    user: [],
    isLoading: false,
    error: '',
    count: 0
}
export const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        increment(state, action: PayLoadAction<number>){ 
            // Не надо клонировать state
            state.count += action.payload
        }
    }
})

export default userSlice.reducer
```

index.tsx
```typescript

cosnt store = setupStore();

ReactDom.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('root')

)
```
Использование
```typescript

function App() {
    const {count} = useAppSelector( state=state.userReducer.)
    const {increment} = userSlice.actions;
    const dispatch = useAppDIspatch()

    //console.log(increment(5))
    // {type:, payload:}

    return (
        <div className="App">
           <h1>{count}</h1> 
           <button onClick={() => dispatch(increment(10))}>INCREMENT</button>
        </div>
    )
}
 



```
