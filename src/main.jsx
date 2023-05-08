import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import { FormProvider } from './ContextApi/formContext'
import { BudgetProvider } from './ContextApi/remainingBudget'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FormProvider>
      <BudgetProvider>
        <App />
      </BudgetProvider>
    </FormProvider>
  </React.StrictMode>,
)
