import { spawn } from "child_process"
import { Link } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks"
import { setIsLogged } from "../reducer/LoginReducer"
import Icon from "./Icon"

export default function AdminNavigation() {
    const dispatch = useAppDispatch()
    const isLogged = useAppSelector((state) => state.login.isLogged)

    return (
        <nav className="ml-auto flex gap-4">
            {isLogged ? (
                <>
                    <Link
                        to="/admin/articles"
                        className="textstyle-label text-blue-400 hover:underline"
                    >
                        My Articles
                    </Link>
                    <Link
                        to="/admin/articles/create"
                        className="textstyle-label text-blue-400 hover:underline"
                    >
                        Create Article
                    </Link>
                </>
            ) : (
                <Link
                    to="/admin/login"
                    className="textstyle-label text-blue-400 hover:underline flex gap-2 items-center"
                >
                    <span>Log in</span>
                    <Icon id="arrow-right" width={14} height={10} />
                </Link>
            )}
        </nav>
    )
}
