// set to local storage email, pass, and user type ["NOC", "OP", "ST"]
import axios from "axios";
import { useLocalStorage } from "./useLocalStorage";

export const useAuthUser = () => {
  const { addItem, removeItem } = useLocalStorage();
  const login = async (email, password) => {
    try {
      const result = await axios.post("http://localhost:3001/auth", {
        email,
        password,
      });
      addItem(result.data);
      return result.data;
    } catch (err) {
      return err.response.data;
    }
  };

  const logout = () => {
    removeItem();
  };

  return { login, logout };
};
