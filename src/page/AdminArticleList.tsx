import { Link } from "react-router-dom"
import { fetchAllArticles } from "../service/ArticleService"

export default function AdminArticleList() {
    const articles = fetchAllArticles()
    console.log(articles)

    return (
        <main>
            <section className="container-lg">
                <div className="flex gap-8 items-center">
                    <h1 className="textstyle-head-1">My articles</h1>
                    <Link
                        to="/admin/create"
                        className="bg-blue-400 hover:bg-blue-500 text-white rounded-md px-3 py-2 transition-colors"
                    >
                        Create new article
                    </Link>
                </div>
            </section>
        </main>
    )
}
