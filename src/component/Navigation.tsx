import { NavLink } from "react-router-dom"
import NavigationLink from "./NavigationLink"

export default function Navigation() {
    return (
        <nav className="flex gap-10">
            <NavigationLink link="/" text="Recent Articles" />
            <NavigationLink link="/about" text="About" />
        </nav>
    )
}
