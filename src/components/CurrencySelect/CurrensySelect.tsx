import Select, { SingleValue } from "react-select";
import { useCurrencyContext } from "../../context";
import { styles } from "./styles";

export const CurrencySelect = () => {
  const { currencies, curentCurrency, setNewCurrency } = useCurrencyContext();

  const handleSelect = (option: SingleValue<typeof curentCurrency>) => {
    if (option) {
      setNewCurrency(option);
    }
  };

  return (
    <Select
      styles={styles}
      options={currencies}
      onChange={handleSelect}
      value={curentCurrency}
      isSearchable={false}
    />
  );
};
