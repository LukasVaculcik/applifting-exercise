import { useNavigate } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks"
import { setIsLogged, setErrorMessages } from "../reducer/LoginReducer"

export default function LoginForm() {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const errorMessages = useAppSelector((state) => state.login.errorMessages)

    // Mockup user database
    const userDatabase = [
        {
            username: "admin@admin.com",
            password: "pass1",
        },
    ]

    const errors = {
        uname: "Invalid email",
        pass: "Invalid password",
    }

    const handleSubmit = (event: any) => {
        // Prevent page reload
        event.preventDefault()

        // Submited values
        const uname = event.target.email.value
        const pass = event.target.password.value

        // Find user login info
        const userData = userDatabase.find((user) => user.username === uname)

        // Compare user info
        if (userData) {
            if (userData.password !== pass) {
                // Invalid password
                dispatch(
                    setErrorMessages({ name: "pass", message: errors.pass })
                )
            } else {
                dispatch(setIsLogged(true))
                navigate("/admin/articles")
            }
        } else {
            // Username not found
            dispatch(setErrorMessages({ name: "uname", message: errors.uname }))
        }
        console.log
    }

    // Generate JSX code for error message
    const renderErrorMessage = (name: string) =>
        name === errorMessages.name && (
            <div className="text-red">{errorMessages.message}</div>
        )

    return (
        <form
            className="p-8 bg-white shadow-xl flex flex-col gap-8 w-full max-w-96 rounded-lg"
            onSubmit={handleSubmit}
        >
            <h1 className="textstyle-head-1">Log In</h1>
            <div className="flex flex-col gap-2">
                <label htmlFor="email" className="text-black">
                    Email
                </label>
                <input type="email" id="email" name="email" />
                {renderErrorMessage("uname")}
            </div>
            <div className="flex flex-col gap-2">
                <label htmlFor="password" className="text-black">
                    Password
                </label>
                <input type="text" id="password" name="password" />
                {renderErrorMessage("pass")}
            </div>
            <input
                type="submit"
                value="Log In"
                className="bg-blue-400 hover:bg-blue-500 text-white rounded-md px-3 py-2 transition-colors ml-auto"
            />
        </form>
    )
}
