import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "../hooks/useAuthUser";
import {
  StyledAuth,
  StyledAuthButton,
  StyledAuthForm,
  StyledAuthInput,
} from "./AuthStyles.styles";

const Auth = ({ status, signInHandler }) => {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const { login } = useAuthUser();
  useEffect(() => {
    if (status) {
      navigate("/", { replace: true });
    }
  }, [status, navigate]);

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    const result = await login(email, pass);
    if (result.code === 406) {
      setError("Usuario y contraseña no existen");
      return;
    } else {
      setError("");
      signInHandler();
      navigate("/", { replace: true });
    }
  };

  return (
    <StyledAuth>
      {error !== "" && <div>{error}</div>}
      <StyledAuthForm onSubmit={submitHandler}>
        <h1>INICIAR SESION</h1>
        <StyledAuthInput placeholder="email" type="email" ref={emailRef} />
        <StyledAuthInput
          current-password="true"
          autoComplete="true"
          placeholder="password"
          type="password"
          ref={passRef}
        />
        <StyledAuthButton>login</StyledAuthButton>
      </StyledAuthForm>
    </StyledAuth>
  );
};

export default Auth;
