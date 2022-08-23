import React from "react";
import { Outlet } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "../hooks/useAuthUser";

const Home = ({ signOutHandler }) => {
  const { logout } = useAuthUser();
  const navigate = useNavigate();

  React.useEffect(() => {
    localStorage.getItem("user")
      ? console.log(
          "get the values from the backend",
          JSON.parse(localStorage.getItem("user"))
        )
      : navigate("/auth", { replace: true });
  });

  const logoutHandler = async () => {
    logout();
    signOutHandler();
  };
  return (
    <div>
      <aside>
        <section>User Info</section>
        <section>User Dedicated Options</section>
        <button onClick={logoutHandler}>logout</button>
      </aside>
      <Outlet />
    </div>
  );
};

export default Home;
