import { useParams } from "react-router-dom"
import ArticleForm from "../component/ArticleForm"
import { useAppSelector } from "../hooks"
import { Article } from "../types"

export default function AdminArticleEdit() {
    const { articleId } = useParams()
    const currentArticle: Article | undefined = useAppSelector((state) =>
        state.articles.items.find(
            (article: Article) => article.articleId === articleId
        )
    )

    return (
        <main>
            <section className="container-lg">
                <ArticleForm article={currentArticle} />
            </section>
        </main>
    )
}
