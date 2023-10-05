import React from "react";
import {Routes,Route} from 'react-router-dom';
import Create from "../Components/create";

import Delete from "../Components/delete";
import Read from "../Components/read";
import Update from "../Components/update";
export default function Reactcontent()
{
    return(
        <Routes>
            <Route path="/create" element={<Create/>}/>
            <Route path="/" element={<Delete/>}/>
            <Route path="/update" element={<Update/>}/>
            <Route path="/read" element={<Read/>}/>
        </Routes>
    )
}