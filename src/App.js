import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import { useLocalStorage } from "./components/hooks/useLocalStorage";
import Auth from "./components/pages/Auth";
import History from "./components/pages/History";
import Home from "./components/pages/Home";
import NewTicket from "./components/pages/NewTicket";
import Queue from "./components/pages/Queue";

const App = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const { getItem, exitModal } = useLocalStorage();

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

  const showModalHandler = (value) => {
    setShowModal(value);
    value === false ? exitModal() : setShowModal(true);
  };

  const component = isAuth ? (
    <Home
      signOutHandler={signOutHandler}
      showModal={showModal}
      showModalHandler={showModalHandler}
    />
  ) : (
    <Navigate to={"/auth"} />
  );
  return (
    <Routes>
      <Route path="/" element={component}>
        <Route
          path="queue"
          element={<Queue showModalHandler={showModalHandler} />}
        />
        <Route
          path="history"
          element={<History showModalHandler={showModalHandler} />}
        />
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
