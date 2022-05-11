import { useState } from "react"
import ArticleInfo from "../component/ArticleInfo"
import Comments from "../component/Comments"

export default function ArticleDetail() {
    // const names = ["yo"]
    // const [likes, setLikes] = useState(0)

    // function handleClick() {
    //     setLikes(likes + 1)
    // }

    return (
        <div className="container-lg flex gap-8">
            <main className="w-70/100">
                <article>
                    <h1 className="textstyle-head-1 text-black mb-14">title</h1>
                    <ArticleInfo
                        author="name of the author here"
                        datetime={new Date()}
                    />
                    <img src="" alt="" />
                    <p>lorem ipsum</p>
                </article>
                <Comments />
            </main>
            <aside className="w-30/100">
                <h2 className="textstyle-head-2">Related articles</h2>
            </aside>
        </div>
    )
}
