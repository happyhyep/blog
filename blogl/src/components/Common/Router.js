import React from "react"
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "../../Pages/Home";
import Introduce from "../../Pages/Introduce";
import Awards from "../../Pages/Awards";
import Projects from "../../Pages/Projects";
import Activities from "../../Pages/Activity";
import Gallery from "../../Pages/Gallery";

export default function Router() {
    return(
        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/introduce' element={<Introduce />} />
                <Route path='/awards' element={<Awards />} />
                <Route path='/projects' element={<Projects />} />
                <Route path='/activities' element={<Activities />} />
                <Route path='/gallery' element={<Gallery />} />
            </Routes>
        </BrowserRouter>

    )
}
