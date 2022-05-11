import { ArticleInfoProps } from "../types"

export default function ArticleInfo({ author, datetime }: ArticleInfoProps) {
    return (
        <div className="text-gray-400 flex gap-3">
            <span>{author}</span>
            <span>•</span>
            <time dateTime="">{datetime.toLocaleDateString("cs-CZ")}</time>
        </div>
    )
}
