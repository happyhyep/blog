import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../../Pages/Home";
import Introduce from "../../Pages/Introduce";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/introduce' element={<Introduce />} />
            </Routes>
        </BrowserRouter>

    )
}
