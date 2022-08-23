import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useLocalStorage } from "./components/hooks/useLocalStorage";
import Auth from "./components/pages/Auth";
import Home from "./components/pages/Home";
import NewTicket from "./components/pages/NewTicket";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const { getItem } = useLocalStorage();

  useEffect(() => {
    const item = getItem();
    item ? setIsAuth(true) : setIsAuth(false);
  }, [getItem, setIsAuth]);

  const signOutHandler = () => {
    setIsAuth(false);
  };

  const signInHandler = () => {
    setIsAuth(true);
  };

  const component = isAuth ? (
    <Home signOutHandler={signOutHandler} />
  ) : (
    <Navigate to={"/auth"} />
  );
  return (
    <Routes>
      <Route path="/" element={component}>
        <Route path="new-ticket" element={<NewTicket />} />
      </Route>
      <Route
        path="/auth"
        element={<Auth status={isAuth} signInHandler={signInHandler} />}
      />
    </Routes>
  );
};

export default App;
