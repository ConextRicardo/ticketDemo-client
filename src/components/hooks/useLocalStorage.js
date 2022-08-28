export const useLocalStorage = (value = {}) => {
  const removeItem = () => {
    localStorage.removeItem("user");
  };

  const addItem = (value) => {
    localStorage.setItem("user", JSON.stringify(value));
  };
  const getItem = () => {
    const data = JSON.parse(localStorage.getItem("user"));
    return data;
  };
  const setModal = (data, userType) => {
    const value = { ...data, userType };
    localStorage.setItem("modal", JSON.stringify(value));
  };

  const getModal = () => {
    return JSON.parse(localStorage.getItem("modal"));
  };

  const exitModal = () => {
    localStorage.removeItem("modal");
  };

  return { removeItem, addItem, getItem, setModal, exitModal, getModal };
};
