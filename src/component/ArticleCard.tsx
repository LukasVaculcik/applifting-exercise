import { Link } from "react-router-dom"
import { Article, ArticleCardProps } from "../types"
import ArticleInfo from "./ArticleInfo"

export default function ArticleCard({ article }: ArticleCardProps) {
    const linkToDetail = `/article/${article.articleId}`
    return (
        <article className="flex gap-6">
            <Link to={linkToDetail} className="w-64 h-64">
                <img src="{imageId}" alt="" />
            </Link>
            <div className="flex flex-col gap-4">
                <h2 className="textstyle-head-2 text-black-400">
                    {article.title}
                </h2>
                <ArticleInfo
                    author="name of the author here"
                    datetime={new Date(article.createdAt)}
                />
                <p>{article.perex}</p>
                <div className="flex gap-4 items-center">
                    <Link
                        to={linkToDetail}
                        className="p-2 hover:underline text-blue-400"
                    >
                        Read whole article
                    </Link>
                    <span>comments count</span>
                </div>
            </div>
        </article>
    )
}
