import { createContext } from "react";

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
