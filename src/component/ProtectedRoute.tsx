import { Navigate } from "react-router-dom"
import { useAppSelector } from "../hooks"
import { ProtectedRouteProps } from "../types"

export default function ProtectedRoute({ children }: ProtectedRouteProps) {
    const isLogged = useAppSelector((state) => state.login.isLogged)
    if (!isLogged) {
        return <Navigate to="/admin/login" replace />
    }

    return children
}
