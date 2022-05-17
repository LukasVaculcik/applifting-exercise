import { useParams } from "react-router-dom"
import ArticleForm from "../component/ArticleForm"

export default function AdminArticleEdit() {
    const { articleId } = useParams()

    return (
        <main>
            <section className="container-lg">
                <ArticleForm articleId={articleId} />
            </section>
        </main>
    )
}
