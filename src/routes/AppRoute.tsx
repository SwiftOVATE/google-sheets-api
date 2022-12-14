import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header } from "../components/Header"
import { Form } from "../pages/Form"
import { Generate } from "../pages/Generated"
import { Home } from "../pages/Home"

export const AppRoute = () => {
    return (
        <div>
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/google-sheets-api/" element={<Home />} />
                    <Route path="/google-sheets-api/Form" element={<Form />} />
                    <Route path="/google-sheets-api/generate" element={<Generate />} />
                    <Route path="/google-sheets-api/generate/*" element={<Generate />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}