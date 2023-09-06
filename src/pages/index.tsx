
import Navbar from "../../components/Navbar";
import {useState} from "react";
import MenuOverlay from "../../components/MenuOverlay";
import Features from "../../components/Features";

export default function Home() {
    const [navbarOpen, setNavbarOpen] = useState(false);

    return (
        <div>
            <Navbar navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></Navbar>
            <MenuOverlay navbarOpen={navbarOpen} setNavbarOpen={setNavbarOpen}></MenuOverlay>
        <div className={"bgimg steam_deck_hero transform duration-300"}>



            <div className={"text-7xl font-black flex flex-col flex-grow justify-center items-center px-10 h-full text-white"}>Bazzite, <br/>the immutable gaming powerhouse.


            </div>

        </div>
            <Features/>
        </div>

    )


// backgroundimg bg-fixed transition-all duration-300 hover:shadow-2xl hover:transition-all hover:duration-300 hover:border-black " +
//                         "w-1/2 p-4 rounded-3xl  hover:text-white text-black text-center border-blue-500 border-2 flex items-center justify-center flex-col flex-col"
}

