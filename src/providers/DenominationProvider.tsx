import { createContext, ReactNode, useContext, useState } from "react";

export type Denomination = "BTC" | "SAT";

type DenominationContextType = {
  denom: Denomination;
  setDenomination: (denom: Denomination) => void;
};

export const DenominationContext =
  createContext<DenominationContextType | null>(null);

export default function DenominationProvider({
  children,
}: {
  children: ReactNode;
}) {
  const [denom, setDenomination] = useState<Denomination>("SAT");

  return (
    <DenominationContext.Provider value={{ denom, setDenomination }}>
      {children}
    </DenominationContext.Provider>
  );
}

export function useDenomination(): DenominationContextType {
  const value = useContext(DenominationContext);

  if (value === null) {
    throw new Error(
      "useDenomination must be used within a DenominationProvider"
    );
  }
  return value;
}
