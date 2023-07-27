import { MenuInDashboardStyle } from "./style";
import { Link } from "react-router-dom";

import { BsFillGearFill } from "react-icons/bs"
import { AiOutlineHome, AiOutlineSave } from "react-icons/ai"
import { LiaUserFriendsSolid, LiaLinkSolid } from "react-icons/lia"
import { FaImages } from "react-icons/fa"
import { CgProfile } from "react-icons/cg"

export const MenuInDashboard = () => {

    return (
        <MenuInDashboardStyle className="sectionMenu">
            <div className="owner">
                <img src="https://flowgames.gg/wp-content/uploads/2023/02/l-intro-1657287618-1044x587.jpg" alt="foto de perdil" />
                <div className="name">
                    <h3>Matheus Rocha</h3>
                    <p>@Matheus_rp</p>
                </div>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={"/teste"}>
                            <CgProfile className="icon" />
                            <p>Meu perfil</p>
                        </Link>

                    </li>
                    <li>
                        <Link to={"/teste"}>
                            <AiOutlineHome className="icon" />
                            <p>Home</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/teste"}>
                            <LiaUserFriendsSolid className="icon" />
                            <p>Amigos</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/teste"}>
                            <FaImages className="icon" />
                            <p>Fotos</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/teste"}>
                            <LiaLinkSolid className="icon" />
                            <p>Links</p>
                        </Link>
                    </li>
                    <li>
                        <Link to={"/teste"}>
                            <AiOutlineSave className="icon" />
                            <p>Salvos</p>
                        </Link>
                    </li>
                    <li className="borderless">
                        <Link to={"/teste"}>
                            <BsFillGearFill className="icon" />
                            <p>Configurações</p>
                        </Link>
                    </li>
                </ul>
            </nav>
        </MenuInDashboardStyle>
    )
}