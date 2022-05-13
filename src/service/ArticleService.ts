import { Article } from "../types"
import axiosApi from "./axiosApi"

// export function fetchAllArticles() {
//     axiosApi
//         .get("/articles")
//         .then((response) => response)
//         .catch((error) => console.log(error.message))
// }

export async function fetchAllArticles() {
    try {
        const response = await axiosApi.get("/articles")
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export function createArticle(data: any) {
    axiosApi
        .post("/articles", data)
        .then((response) => response.data)
        .catch((error) => console.log(error))
}
