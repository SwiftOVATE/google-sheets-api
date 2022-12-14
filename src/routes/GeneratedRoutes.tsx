import Prism from "prismjs";
import { useEffect } from "react";
import "prismjs/themes/prism.css";
import "../style/App.css";
import AppScript from "../data/AppScript";
import { Routes, Route } from "react-router-dom"
import { _Generated } from '../pages/_Generated'

export const GeneratedRoutes = () => {

    useEffect(() => {
        Prism.highlightAll();
    }, []);

    //read full url
    const url = window.location.href;

    //split url by /
    const urlSplit = url.split("/");

    //get last item in array
    const name = urlSplit[urlSplit.length - 1];
    const Name = name.charAt(0).toUpperCase() + name.slice(1);

    const finalUrl = `/${name}`

    return (
        <Routes>
            <Route path="/*" element={<_Generated finalUrl={finalUrl} />} />
            <Route path="/AppScript/*" element={<AppScript Name={Name} />} />
        </Routes>
    )
}   