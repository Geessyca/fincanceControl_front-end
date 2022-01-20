
import React, { useState, createContext, useContext} from 'react';
import { ValueContext } from './trafficControl';


export const ExtractContext = createContext();

const ExtractProvider = ({ children }) => {
    const [extract, setExtract] = useState([]);
    const { type } = useContext(ValueContext);
    var data = new Date();
    var dia = String(data.getDate()).padStart(2, '0');
    var mes = String(data.getMonth() + 1).padStart(2, '0');
    var dataAtual = dia + '/' + mes;

    function changeExtract(description, types, value, valueType){
        if (types) { var typeaux = '+' } else { var typeaux = '-'}
        setExtract([...extract, { data: dataAtual, desc: description, idType: type[valueType].id, valueType: type[valueType].type, ty: typeaux, val: parseFloat(value).toFixed(2)}])
    }

    return (
        <ExtractContext.Provider value={{extract,changeExtract}}>
            {children}
        </ExtractContext.Provider>
    );
}

export default ExtractProvider;