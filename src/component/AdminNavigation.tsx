import { Link } from "react-router-dom"
import Icon from "./Icon"

export default function AdminNavigation() {
    return (
        <nav className="ml-auto">
            <Link
                to="/admin/login"
                className="textstyle-label text-blue-400 hover:underline flex gap-2 items-center"
            >
                <span>Log in</span>
                <Icon id="arrow-right" width={14} height={10} />
            </Link>
        </nav>
    )
}
