import Title from "./Title";
import Logo from "../../assets/react.svg";
import "../../assets/styles/Header.css"

function Header() {
    return (
        <header>
            <img src={Logo} alt="logo de react"/>
            <Title titulo="Practica individual"/>
            <Title titulo="Jesus Ignacio Velazquez Hernandez"/>
        </header>
    );
}

export default Header;