import { createContext } from "react";

const ContextGlobal = createContext();

export const ContextProvider = ({ children }) => {

   /**Global states */
    const [state, dispatch] = [];

   /**Globa functions */
    let data = { state, dispatch };

    return (
        <ContextGlobal.Provider value={data}>
            {children}
        </ContextGlobal.Provider>
    );
};

export const useDoctorStates = () => useContext(ContextGlobal);
