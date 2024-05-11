import axios from "axios";
import { createContext, useReducer } from "react";
import { urlApi } from "./routes";



export const getDoctor = async () => {
    let res = await axios.get(urlApi);
    return res.data;
};

export const getDoctorById = async (id) => {
    let res = await axios.get(urlApi + id);
    return res.data;
};

export const ContextGlobal = createContext();



export const ContextProvider = ({ children }) => {

    //Estados globales
    const [state, dispatch] = [];
  
    //Aca van las funciones globales
    let data = { state, dispatch };
  
    return (
      <ContextGlobal.Provider value={data}>
        {children}
      </ContextGlobal.Provider>
    );
  };
  
  export const useDoctorStates = () => useContext(ContextGlobal);
  