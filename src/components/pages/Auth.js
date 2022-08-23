import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthUser } from "../hooks/useAuthUser";

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
  }, []);

  const submitHandler = async (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const pass = passRef.current.value;
    const result = await login(email, pass);
    if (result.code === 406) {
      setError("Cannot Sign In");
      return;
    } else {
      setError("");
      signInHandler();
      navigate("/", { replace: true });
    }
  };

  return (
    <div>
      <h1>Auth</h1>
      <form onSubmit={submitHandler}>
        <input placeholder="email" type="email" ref={emailRef} />
        <input
          current-password="true"
          autoComplete="true"
          placeholder="password"
          type="password"
          ref={passRef}
        />
        <button>login</button>
      </form>
      {error !== "" && <div>{error}</div>}
    </div>
  );
};

export default Auth;
