import { HeaderStyle } from "./style";
import { Link } from "react-router-dom";

import { ImSearch } from "react-icons/im"
import { IoIosNotifications } from "react-icons/io"
import { BsFillChatDotsFill, BsFillGearFill } from "react-icons/bs"
import { AiOutlineHome, AiOutlineSave } from "react-icons/ai"
import { LiaUserFriendsSolid, LiaLinkSolid } from "react-icons/lia"
import { FaImages } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"

import { useState } from "react";



export const Header = () => {

    const [menu, setMenu] = useState<string>("close")

    const statusMenu = () => {
        if (menu == "close") {
            setMenu("open")
        } else {
            setMenu("close")
        }
    }

    return (
        <HeaderStyle>
            <span className="background"></span>
            <h1>Social Network</h1>
            <div className="search">
                <ImSearch className="icon" />
                <input type="text" placeholder="Pesquisar..." />
            </div>
            <div className="profile">
                <Link to={"teste"}>
                    <IoIosNotifications className="icon" />
                </Link>
                <Link to={"messages"}>
                    <BsFillChatDotsFill className="icon" />
                </Link>
                <img onClick={() => statusMenu()} src="https://flowgames.gg/wp-content/uploads/2023/02/l-intro-1657287618-1044x587.jpg" alt="foto de perdil" />
            </div>
            <nav className={menu}>
                <ul>
                    <li>
                        <CgProfile className="icon" />
                        <a href="">Meu perfil</a>
                    </li>
                    <li>
                        <AiOutlineHome className="icon" />
                        <a href="">Home</a>
                    </li>
                    <li>
                        <LiaUserFriendsSolid className="icon" />
                        <a href="">Amigos</a>
                    </li>
                    <li>
                        <FaImages className="icon" />
                        <a href="">Fotos</a>
                    </li>
                    <li>
                        <LiaLinkSolid className="icon" />
                        <a href="">Links</a>
                    </li>
                    <li>
                        <AiOutlineSave className="icon" />
                        <a href="">Salvos</a>
                    </li>
                    <li className="notBoder">
                        <BsFillGearFill className="icon" />
                        <a href="">Configurações</a>
                    </li>
                </ul>
            </nav>
        </HeaderStyle>
    )
}