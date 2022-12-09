import ReactDOM from "react-dom/client";
import { App } from "./App";
import { BudgetContextProvider, CurrencyContextProvider } from "./context";
import { ExpensesContextProvider } from "./context/ExpensesContext/ExpensesContext";
import { GlobalStyle } from "./GlobalStyle";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <>
    <GlobalStyle />
    <ExpensesContextProvider>
      <CurrencyContextProvider>
        <BudgetContextProvider>
          <App />
        </BudgetContextProvider>
      </CurrencyContextProvider>
    </ExpensesContextProvider>
  </>,
);
