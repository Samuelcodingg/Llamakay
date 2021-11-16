import { useContext } from 'react';
import { AppContext } from '../AppContext';


export const handleChange = name => event => {
    const { valuesLogin, setValuesLogin } = useContext(AppContext);
    setValuesLogin({ ...valuesLogin, [name]: event.target.value });
};