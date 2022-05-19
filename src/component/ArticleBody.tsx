import { Article, ArticleBodyProps } from "../types"
import ArticleInfo from "./ArticleInfo"
import Comments from "./Comments"

export default function ArticleBody({ article }: ArticleBodyProps) {
    return (
        <>
            <article className="flex flex-col gap-4">
                <h1 className="textstyle-head-1 text-black mb-10">
                    {article.title}
                </h1>
                <ArticleInfo
                    author="name of the author here"
                    datetime={new Date(article.createdAt)}
                />
                <img src="" alt="" />
                <div>{article.perex}</div>
            </article>
            <Comments />
        </>
    )
}
