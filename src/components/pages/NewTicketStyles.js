import styled from "styled-components";

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const TicketHeader = styled.h2`
  display: flex;
  align-self: flex-start;
  color: var(--conext-primary);
`;

export const TicketContainer = styled.section`
  background-color: var(--conext-secondary);
  padding: 15px;
  border-radius: 10px;
  width: 90%;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

export const TicketSearchContainer = styled.div`
  display: flex;
  width: calc(100% - calc(2 * 20px));
  padding: 5px 20px;
  justify-content: space-between;
  align-items: center;
`;

export const SearchContent = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Dropdown = styled.div`
  background-color: var(--conext-alt);
  width: 5.5rem;
  margin: 5px;
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
`;

export const DropdownMenu = styled.div`
  z-index: 3000;
  position: absolute;
  margin-left: -10px;
  padding: 10px;
  width: 5.5rem;
  border-radius: 10px;
  background-color: var(--conext-alt);
`;

export const DropDownMenuItem = styled.div`
  cursor: pointer;
  position: relative;
  padding: 5px;
  border-radius: 10px;
  margin: 5px 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--conext-secondary);
  transition: all 125ms;
  &:hover {
    cursor: pointer;
    background-color: var(--conext-primary);
    color: var(--conext-secondary);
  }
`;

export const SearchField = styled.input`
  margin: 15px;
  outline: none;
  padding: 8px;
  width: 15rem;
  border-radius: 6px;
  border: 1px solid black;
  transition: all 125ms;

  &:focus {
    border: 1px solid var(--conext-primary);
  }
`;

export const Button = styled.button`
  border: none;
  padding: 15px;
  width: 25%;
  border-radius: 10px;
  transition: all 125ms;
  color: black;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;

  &:hover {
    background-color: var(--conext-primary);
    color: white;
  }
`;

export const AutocompletedContainer = styled.div`
  width: 100%;
`;

export const SeverityContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const SeverityTypes = styled.div`
  width: 80%;
  padding: 10px;
  display: flex;
  justify-content: flex-start;
  flex-wrap: wrap;
  align-items: center;
`;

export const SeverityOption = styled.div`
  padding: 10px;
  cursor: pointer;
  border-radius: 10px;
  margin: 0 4px;
  transition: all 125ms;
  &:hover {
    background-color: var(--conext-primary);
    color: white;
    filter: brightness(1.5);
  }
  &.active {
    background-color: var(--conext-primary);
    color: white;
  }
`;

export const ActiveSeverityOption = styled.div`
  padding: 10px;
  border-radius: 10px;
  margin: 0 4px;
  transition: all 125ms;
  background-color: var(--conext-primary);
  color: white;
`;
