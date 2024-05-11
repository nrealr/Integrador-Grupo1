import axios from "axios";
import { createContext, useReducer } from "react";


export const getDoctor = async () => {
    let res = await axios.get(`http://localhost:3030/doctors`);
    return res.data;
};

export const getDoctorById = async (id) => {
    let res = await axios.get(`http://localhost:3030/doctors/${id}`);
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
  