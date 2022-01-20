
import React, { useState, createContext} from 'react';


export const ValueContext = createContext();

const ValueProvider = ({ children }) => {
    const [input, setInput] = useState(0)
    const [exit, setExit] = useState(0)
    const [all, setAll] = useState(0)
    let type = [{ id: 0, type: 'Rent'}, { id: 1, type: 'Training'}, { id: 2, type: 'Food'}, { id: 3, type: 'Investments'}, { id: 4, type: 'Education'}, { id: 5, type: 'Booking'}]
    
    function changeValue(amountSent, typeValue){
        if (typeValue){
            var auxInput = parseFloat(input) + parseFloat(amountSent)
            var auxAll = parseFloat(all) + parseFloat(amountSent)
            setInput(auxInput)
            setAll(auxAll)
        }
        else{
            var auxInput = parseFloat(exit) + parseFloat(amountSent)
            var auxAll = parseFloat(all) - parseFloat(amountSent)
            setExit(auxInput)
            setAll(auxAll)
        }
    }
    return (
        <ValueContext.Provider value={{ input, exit, all, type, changeValue }}>
            {children}
        </ValueContext.Provider>
    );
}

export default ValueProvider;