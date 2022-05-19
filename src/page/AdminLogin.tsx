import { useState } from "react"
import LoginForm from "../component/LoginForm"

export default function AdminLogin() {
    return (
        <main>
            <section>
                <div className="container-lg flex justify-center">
                    <LoginForm />
                </div>
            </section>
        </main>
    )
}
