import { useEffect, useState } from "react";
import { useGetData } from "../hooks/useGetData";
import { useLocalStorage } from "../hooks/useLocalStorage";
import {
  ModalBackdrop,
  ModalContainer,
  ModalHeader,
  CloseButton,
  ApprovalSection,
  ApprovalButton,
  ModalErrorContainer,
} from "./ModalStyles";
import { useLocation } from "react-router-dom";

const Modal = ({ showModalHandler }) => {
  const [modalData, setModalData] = useState({});
  const [error, setError] = useState("");
  const { getModal } = useLocalStorage();
  const { pathname } = useLocation();
  const { updateFault, finishFault } = useGetData("http://localhost:3001");

  const closeModalHandler = () => {
    showModalHandler(false);
  };

  useEffect(() => {
    const data = getModal();
    setModalData(data);
  }, []);

  const updateApproval = async (dep, ticketId) => {
    await updateFault(dep, ticketId);
  };

  const stPermission =
    modalData.userType === "ST" &&
    modalData.NOC_APROBACION === "si" &&
    modalData.OP_APROBACION === "si";

  const finishTicket = async (ticketId) => {
    stPermission
      ? await finishFault(ticketId)
      : setError("ocurrio un error 😓");
    stPermission
      ? closeModalHandler()
      : modalData.NOC_APROBACION !== "si" && modalData.OP_APROBACION === "si"
      ? setError("No se puede finalizar hasta que NOC apruebe averia")
      : modalData.NOC_APROBACION === "si" && modalData.OP_APROBACION !== "si"
      ? setError("No se puede finalizar hasta que Operaciones apruebe averia")
      : modalData.NOC_APROBACION !== "si" && modalData.OP_APROBACION !== "si"
      ? setError(
          "No se puede finalizar hasta que Operaciones y NOC aprueben la averia"
        )
      : setError("");
    // ? await updateFault("ST", ticketId)
  };
  return (
    <ModalBackdrop>
      <ModalContainer>
        <ModalHeader>
          <h3>Informacion de Ticket {modalData.TICKET}</h3>
          <CloseButton onClick={closeModalHandler}>X</CloseButton>
        </ModalHeader>
        <ul>
          <li>TICKET : {modalData.TICKET}</li>
          <li>NOMBRE : {modalData.NOMBRE}</li>
          <li>NIF : {modalData.NIF}</li>
          <li>DIRECCION : {modalData.DIRECCION}</li>
          <li>NOMBRE DE SEVERIDAD : {modalData.NOMBRE_SEVERIDAD}</li>
          <li>APROBACION DEL NOC: {modalData.NOC_APROBACION || "no"}</li>
          <li>APROBACION DE OPERACIONES: {modalData.OP_APROBACION || "no"}</li>
          <li>OLT : {modalData.OLT}</li>
          <li>PUERTO OLT : {modalData.PUERTO_OLT}</li>
          <li>SERIAL : {modalData.SERIAL}</li>
          <li>EQUIPO : {modalData.EQUIPO}</li>
          <li>NOMENCLATURA : {modalData.NOMENCLATURA}</li>
          <li>PROVEEDOR : {modalData.PROVEEDOR}</li>
          <li>INICIO : {modalData.INICIO}</li>
        </ul>
        {pathname === "/queue" && (
          <ApprovalSection>
            <ApprovalButton
              onClick={() => {
                modalData.userType === "ST"
                  ? finishTicket(modalData.TICKET)
                  : updateApproval(modalData.userType, modalData.TICKET);
              }}
            >
              {modalData.userType === "ST" ? "Finalizar" : "Aprobar"}
            </ApprovalButton>
          </ApprovalSection>
        )}
        {error !== "" && (
          <ModalErrorContainer>
            <h4>{error}</h4>
          </ModalErrorContainer>
        )}
      </ModalContainer>
    </ModalBackdrop>
  );
};

export default Modal;
