import { Routes, Route } from "react-router-dom";
import { Home } from "../pages/home";
import { Messages } from "../pages/messages";
import { Photo } from "../components/photo";

export const AllRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Home />} >
                <Route path="/photo" element={<Photo />} />
            </Route>
            <Route path="/messages" element={<Messages />} />
        </Routes>
    )
}