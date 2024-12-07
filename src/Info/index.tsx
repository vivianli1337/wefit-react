import { Route, Routes, Navigate } from "react-router";
import Home from "./Home";
import About from "./About";
import TOC from "./TOC";
// import store from "./store";
import { Provider } from "react-redux";

export default function Info() {
    return (
        // <Provider 
        // store={store}>
            <div className="p-3" id="wd-info">
                <h1>WeFit</h1>
                <TOC />
                <Routes>
                    <Route path="/" element={<Navigate to="Home" />} />
                    <Route path="Home" element={<Home />} />
                    <Route path="About" element={<About />} />
                </Routes>
            </div>
        // </Provider>
    );
}
