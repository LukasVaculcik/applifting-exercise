import ArticleCard from "../component/ArticleCard"
import { Article } from "../types"

const mockArticle: Article = {
    articleId: "1",
    title: "Hola",
    perex: "lorem",
    imageId: "img1",
    createdAt: "2022-05-05",
    lastUpdatedAt: "2022-05-05",
}

const mockArticleList = [mockArticle, mockArticle, mockArticle]

export default function Home() {
    return (
        <div className="container-lg">
            <main className="max-w-[760px]">
                <h1 className="textstyle-head-1 text-black mb-14">
                    Recent articles
                </h1>
                <div className="flex flex-col gap-8">
                    {mockArticleList.map((item, index) => (
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
