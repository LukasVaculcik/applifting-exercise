import { createSlice } from "@reduxjs/toolkit"
import { Article } from "../types"

export const ArticleReducer = createSlice({
    name: "articles",
    initialState: {
        items: [],
    },
    reducers: {
        setArticles: (state, action) => {
            state.items = action.payload.items
        },
        removeArticle: (state, action) => {
            state.items = state.items.filter(
                (article: Article) => article.articleId !== action.payload
            )
        },
    },
})

export const { setArticles, removeArticle } = ArticleReducer.actions
export default ArticleReducer.reducer

// Usage
// const dispatch = useAppDispatch()
// dispatch(refreshToken(response.data.access_token))
