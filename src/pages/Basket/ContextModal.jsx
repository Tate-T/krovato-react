import { createContext } from "react";
export const ContextModal = createContext({
    handleCloseModal: () => {},
    isModal:false,
    message:""
})