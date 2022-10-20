import { NumericFormat } from "react-number-format";
import { useDenomination } from "../providers/DenominationProvider";

interface Props {
  sats: number;
}

export function FormattedBTC(props: Props) {
  const { denom } = useDenomination();

  const value = denom === "SAT" ? props.sats : props.sats / 1e8;

  return (
    <NumericFormat
      value={value}
      decimalScale={denom == "BTC" ? 8 : 0}
      thousandSeparator={true}
      suffix={denom == "BTC" ? " BTC" : " sats"}
      displayType="text"
    />
  );
}
