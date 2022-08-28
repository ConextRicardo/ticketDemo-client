import styled from "styled-components";

export const ModalBackdrop = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
  /* color: white; */
`;

export const ModalHeader = styled.div`
  display: flex;
  align-items: flex-start;
  width: 100%;
  justify-content: space-between;
`;

export const CloseButton = styled.button`
  width: 2rem;
  height: 2rem;
  border-radius: 100%;
  border: none;
  background-color: var(--conext-alt);
  transition: all 125ms;

  &:hover {
    cursor: pointer;
    background-color: var(--conext-primary);
    color: var(--conext-secondary);
  }
`;

export const ModalContainer = styled.div`
  background-color: var(--conext-secondary);
  width: 50%;
  border-radius: 10px;
  padding: 20px;
  font-weight: 600;
  z-index: 100;
`;

export const ApprovalSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ApprovalButton = styled.button`
  border: none;
  border-collapse: collapse;
  padding: 15px;
  width: 30%;
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

export const ModalErrorContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--conext-primary);
`;
