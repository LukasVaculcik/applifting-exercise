import { Link } from "react-router-dom"
import { Article, ArticleCardSimpleProps } from "../types"

export default function ArticleCardSimple({ article }: ArticleCardSimpleProps) {
    const linkToDetail = `/article/${article.articleId}`
    return (
        <article>
            <Link to={linkToDetail} className="w-64 h-64">
                <h3 className="textstyle-head-3 text-black-400 mb-2">
                    {article.title}
                </h3>
                <p>{article.perex}</p>
            </Link>
        </article>
    )
}
