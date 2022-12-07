import Select from "react-select";
import { styles } from "./styles";

export const CurrencySelect = ({ onChange, value, options }: any) => {
  return <Select styles={styles} options={options} onChange={onChange} value={value} />;
};
