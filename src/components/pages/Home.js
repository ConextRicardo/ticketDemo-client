import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "../hooks/useAuthUser";
import {
  AsideContent,
  HomeAside,
  HomeContainer,
  HomeContent,
  HomeLinks,
  LogoutButton,
} from "./HomeStyles";
import Modal from "./Modal";

const Home = ({ signOutHandler, showModal, showModalHandler }) => {
  const [userData, setUserData] = useState({});
  const { logout } = useAuthUser();
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.getItem("user")
      ? setUserData(JSON.parse(localStorage.getItem("user")))
      : navigate("/auth", { replace: true });
  }, [navigate]);

  const logoutHandler = async () => {
    logout();
    signOutHandler();
  };

  const getUserOptions = (user) => {
    const options = {
      NOC: [
        { name: "historial", to: "/history" },
        { name: "pendientes", to: "/queue" },
      ],
      OP: [
        { name: "historial", to: "/history" },
        { name: "pendientes", to: "/queue" },
      ],
      ST: [
        { name: "historial", to: "/history" },
        { name: "pendientes", to: "/queue" },
        { name: "nueva averia", to: "/new-ticket" },
      ],
      default: [
        { name: "", to: "/" },
        { name: "", to: "/" },
      ],
    };
    return options[user] || options.default;
  };

  return (
    <HomeContainer>
      <HomeAside>
        <section>
          <div>
            <h2>Usuario: {userData?.user}</h2>
          </div>
        </section>
        <AsideContent>
          <h3>Opciones</h3>
          {getUserOptions(userData?.type).map((option, index) => (
            <HomeLinks to={option.to} key={index}>
              {option.name}
            </HomeLinks>
          ))}
        </AsideContent>
        <LogoutButton onClick={logoutHandler}>logout</LogoutButton>
      </HomeAside>
      <HomeContent>
        <Outlet />
      </HomeContent>
      {showModal && <Modal showModalHandler={showModalHandler} />}
    </HomeContainer>
  );
};

export default Home;
