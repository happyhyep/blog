import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../../Pages/Home";
import Introduce from "../../Pages/Introduce";
import Awards from "../../Pages/Awards";
import Projects from "../../Pages/Projects";
import Activities from "../../Pages/Activity";
import Gallery from "../../Pages/Gallery";
import ScrollToTop from "./ScorollToTop";

export default function Router() {
    return(
        <BrowserRouter>
            <ScrollToTop />
            <Routes>
                <Route exact path={process.env.PUBLIC_URL + '/'} element={<Home />} />
                <Route path={process.env.PUBLIC_URL + '/introduce'} element={<Introduce />} />
                <Route path={process.env.PUBLIC_URL + '/awards'} element={<Awards />} />
                <Route path={process.env.PUBLIC_URL + '/projects'} element={<Projects />} />
                <Route path={process.env.PUBLIC_URL + '/activities'} element={<Activities />} />
                <Route path={process.env.PUBLIC_URL + '/gallery'} element={<Gallery />} />
            </Routes>
        </BrowserRouter>

    )
}
