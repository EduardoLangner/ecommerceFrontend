import React from "react";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import Home from './components/organisms/Home'
import SignIn from './components/organisms/SignIn'
import SignUp from './components/molecules/CreateAccount'

const Router = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="signin" element={<SignIn />} />
                <Route path="/signup" element={<SignUp />} />
            </Routes>
        </BrowserRouter>
    )
}

export default Router