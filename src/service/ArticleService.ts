import axiosApi from "./axiosApi"

export function fetchAllArticles() {
    return axiosApi
        .get("/articles")
        .then((response) => response.data)
        .catch((error) => console.log(error))
}

export function createArticle(data: any) {
    return axiosApi
        .post("/articles", data)
        .then((response) => response.data)
        .catch((error) => console.log(error))
}

export function deleteArticle(articleId: string) {
    return axiosApi
        .delete(`/articles/${articleId}`)
        .then((response) => response)
        .catch((error) => console.log(error))
}
