import { createContext, useState } from 'react';

export const BudgetContext = createContext({
    remainingBudget: null,
    setremainingBudget: () => null
});

export const BudgetProvider = ({ children }) => {
    const [remainingBudget, setremainingBudget] = useState(null);
    const value = { remainingBudget, setremainingBudget };
    return (
        <BudgetContext.Provider value={value}>
            {children}
        </BudgetContext.Provider>
    );
};