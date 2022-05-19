import ArticleCard from "../component/ArticleCard"
import { useAppSelector } from "../hooks"
import { Article } from "../types"

export default function Home() {
    const articles: Article[] = useAppSelector((state) => state.articles.items)

    return (
        <div className="container-lg">
            <main className="max-w-[760px]">
                <h1 className="textstyle-head-1 text-black mb-14">
                    Recent articles
                </h1>
                <div className="flex flex-col gap-8">
                    {articles.map((item, index) => (
                        <ArticleCard key={index} article={item} />
                    ))}
                </div>
            </main>
        </div>
    )
}
