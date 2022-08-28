import styled from "styled-components";

export const StyledAuth = styled.div`
  margin: 0;
  padding: 5vh 5vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 70vh;
  width: 90vw;
`;

export const StyledAuthForm = styled.form`
  border-radius: 10px;
  height: 70%;
  width: min(60%, 25rem);
  box-shadow: var(--shadow-primary);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: var(--conext-secondary);
`;

export const StyledAuthInput = styled.input`
  margin: 15px;
  outline: none;
  padding: 8px;
  width: 65%;
  border-radius: 6px;
  border: 1px solid black;
  transition: all 125ms;

  &:focus {
    border: 1px solid var(--conext-primary);
  }
`;

export const StyledAuthButton = styled.button`
  border: none;
  padding: 15px;
  width: 35%;
  border-radius: 10px;
  transition: all 125ms;
  color: black;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    background-color: var(--conext-primary);
    color: white;
  }
`;
export const AuthErrorContainer = styled.div`
  width: min(60%, 22rem);
  margin: 15px;
  padding: 25px;
  border-radius: 10px;
  background-color: var(--conext-secondary);
  color: var(--conext-primary);
  font-weight: 800;
  display: flex;
  justify-content: center;
  align-items: center;
`;
