import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from "./store"
import { Provider } from "react-redux"
import "./index.css"
import Home from "./pageFront/Home"
import ArticleDetail from "./pageFront/ArticleDetail"
import About from "./pageFront/About"
import Login from "./pageFront/Login"
import NoPage from "./pageFront/NoPage"
import reportWebVitals from "./reportWebVitals"
import PageLayout from "./component/PageLayout/PageLayout"
import ArticleList from "./pageAdmin/ArticleList"
import ArticleEdit from "./pageAdmin/ArticleEdit"

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
                    <Route path="admin" element={<Login />}>
                        <Route index element={<ArticleList />} />
                        <Route
                            path="edit/:articleId"
                            element={<ArticleEdit />}
                        />
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
