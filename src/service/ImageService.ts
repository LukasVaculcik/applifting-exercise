import axiosApi from "./axiosApi"

export function uploadImage(formData: FormData) {
    return axiosApi
        .post("/images", formData, {
            headers: { "Content-Type": "multipart/form-data" },
        })
        .then((response) => {
            console.log(response)
            return response.data
        })
        .catch((error) => console.log(error))
}

export function fetchImage(imageId: string) {
    return axiosApi
        .get(`/images/${imageId}`)
        .then((response) => response.data)
        .catch((error) => console.log(error))
}

export function deleteImage(imageId: string) {
    return axiosApi
        .delete(`/images/${imageId}`)
        .then((response) => response)
        .catch((error) => console.log(error))
}
