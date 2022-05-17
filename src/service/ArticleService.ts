import axiosApi from "./axiosApi"

export function fetchAllArticles() {
    return axiosApi
        .get("/articles")
        .then((response) => response.data)
        .catch((error) => console.log(error))
}

export function createArticle(data: any) {
    axiosApi
        .post("/articles", data)
        .then((response) => response.data)
        .catch((error) => console.log(error))
}
