import { createSlice } from "@reduxjs/toolkit"

export const ArticleReducer = createSlice({
    name: "article",
    initialState: {
        articles: [],
    },
    reducers: {
        fetchAllArticles: (state, action) => {
            state.articles = action.payload
        },
    },
})

export const { fetchAllArticles } = ArticleReducer.actions
export default ArticleReducer.reducer

// Usage
// const dispatch = useAppDispatch()
// dispatch(refreshToken(response.data.access_token))
