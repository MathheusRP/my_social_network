import { Routes, Route } from "react-router-dom";
import { Dashboard } from "../pages/dashboard";

export const AllRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Dashboard />} />
        </Routes>
    )
}