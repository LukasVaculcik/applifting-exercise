import Navigation from "./Navigation"
import AdminNavigation from "./AdminNavigation"

export default function PageHeader() {
    return (
        <header className="bg-gray-100 fixed top-0 left-0 w-full h-14 z-50">
            <div className="container-lg h-full flex gap-4 items-center">
                <img src={"/images/logo.png"} alt="Logo" />
                <Navigation />
                <AdminNavigation />
            </div>
        </header>
    )
}
