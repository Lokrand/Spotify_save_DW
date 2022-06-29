import React, { Component } from "react";
import Cookies from 'universal-cookie';
// import { Link } from "react-router-dom";
// import {
//     BrowserRouter as Router,
//     Routes,
//     useRoutes,
//     Route,
//     useNavigate,
// } from 'react-router-dom';

import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import BlobButton from "./components/BlobButton";

import * as cookieHandle from "./components/utils/cookieHandle"
import ClickButton from "./components/ClickButton";

export const App = () => {
// handle cookies
    const [userPath, setUserPath] = React.useState("/login");
    React.useEffect(() => {
        if (cookieHandle.isValidCookies(cookies)) {
            cookieHandle.getUserPath(cookies)
                .then((res) => {
                    setUserPath(res)
                })
                .catch((err: string) => {
                    console.warn("Cant get user info " + err);
                    setUserPath("/login")
                })
        } else {
            setUserPath("/login")
        }
    }, [])
    const cookiesLib = new Cookies()
    const cookies = cookiesLib.getAll()

    const ButtonStyle = "mr-3"
    return (
        <>
            <header className="flex justify-between">
                <Header
                    title='Home'
                />
                <div className="mt-4 mr-4">
                    <Button
                        style={ButtonStyle}
                        title="Dev User"
                        link="/user/123"
                        color="bg-red-700"
                    />
                    <Button
                        style={ButtonStyle}
                        title="Help"
                        link="/help" //use useNavigate
                        color={undefined}
                    />
                    <Button
                        style={ButtonStyle}
                        title="Login"
                        link="/login"
                        color={undefined}
                    />
                </div>
            </header>
            <main className="">
                <BlobButton
                    title="Save DW"
                    link={ userPath }
                />
            </main>
            <Footer
                style={undefined}
            />
        </>
    )
}

export default App;
