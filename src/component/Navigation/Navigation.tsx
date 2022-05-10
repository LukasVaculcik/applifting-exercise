import React from "react"
import { Link } from "react-router-dom"

export default function Navigation() {
    return (
        <nav className="flex gap-4">
            <Link to="/">Recent articles</Link>
            <Link to="/about">About</Link>
            <Link to="/login">Log in</Link>
        </nav>
    )
}
