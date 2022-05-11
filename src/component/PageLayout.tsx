import { Outlet } from "react-router-dom"
import PageHeader from "./PageHeader"

export default function PageLayout() {
    return (
        <>
            <PageHeader />
            <Outlet />
        </>
    )
}
