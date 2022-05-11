import { Link } from "react-router-dom"
import { Article } from "../types"

export default function ArticleCardSimple({
    articleId,
    title,
    perex,
    imageId,
    createdAt,
    lastUpdatedAt,
}: Article) {
    const linkToDetail = `article/${articleId}`
    return (
        <article>
            <Link to={linkToDetail} className="w-64 h-64">
                <h3 className="textstyle-head-3 text-black-400">{title}</h3>
                <p>{perex}</p>
            </Link>
        </article>
    )
}
