import { createSlice } from "@reduxjs/toolkit"

export const LoginReducer = createSlice({
    name: "login",
    initialState: {
        isLogged: false,
        errorMessages: { name: "", message: "" },
    },
    reducers: {
        setIsLogged: (state, action) => {
            state.isLogged = action.payload
        },
        setErrorMessages: (state, action) => {
            state.errorMessages = {
                name: action.payload.name,
                message: action.payload.message,
            }
        },
    },
})

export const { setIsLogged, setErrorMessages } = LoginReducer.actions
export default LoginReducer.reducer

// Usage
// const dispatch = useAppDispatch()
// dispatch(refreshToken(response.data.access_token))
