import { useEffect } from "react"
import ArticleCard from "../component/ArticleCard"
import { useAppDispatch, useAppSelector } from "../hooks"
import { setArticles } from "../reducer/ArticleReducer"
import { fetchAllArticles } from "../service/ArticleService"
import { Article } from "../types"

export default function Home() {
    const dispatch = useAppDispatch()
    useEffect(() => {
        fetchAllArticles().then((articles) => {
            dispatch(setArticles(articles))
        })
    }, [])

    const articles: Article[] = useAppSelector((state) => state.articles.items)
    console.log(articles)

    return (
        <div className="container-lg">
            <main className="max-w-[760px]">
                <h1 className="textstyle-head-1 text-black mb-14">
                    Recent articles
                </h1>
                <div className="flex flex-col gap-8">
                    {articles.map((item, index) => (
                        <ArticleCard
                            key={index}
                            articleId={item.articleId}
                            title={item.title}
                            perex={item.perex}
                            imageId={item.imageId}
                            createdAt={item.createdAt}
                            lastUpdatedAt={item.lastUpdatedAt}
                        />
                    ))}
                </div>
            </main>
        </div>
    )
}
