import axios from "axios";

export const useGetData = (api) => {
  const getHistoricalData = async () => {
    const historicalData = await axios.get(`${api}/data`);
    return historicalData.data.historial || [];
  };

  const getClientData = async (type, value) => {
    const clientData = await axios.post(`${api}/data`, { type, value });
    return clientData.data;
  };

  const createANewFault = async (values) => {
    const result = await axios.post(`${api}/logs`, values);
    return result.status !== 200
      ? { message: "Hubo un error! :( , Intenta de nuevo!" }
      : { message: result.data };
  };

  const updateFault = async (dep, ticketId) => {
    const endPoint =
      dep === "NOC" ? `${api}/approvals/noc` : `${api}/approvals/op`;
    const result = await axios.put(endPoint, { ticket_id: ticketId });
    return result.status !== 200
      ? "Hubo un error! :( , Intenta de nuevo!"
      : result.data;
  };

  const finishFault = async (ticketId) => {
    const result = await axios.put(`${api}/logs`, { ticket_id: ticketId });
    return result.status !== 200
      ? "Hubo un error! :( , Intenta de nuevo!"
      : result.data;
  };

  const getQueueFaults = async () => {
    const queueData = await axios.get(`${api}/data`);
    return queueData.data.pendientes || [];
  };

  return {
    getHistoricalData,
    getClientData,
    createANewFault,
    updateFault,
    getQueueFaults,
    finishFault,
  };
};
