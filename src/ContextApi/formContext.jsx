import { createContext, useState } from 'react';

export const FormContext = createContext({
    addName: null,
    addBudget: null,
    setAddName: () => null,
    setAddBudget: () => null
});

export const FormProvider = ({ children }) => {
    const [addName, setAddName,] = useState(null);
    const [addBudget, setAddBudget] = useState(null);
    const value = { addName, addBudget, setAddBudget, setAddName };
    return (
        <FormContext.Provider value={value}>
            {children}
        </FormContext.Provider>
    );
};