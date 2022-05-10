import { Outlet } from "react-router-dom"
import PageHeader from "../PageHeader/PageHeader"

export default function PageLayout() {
    return (
        <main>
            <PageHeader />
            <Outlet />
        </main>
    )
}
