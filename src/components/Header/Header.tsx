//doesnt need import react
'use client';
import Link from "next/link";
import {FaUserCircle} from "react-icons/fa"
import {MdDarkMode, MdOutlineLightMode} from "react-icons/md"
import {useContext} from "react";
import ThemeContext from "@/context/themeContext";

const Header = () => {

    //import context for theme context, use in condition to render icons
    const {darkTheme, setDarkTheme} = useContext(ThemeContext);

    return (
        <header
            className="py-10 px-4 container mx-auto text-xl flex flex-wrap md:flex-nowrap items-center justify-between"
        >
            <div className="flex items-center w-full md:2/3">
                <Link href={"/"}
                    //*color in class is configured in tailwind.config
                      className={"font-black text-tertiary-light"}>HOTELS</Link>
                <ul className="flex items-center ml-5"></ul>
                <li className={"flex items-center"}><Link href={"/auth"}>
                    <FaUserCircle className={'cursor-pointer'}/>
                </Link>
                </li>
                <li className={"ml-2"}>
                    {darkTheme
                        ? <MdOutlineLightMode className={"cursor-pointer"} onClick={() => {
                            setDarkTheme(false)
                            localStorage.removeItem('hotel-theme')
                        }}/>
                        : <MdDarkMode className={"cursor-pointer"} onClick={() => {
                            setDarkTheme(true)
                            localStorage.setItem('hotel-theme', "true");
                        }}/>}
                </li>
            </div>

            <ul className={'flex items-center justify-between w-full md:w-1/3 mt-4'}>
                <li className={'hover:-translate-y-5 duration-500 transition-all'}>
                    <Link href={'/'}>Home</Link>
                </li>
                <li className={'hover:-translate-y-5 duration-500 transition-all'}>
                    <Link href={'/'}>Rooms</Link>
                </li>
                <li className={'hover:-translate-y-5 duration-500 transition-all'}>
                    <Link href={'/'}>Contact</Link>
                </li>
            </ul>
        </header>
    )
}
export default Header;