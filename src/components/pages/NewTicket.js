import { useRef, useState } from "react";
import {
  AutocompletedContainer,
  Container,
  Dropdown,
  DropdownMenu,
  DropDownMenuItem,
  Button,
  SearchContent,
  SearchField,
  SeverityContainer,
  SeverityOption,
  SeverityTypes,
  TicketContainer,
  TicketHeader,
  TicketSearchContainer,
} from "./NewTicketStyles";
import { useGetData } from "../hooks/useGetData";

const NewTicket = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedSeverity, setSelectedSeverity] = useState("");
  const [option, setOption] = useState("");
  const [message, setMessage] = useState("");
  const [clientData, setClientData] = useState(null);
  const inputRef = useRef();
  const { getClientData, createANewFault } = useGetData(
    "http://localhost:3001"
  );

  const searchHandler = async () => {
    const type = option === "N.I.F." ? "NIF" : "SN";
    const value = inputRef.current.value;
    const data = await getClientData(type, value);
    setClientData(data);
  };

  const severityTypes = {
    "Recableado completo por corte fibra": 1,
    "Corte de Fibra Externo": 2,
    "Corte de Fibra Interno": 3,
    "Ambos Conectores Rotos": 4,
    "Cajera de terminal caida": 5,
    "Conector Externo Roto": 6,
    "Conector Interno Roto": 7,
    "Drop Atenuado": 8,
    "Equipo Averiado": 9,
    "Hard Reset": 10,
    "Equipo Desconfigurado": 11,
    Lentitud: 12,
  };

  const severityTypesArr = Object.keys(severityTypes);

  const createNewFaultHandler = async () => {
    clientData?.NOMBRE !== undefined &&
      createANewFault({
        ...clientData,
        NIVEL_SEVERIDAD: severityTypes[selectedSeverity],
        NOMBRE_SEVERIDAD: selectedSeverity,
      });
    setClientData(null);
    setMessage("Averia Creada");
    setTimeout(() => {
      setMessage("");
    }, 1500);
  };

  return (
    <Container>
      <TicketHeader>Nueva Averia</TicketHeader>
      <TicketContainer>
        <TicketSearchContainer>
          <SearchContent>
            <label>Buscar Por: </label>
            <Dropdown
              onClick={() => {
                setIsOpen(!isOpen);
              }}
            >
              {option === "" ? "[Seleccionar]" : option}
              {isOpen && (
                <DropdownMenu>
                  <DropDownMenuItem
                    onClick={() => {
                      setOption("Serial");
                    }}
                  >
                    Serial
                  </DropDownMenuItem>
                  <DropDownMenuItem
                    onClick={() => {
                      setOption("N.I.F.");
                    }}
                  >
                    N.I.F.
                  </DropDownMenuItem>
                </DropdownMenu>
              )}
            </Dropdown>
          </SearchContent>
          <SearchContent>
            <SearchField
              ref={inputRef}
              type="text"
              placeholder={
                option === ""
                  ? "Selecciona una opcion"
                  : option === "Serial"
                  ? "Ingresa el serial del ONT"
                  : `Ingresa N# NIF ejem V-12345678 `
              }
            />
          </SearchContent>
          <Button
            onClick={searchHandler}
            disabled={option === "" ? true : false}
          >
            Buscar
          </Button>
        </TicketSearchContainer>
        <AutocompletedContainer>
          {clientData !== null ? (
            <ul>
              <li>NOMBRE : {clientData?.NOMBRE}</li>
              <li>NIF : {clientData?.NIF}</li>
              <li>TELEFONO : {clientData?.NIF}</li>
              <li>DIRECCION : {clientData?.DIRECCION}</li>
              <li>MAC : {clientData?.MAC}</li>
              <li>NOMENCLATURA : {clientData?.NOMENCLATURA}</li>
              <li>OLT : {clientData?.OLT}</li>
              <li>PUERTO OLT : {clientData?.PUERTO_OLT}</li>
              <li>SERIAL : {clientData?.SERIAL}</li>
              <li>PROVEEDOR : {clientData?.PROVEEDOR}</li>
            </ul>
          ) : null}
        </AutocompletedContainer>
        <SeverityContainer>
          Seleccionar Averia:
          <SeverityTypes>
            {severityTypesArr.map((servType) => (
              <SeverityOption
                className={servType === selectedSeverity ? "active" : ""}
                key={servType}
                onClick={() => setSelectedSeverity(servType)}
              >
                {servType}
              </SeverityOption>
            ))}
          </SeverityTypes>
        </SeverityContainer>
        <Button onClick={createNewFaultHandler}>Crear Averia</Button>
      </TicketContainer>
      {message !== "" && (
        <TicketContainer>
          <h2>{message}</h2>
        </TicketContainer>
      )}
    </Container>
  );
};

export default NewTicket;
