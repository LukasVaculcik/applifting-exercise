import { NavLink } from "react-router-dom"
import { NavigationLinkProps } from "../types"

export default function NavigationLink({ link, text }: NavigationLinkProps) {
    return (
        <NavLink
            to={link}
            className={({ isActive }) => {
                const classArr = ["hover:underline"]
                if (isActive) {
                    classArr.push("text-black-400")
                } else {
                    classArr.push("text-gray-400")
                }
                return classArr.join(" ")
            }}
        >
            {text}
        </NavLink>
    )
}
