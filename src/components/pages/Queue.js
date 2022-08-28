import { useEffect, useState } from "react";
import { useGetData } from "../hooks/useGetData";
import {
  QueueContainer,
  QueueHeader,
  QueueLogContainer,
  LogItem,
  LogTitles,
  StyledItem,
} from "./QueueStyles";
import { useLocalStorage } from "../hooks/useLocalStorage";

const Queue = ({ showModalHandler }) => {
  const [queueData, setQueueData] = useState([]);
  const [userInfo, setUserInfo] = useState({});
  const { getQueueFaults } = useGetData("http://localhost:3001");
  const { getItem, setModal } = useLocalStorage();

  useEffect(() => {
    const userData = getItem();
    const getData = async () => {
      const data = await getQueueFaults();
      setQueueData(data);
      setUserInfo(userData);
    };
    getData();
  }, []);

  const modalHandler = (data) => {
    setModal(data, userInfo?.type);
    showModalHandler(true);
  };

  return (
    <QueueContainer>
      <QueueHeader>Pendientes</QueueHeader>
      {queueData.length > 0 && (
        <div>
          <ul>
            <LogTitles>
              <StyledItem>NOMBRE</StyledItem>
              <StyledItem>DIRECCION</StyledItem>
              <StyledItem>SEVERIDAD</StyledItem>
              <StyledItem>NOC APROV</StyledItem>
              <StyledItem>OP APROV</StyledItem>
              <StyledItem>INICIO</StyledItem>
            </LogTitles>
          </ul>
          <QueueLogContainer>
            {queueData.map((log, index) => {
              return (
                <LogItem onClick={() => modalHandler(log)} key={index}>
                  <StyledItem>{log?.NOMBRE}</StyledItem>
                  <StyledItem>{log?.DIRECCION}</StyledItem>
                  <StyledItem>{log?.NOMBRE_SEVERIDAD}</StyledItem>
                  <StyledItem>{log?.NOC_APROBACION || "no"}</StyledItem>
                  <StyledItem>{log?.OP_APROBACION || "no"}</StyledItem>
                  <StyledItem>{log?.INICIO}</StyledItem>
                </LogItem>
              );
            })}
          </QueueLogContainer>
        </div>
      )}
      {queueData.length === 0 && <h2>No hay Averias Pendientes!!</h2>}
    </QueueContainer>
  );
};

export default Queue;
