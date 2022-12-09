import { createContext, useState, useContext } from "react";
import { Currency } from "../../types";
import { ICurrencyContext, ICurrencyContextProviderProps } from "./types";

export const CurrencyContext = createContext<ICurrencyContext>({} as ICurrencyContext);

export const useCurrencyContext = () => useContext<ICurrencyContext>(CurrencyContext);

const useCurrencyContextValue = () => {
  const [currencyContext, setCurrencyContext] = useState<ICurrencyContext>(() => ({
    curentCurrency: {
      label: "USD",
      value: Currency.USD,
    },
    currencies: [
      {
        label: "USD",
        value: Currency.USD,
      },
      {
        label: "EUR",
        value: Currency.EUR,
      },
      {
        label: "GBR",
        value: Currency.GBR,
      },
    ],

    setNewCurrency: (curentCurrency) => {
      setCurrencyContext((currencies) => ({ ...currencies, curentCurrency }));
    },
  }));
  return currencyContext;
};

export const CurrencyContextProvider = ({ children }: ICurrencyContextProviderProps) => {
  return (
    <CurrencyContext.Provider value={useCurrencyContextValue()}>
      {children}
    </CurrencyContext.Provider>
  );
};
