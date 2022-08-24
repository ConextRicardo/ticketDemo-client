import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useNavigate, NavLink } from "react-router-dom";
import { useAuthUser } from "../hooks/useAuthUser";

const Home = ({ signOutHandler }) => {
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
        { name: "por confirmar", to: "/to-confirm" },
      ],
      OP: [
        { name: "historial", to: "/history" },
        { name: "pendientes", to: "/queue" },
        { name: "por confirmar", to: "/to-confirm" },
      ],
      ST: [
        { name: "historial", to: "/history" },
        { name: "pendientes", to: "/queue" },
        { name: "nueva averia", to: "/new-ticket" },
      ],
      default: [
        { name: "", to: "/" },
        { name: "", to: "/" },
        { name: "", to: "/" },
      ],
    };
    return options[user] || options.default;
  };

  return (
    <div>
      <aside>
        <section>
          <div>
            <div>{userData?.user}</div>
            <div>{userData?.email}</div>
          </div>
          <button onClick={logoutHandler}>logout</button>
        </section>
        <section>
          {getUserOptions(userData?.user).map((option) => (
            <NavLink to={option.to}>{option.name}</NavLink>
          ))}
        </section>
      </aside>
      <Outlet />
    </div>
  );
};

export default Home;
