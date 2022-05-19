import { useParams } from "react-router-dom"
import ArticleBody from "../component/ArticleBody"
import ArticleCardSimple from "../component/ArticleCardSimple"
import ArticleInfo from "../component/ArticleInfo"
import Comments from "../component/Comments"
import { useAppSelector } from "../hooks"
import { Article } from "../types"

export default function ArticleDetail() {
    const { articleId } = useParams()
    const articles: Article[] = useAppSelector((state) => state.articles.items)
    const currentArticle: Article | undefined = useAppSelector((state) =>
        state.articles.items.find(
            (article: Article) => article.articleId === articleId
        )
    )
    console.log(articles)
    console.log(currentArticle)

    return (
        <div className="container-lg flex gap-8">
            <main className="w-70/100">
                {currentArticle ? (
                    <ArticleBody article={currentArticle} />
                ) : (
                    <h1 className="textstyle-head-1">Article not found</h1>
                )}
            </main>
            <aside className="w-30/100">
                <h2 className="textstyle-head-2 mb-8">Related articles</h2>
                <div className="flex flex-col gap-4">
                    {articles.map((item, index) => (
                        <ArticleCardSimple key={index} article={item} />
                    ))}
                </div>
            </aside>
        </div>
    )
}
