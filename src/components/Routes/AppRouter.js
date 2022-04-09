import React from "react";
import {Route, Routes} from 'react-router-dom';
import Navbar from "../navbar/Navbar";
import Home from "../Home/Home";

const AppRouter = (props) => {
    return(
        <div style={{width: "100%", flexDirection: "column"}}>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>}/>
            </Routes>
        </div>
    )
}

export default AppRouter;