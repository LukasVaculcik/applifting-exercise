import { useEffect } from "react"
import { Link } from "react-router-dom"
import ArticlesDataTable from "../component/ArticlesDataTable"
import { useAppDispatch, useAppSelector } from "../hooks"
import { setArticles } from "../reducer/ArticleReducer"
import { fetchAllArticles } from "../service/ArticleService"
import { Article } from "../types"

export default function AdminArticleList() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        fetchAllArticles().then((articles) => {
            dispatch(setArticles(articles))
        })
    }, [])

    const articles: Article[] = useAppSelector((state) => state.articles.items)

    return (
        <main>
            <section className="container-lg">
                <div className="flex gap-8 items-center mb-10">
                    <h1 className="textstyle-head-1">My articles</h1>
                    <Link
                        to="/admin/articles/create"
                        className="bg-blue-400 hover:bg-blue-500 text-white rounded-md px-3 py-2 transition-colors"
                    >
                        Create new article
                    </Link>
                </div>

                <ArticlesDataTable data={articles} />
            </section>
        </main>
    )
}
