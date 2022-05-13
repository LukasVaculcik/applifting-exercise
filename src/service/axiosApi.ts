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
        let accessToken = window.localStorage.getItem("accessToken") ?? ""
        if (!accessToken) {
            fetchAccessToken()
            accessToken = window.localStorage.getItem("accessToken") ?? ""
        }
        console.log(accessToken)
        // axios.defaults.headers.common.Authorization = accessToken
        config.headers = config.headers ?? {}
        config.headers.Authorization = accessToken
        console.log(config.headers)
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
        if (error.response.status === 403 && !originalRequest._retry) {
            originalRequest._retry = true
            let accessToken = window.localStorage.getItem("accessToken") ?? ""
            if (!accessToken) {
                fetchAccessToken()
                accessToken = window.localStorage.getItem("accessToken") ?? ""
            }
            // axios.defaults.headers.common.Authorization = accessToken
            originalRequest.headers = originalRequest.headers ?? {}
            originalRequest.headers.Authorization = accessToken
            return axiosApi(originalRequest)
        }
        return Promise.reject(error)
    }
)

export function fetchAccessToken() {
    axiosApi
        .post("/login", {
            username: userName,
            password: userPassword,
        })
        .then((response) => {
            window.localStorage.setItem(
                "accessToken",
                response.data.access_token
            )
            return response.data.access_token
        })
        .catch((error) => console.log(error))
}

// apikey: "a6f4eb67-7420-4182-84d3-26131509b08d"
// tenantid: "7f0b4ee9-46de-4927-a361-51090b0e72f4"

export default axiosApi
