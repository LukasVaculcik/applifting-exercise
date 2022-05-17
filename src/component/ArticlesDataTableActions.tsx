import { deleteArticle } from "../service/ArticleService"
import { ArticlesDataTableActionsProps } from "../types"
import { Link } from "react-router-dom"
import { useAppDispatch } from "../hooks"
import { removeArticle } from "../reducer/ArticleReducer"

export default function ArticlesDataTableActions({
    articleId,
}: ArticlesDataTableActionsProps) {
    const dispatch = useAppDispatch()
    const linkToEdit = `/admin/articles/${articleId}`
    const handleDelete = () => {
        deleteArticle(articleId).then(() => dispatch(removeArticle(articleId)))
    }
    return (
        <div className="flex gap-8">
            <Link to={linkToEdit}>edit</Link>
            <button onClick={handleDelete}>delete</button>
        </div>
    )
}
