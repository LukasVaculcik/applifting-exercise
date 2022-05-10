import React from "react"
import { createRoot } from "react-dom/client"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import store from "./store"
import { Provider } from "react-redux"
import "./index.css"
import HomePage from "./page/HomePage"
import ArticleDetailPage from "./page/ArticleDetailPage"
import AboutPage from "./page/AboutPage"
import LoginPage from "./page/LoginPage"
import reportWebVitals from "./reportWebVitals"
import Layout from "./component/Layout/Layout"

// After
const container = document.getElementById("root")
const root = createRoot(container!)

root.render(
    <Provider store={store}>
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path="/">
                        <HomePage />
                    </Route>
                    <Route path="about">
                        <AboutPage />
                    </Route>
                    <Route path="login">
                        <LoginPage />
                    </Route>
                </Routes>
            </Layout>
        </BrowserRouter>
    </Provider>
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
