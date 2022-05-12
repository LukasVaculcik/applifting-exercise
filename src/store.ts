import { configureStore } from "@reduxjs/toolkit"
import ArticleReducer from "./reducer/ArticleReducer"

const store = configureStore({
    reducer: {
        article: ArticleReducer,
    },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export default store
