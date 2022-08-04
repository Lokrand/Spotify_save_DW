import React, { Component } from "react";
import Cookies from "universal-cookie";

import Header from "./components/Header";
import Footer from "./components/Footer";
import Button from "./components/Button";
import BlobButton from "./components/BlobButton";
import { Link, Route, Routes } from "react-router-dom";
import * as cookieHandle from "./components/utils/cookieHandle";
import { AboutPage } from "./pages/AboutPage";
import UserApp from "./userApp";
export const App = () => {
  // handle cookies
  const [userPath, setUserPath] = React.useState("/login");
  React.useEffect(() => {
    if (cookieHandle.isValidCookies(cookies)) {
      cookieHandle
        .getUserPath(cookies)
        .then((res) => {
          setUserPath(res);
        })
        .catch((err: string) => {
          console.warn("Cant get user info " + err);
          setUserPath("/login");
        });
    } else {
      setUserPath("/login");
    }
  }, []);
  const cookiesLib = new Cookies();
  const cookies = cookiesLib.getAll();

  const ButtonStyle = "mr-3 text-neutral-900 ";
  return (
            <>
						<header className="flex justify-between">
              <Header title="Home" />
              <div className="mt-4 mr-4">
                <Link to="/user/123" className={ButtonStyle}>
                  Dev User
                </Link>
                <Link to="/help" className={ButtonStyle}>
                  Help
                </Link>
                <Link to="/login" className={ButtonStyle}>
                  Login
                </Link>
              </div>
            </header>
    <Routes>
      <Route
        path="/"
        element={
          <>
            <div className="min-h-screen">
              <main className="">
                <BlobButton title="Save DW" link={userPath} />
              </main>
            </div>
            <Footer style={"fixed bottom-0"} />
          </>
        }
      ></Route>
      <Route path="/help" element={<AboutPage />}></Route>
			<Route path="/user/123" element={<UserApp />}></Route>
			<Route path="/login" element={<AboutPage />}></Route>
    </Routes></>
  );
};

export default App;
