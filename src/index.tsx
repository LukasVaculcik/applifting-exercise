import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from "./store"
import { Provider } from "react-redux"
import reportWebVitals from "./reportWebVitals"
import "./index.css"
import Home from "./page/Home"
import ArticleDetail from "./page/ArticleDetail"
import About from "./page/About"
import NoPage from "./page/NoPage"
import AdminLogin from "./page/AdminLogin"
import AdminArticleList from "./page/AdminArticleList"
import AdminArticleEdit from "./page/AdminArticleEdit"
import PageLayout from "./component/PageLayout"

const container = document.getElementById("root")
const root = createRoot(container!)

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<PageLayout />}>
                    <Route index element={<Home />} />
                    <Route
                        path="article/:articleId"
                        element={<ArticleDetail />}
                    />
                    <Route path="about" element={<About />} />
                    <Route path="admin">
                        <Route path="login" element={<AdminLogin />} />
                        <Route path="articles">
                            <Route index element={<AdminArticleList />} />
                            <Route
                                path="create"
                                element={<AdminArticleEdit />}
                            />
                            <Route
                                path=":articleId"
                                element={<AdminArticleEdit />}
                            />
                        </Route>
                    </Route>
                    <Route path="*" element={<NoPage />} />
                </Route>
            </Routes>
        </BrowserRouter>
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
