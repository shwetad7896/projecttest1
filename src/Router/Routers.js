import React from 'react'
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from '../component/Home'
import Properties from '../component/props';
import CityLists from '../component/Citylist';

function Routers() {
    return (

        <BrowserRouter>
            <Routes>
                <Route exact path='/' element={<CityLists />} />
                <Route exact path='props' element={<Properties />} />
                <Route exact path='Citylist' element={<CityLists />} />
            </Routes>
        </BrowserRouter>

    )
}

export default Routers