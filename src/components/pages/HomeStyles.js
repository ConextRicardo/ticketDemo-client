import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HomeContainer = styled.div`
  padding: 8px;
  width: calc(100vw - 32px);
  height: 95vh;
  display: flex;
  justify-content: flex-start;
`;

export const HomeAside = styled.aside`
  background-color: var(--conext-secondary);
  margin: 2px 8px 2px 2px;
  padding: 15px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  width: 20%;
  justify-content: space-between;
  font-weight: 700;
  color: var(--conext-primary);
  box-shadow: var(--shadow-secondary);
`;

export const AsideContent = styled.section`
  height: 80%;
  display: flex;
  flex-direction: column;
`;

export const HomeLinks = styled(NavLink)`
  background-color: var(--conext-alt);
  text-decoration: none;
  margin: 5px 7px;
  border: none;
  padding: 10px;
  width: 90%;
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

export const HomeContent = styled.div`
  width: 80%;
`;

export const LogoutButton = styled.button`
  border: none;
  border-collapse: collapse;
  padding: 15px;
  width: 100%;
  border-radius: 10px;
  transition: all 125ms;
  color: black;
  font-size: 1.2rem;
  font-weight: 600;

  &:hover {
    background-color: var(--conext-primary);
    cursor: pointer;
    color: white;
  }
`;
