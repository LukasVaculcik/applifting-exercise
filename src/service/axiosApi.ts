import axios from "axios"

const userName = "elvis777"
const userPassword = "BV4eDhY$%7S7LP8"
const apiKey = "a6f4eb67-7420-4182-84d3-26131509b08d"

const axiosApi = axios.create({
    baseURL: "https://fullstack.exercise.applifting.cz",
    headers: {
        "Content-type": "application/json",
        "X-API-KEY": apiKey,
    },
})

// Request interceptor for API calls
axiosApi.interceptors.request.use(
    async (config) => {
        const accessToken =
            window.localStorage.getItem("accessToken") ??
            (await fetchAccessToken())
        axios.defaults.headers.common.Authorization = accessToken
        return config
    },
    (error) => {
        Promise.reject(error)
    }
)

// Response interceptor for API calls
axiosApi.interceptors.response.use(
    (response) => response,
    async (error) => {
        const originalRequest = error.config
        console.log(error)
        if (error.response.status === 401 && !originalRequest._retry) {
            originalRequest._retry = true
            const accessToken = await fetchAccessToken()
            axios.defaults.headers.common.Authorization = accessToken
            return axiosApi(originalRequest)
        }
        return Promise.reject(error)
    }
)

export async function fetchAccessToken() {
    try {
        const response = await axiosApi.post("/login", {
            username: userName,
            password: userPassword,
        })
        window.localStorage.setItem("accessToken", response.data.access_token)

        console.log(response)
        return response.data.access_token
    } catch (error) {
        console.log(error)
    }
}

export async function fetchApiKey() {
    try {
        const response = await axiosApi.post("/tenants", {
            name: userName,
            password: userPassword,
        })
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

export async function fetchAllArticles() {
    try {
        const response = await axiosApi.get("/articles")
        console.log(response)
    } catch (error) {
        console.log(error)
    }
}

// apikey: "a6f4eb67-7420-4182-84d3-26131509b08d"
// tenantid: "7f0b4ee9-46de-4927-a361-51090b0e72f4"

export default axiosApi
