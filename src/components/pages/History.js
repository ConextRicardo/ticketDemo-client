import { useEffect, useState } from "react";
import { useGetData } from "../hooks/useGetData";
import {
  HistoryContainer,
  HistoryHeader,
  HistoryLogContainer,
  LogItem,
  LogTitles,
  StyledItem,
} from "./HistoryStyles";
import { useLocalStorage } from "../hooks/useLocalStorage";

const History = ({ showModalHandler }) => {
  const [histData, setHistData] = useState([]);
  const { getHistoricalData } = useGetData("http://localhost:3001");
  const { setModal } = useLocalStorage();

  useEffect(() => {
    const getData = async () => {
      const data = await getHistoricalData();
      setHistData(data);
      console.log(data);
    };
    getData();
  }, []);

  const modalHandler = (data) => {
    showModalHandler(true);
    setModal(data, "");
  };

  return (
    <HistoryContainer>
      <HistoryHeader>Historial</HistoryHeader>
      <div>
        <ul>
          <LogTitles>
            <StyledItem>NOMBRE</StyledItem>
            <StyledItem>NIF</StyledItem>
            <StyledItem>DIRECCION</StyledItem>
            <StyledItem>SEVERIDAD</StyledItem>
            <StyledItem>PROVEEDOR</StyledItem>
            <StyledItem>INICIO</StyledItem>
            <StyledItem>DURACION</StyledItem>
          </LogTitles>
        </ul>
        <HistoryLogContainer>
          {histData.map((log, index) => {
            return (
              <LogItem onClick={() => modalHandler(log)} key={index}>
                <StyledItem>{log?.NOMBRE}</StyledItem>
                <StyledItem>{log?.NIF}</StyledItem>
                <StyledItem>{log?.DIRECCION}</StyledItem>
                <StyledItem>{log?.NOMBRE_SEVERIDAD}</StyledItem>
                <StyledItem>{log?.PROVEEDOR}</StyledItem>
                <StyledItem>{log?.INICIO}</StyledItem>
                <StyledItem>{log?.TIEMPO}</StyledItem>
              </LogItem>
            );
          })}
        </HistoryLogContainer>
      </div>
    </HistoryContainer>
  );
};

export default History;
