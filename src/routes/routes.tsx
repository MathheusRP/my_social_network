import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Messages } from "../pages/messages";

export const AllRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/messages" element={<Messages />} />
        </Routes>
    )
}