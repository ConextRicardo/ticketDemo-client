import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "../hooks/useAuthUser";
import {
  AuthErrorContainer,
  StyledAuth,
  StyledAuthButton,
  StyledAuthForm,
  StyledAuthInput,
} from "./AuthStyles";

const Auth = ({ status, signInHandler }) => {
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passRef = useRef();
  const navigate = useNavigate();
  const { login } = useAuthUser();
  useEffect(() => {
    if (status) {
      navigate("/history", { replace: true });
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
      navigate("/history", { replace: true });
    }
  };

  return (
    <StyledAuth>
      {error !== "" && <AuthErrorContainer>{error}</AuthErrorContainer>}
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
