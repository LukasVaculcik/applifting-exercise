import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { v1 as uuidv1 } from "uuid"
import { useAppDispatch, useAppSelector } from "../hooks"
import { createArticle, updateArticle } from "../service/ArticleService"
import { fetchImage, uploadImage } from "../service/ImageService"
import { ArticleFormProps } from "../types"

export default function ArticleForm({ article }: ArticleFormProps) {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const [selectedFile, setSelectedFile] = useState(null)
    console.log(article)
    const handleSubmit = (event: any) => {
        event.preventDefault()

        if (article) {
            let imageuuId = article.imageId
            if (selectedFile) {
                const formData = new FormData()
                formData.append("image", selectedFile)
                uploadImage(formData).then((data) => {
                    console.log(data)
                    imageuuId = data[0].imageId
                })
            }

            const dateUpdated = new Date().toUTCString()
            const data = {
                articleId: article.articleId,
                imageId: imageuuId,
                title: event.target.title.value,
                perex: event.target.perex.value,
                createdAt: article.createdAt,
                lastUpdatedAt: dateUpdated,
            }
            updateArticle(data).then(() => {
                navigate("/admin/articles")
            })
        } else {
            let imageuuId = null
            if (selectedFile) {
                const formData = new FormData()
                formData.append("image", selectedFile)
                uploadImage(formData).then((data) => {
                    console.log(data)
                    imageuuId = data[0].imageId
                })
            }

            const dateCreated = new Date().toUTCString()
            const data = {
                articleId: uuidv1(),
                imageId: imageuuId,
                title: event.target.title.value,
                perex: event.target.perex.value,
                createdAt: dateCreated,
                lastUpdatedAt: dateCreated,
            }

            createArticle(data).then(() => {
                navigate("/admin/articles")
            })
        }
    }

    // const formData = new FormData()
    // formData.append("image", event.target.image.files[0])
    // uploadImage(event.target.image.files[0])

    const handleFileSelect = (event: any) => {
        setSelectedFile(event.target.files[0])
    }

    const formTitle = article ? "Edit article" : "Create new article"
    const img = selectedFile
    if (article) {
        fetchImage(article.imageId).then((data) => {
            // img = data
            console.log(data)
        })
    }

    return (
        <form onSubmit={handleSubmit}>
            <div className="flex gap-8 items-center mb-16">
                <h1 className="textstyle-head-1">{formTitle}</h1>
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
                    <input
                        type="text"
                        id="title"
                        name="title"
                        defaultValue={article ? article.title : ""}
                    />
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
                        onChange={handleFileSelect}
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
                        defaultValue={article ? article.perex : ""}
                    ></textarea>
                </div>
            </div>
        </form>
    )
}
