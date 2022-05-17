import { createSlice } from "@reduxjs/toolkit"

export const ArticleReducer = createSlice({
    name: "articles",
    initialState: {
        items: [],
    },
    reducers: {
        setArticles: (state, action) => {
            state.items = action.payload.items
        },
    },
})

export const { setArticles } = ArticleReducer.actions
export default ArticleReducer.reducer

// Usage
// const dispatch = useAppDispatch()
// dispatch(refreshToken(response.data.access_token))
