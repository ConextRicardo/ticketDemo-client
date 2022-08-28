import styled from "styled-components";

export const HistoryContainer = styled.div`
  width: 100%;
  position: relative;
`;

export const HistoryHeader = styled.h1`
  margin: 20px;
  color: var(--conext-primary);
`;

export const HistoryLogContainer = styled.ul`
  list-style: none;
  margin: 15px 0;
  padding: 5px;
  display: flex;
  flex-direction: column;
`;

export const LogTitles = styled.li`
  list-style: none;
  margin: 15px 0;
  display: flex;
  font-weight: 900;
`;

export const LogItem = styled.li`
  list-style: none;
  margin: 15px 20px;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  font-weight: 500;
  background-color: var(--conext-secondary);
  transition: all 125ms;

  &:hover {
    background-color: var(--conext-primary);
    color: var(--conext-secondary);
    cursor: pointer;
  }
`;

export const StyledItem = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  margin: 0 10px;
`;
