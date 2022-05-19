import { useEffect } from "react"
import { Outlet } from "react-router-dom"
import { useAppDispatch } from "../hooks"
import { setArticles } from "../reducer/ArticleReducer"
import { fetchAllArticles } from "../service/ArticleService"
import PageHeader from "./PageHeader"

export default function PageLayout() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        fetchAllArticles().then((articles) => {
            dispatch(setArticles(articles))
        })
    }, [])

    return (
        <>
            <PageHeader />
            <Outlet />
        </>
    )
}
