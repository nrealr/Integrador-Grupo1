import { createContext } from "react";
import { Header } from "../Components/Layouts/Header";


const ContextGlobal = createContext();

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
