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
  height: 50%;
  width: min(60%, 25rem);
  box-shadow: var(--shadow);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
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
    border: 1px solid #ff2345;
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
    background-color: #ff2345;
    color: white;
  }
`;
