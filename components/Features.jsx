import Navbar from "./Navbar";
import MenuOverlay from "./MenuOverlay";
import {useState} from "react";

export default function Features() {
    const [navbarOpen, setNavbarOpen] = useState(false);
    return (
        <div className={"bgimg bg-gradient-to-r from-bazzite-dark-blue to-bazzite-lighter-blue"}>


            <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></Navbar>
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></MenuOverlay>
            Hello World.
        </div>
    )
}