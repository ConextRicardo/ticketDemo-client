export const useLocalStorage = (value = {}) => {
  const removeItem = () => {
    localStorage.removeItem("user");
  };

  const addItem = (value) => {
    localStorage.setItem("user", JSON.stringify(value));
  };
  const getItem = () => {
    return JSON.parse(localStorage.getItem("user"));
  };

  return { removeItem, addItem, getItem };
};
