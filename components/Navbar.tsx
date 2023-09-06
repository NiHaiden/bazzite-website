import Image from "next/image";
import Link from "next/link";

// @ts-ignore
export default function Navbar({navbarOpen, setNavbarOpen}) {
    return (
        <header>
            <nav
                className={"flex flex-wrap flex-row navbar items-center pl-2 w-full py-4 md:py-4 md:pl-4 md:pr-4 text-lg gap-4"}>
                <div>
                    <Link href="/" className={"gap-1"}>
                        <Image src={"/logo.png"} width={85} height={60} alt={"Bazzite Logo"}></Image>
                    </Link>
                </div>


                <button
                    className="md:hidden flex top-0 right-0 z-20 relative w-20 h-10 text-white focus:outline-none"
                    onClick={() => setNavbarOpen(!navbarOpen)}
                >
                    <div className="absolute w-10 transform -translate-x-1/2 -translate-y-1/2 left-1.5 top-1/2">
                        <span
                            className={`absolute h-0.5 w-10 bg-white transform transition duration-300 ease-in-out ${navbarOpen ? "rotate-45 delay-200 bg-white" : "-translate-y-1.5"
                            }`}
                        ></span>
                        <span
                            className={`absolute h-0.5 bg-white transform transition-all duration-200 ease-in-out ${navbarOpen ? "w-0 opacity-50 bg-white" : "w-10 delay-200 opacity-100"
                            }`}
                        ></span>
                        <span
                            className={`absolute h-0.5 w-10 bg-white transform transition duration-300 ease-in-out ${navbarOpen ? "-rotate-45 delay-200 bg-white" : "translate-y-1.5"
                            }`}
                        ></span>
                    </div>
                </button>

                <div className="hidden w-full md:flex md:items-center md:w-auto" id="menu">
                    <ul
                        className="
              pt-10
              text-2xl text-black
              md:flex
              md:justify-between
              md:pt-0
              hover:text-white
              gap-1
              "
                    >
                        <li>
                            <a className="p-1.5 py-2 text-black block group transition duration-300 linkslide hover:text-white p-3 rounded-3xl"
                               href="aboutme"
                            >
                                <div
                                    className={"text-white bg-clip-text p-1.5"}>Features
                                </div>
                            </a
                            >
                        </li>
                        <li>
                            <a className=" py-2 text-white block group transition duration-300 linkslide hover:text-white p-3"
                               href="hobbies"
                            >
                                <div
                                    className={"text-white  bg-clip-text bg-gradient-to-br from-startingblue to-endingpurple hover:text-white p-1.5"}>Docs
                                </div>
                            </a
                            >
                        </li>
                        <li>
                            <a className="  py-2 text-white block group transition duration-300 linkslide hover:text-white p-3"
                               href="https://appwrite.niklas.tech/v1/storage/buckets/64ef6a6d3dd6478ea89a/files/64ef6a75a9590e107064/view?project=64b6b4ca36481febbb70&mode=admin"
                            >
                                <div
                                    className={"text-white  bg-clip-text bg-gradient-to-br from-startingblue to-endingpurple hover:text-white p-1.5"}>Contribute
                                </div>
                            </a
                            >
                        </li>


                    </ul>
                </div>
            </nav>
        </header>

    );
}

function closeOpenMenu() {
    const button = document.querySelector('#menubtn');
    const menu = document.querySelector('#menu');

    // @ts-ignore
    menu.classList.toggle('hidden');
    // @ts-ignore
    menu.style.zIndex = 999;
}