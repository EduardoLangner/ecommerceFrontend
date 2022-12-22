import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './components/Home'
import SignIn from './components/SignIn'
import SignUp from './components/CreateAccount'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/login" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router