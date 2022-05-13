import { v1 as uuidv1 } from "uuid"
import { createArticle } from "../service/ArticleService"
import { Article } from "../types"

const handleSubmit = (event: any) => {
    event.preventDefault()
    const date = new Date().toUTCString()
    const data = {
        articleId: uuidv1(),
        title: event.target.title.value,
        perex: event.target.perex.value,
        createdAt: date,
        lastUpdatedAt: date,
    }
    console.log(data)

    createArticle(data)
}

export default function ArticleForm() {
    return (
        <form onSubmit={handleSubmit}>
            <div className="flex gap-8 items-center mb-16">
                <h1 className="textstyle-head-1">Create new article</h1>
                <input
                    type="submit"
                    value="Publish article"
                    className="bg-blue-400 hover:bg-blue-500 text-white rounded-md px-3 py-2 transition-colors"
                />
            </div>
            <div className="flex flex-col gap-8">
                <div className="flex flex-col gap-2">
                    <label htmlFor="title" className="text-black">
                        Article title
                    </label>
                    <input type="text" id="title" name="title" />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="image" className="text-black">
                        Featured image
                    </label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        accept="image/*"
                        className="bg-gray-400 hover:bg-gray-500 text-white rounded-md px-3 py-2 transition-colors self-start"
                    />
                </div>

                <div className="flex flex-col gap-2">
                    <label htmlFor="perex" className="text-black">
                        Content
                    </label>
                    <textarea
                        name="perex"
                        id="perex"
                        className="min-h-64"
                    ></textarea>
                </div>
            </div>
        </form>
    )
}
