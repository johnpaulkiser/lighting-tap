import { decode } from "bolt11";
import { useState } from "react";

export function useInvoice() {
  const [invoiceText, setInvoice] = useState<string | null>(null);

  let isError = false;
  let error = "";
  let amount;
  let network;

  if (invoiceText) {
    try {
      const invoice = decode(invoiceText);
      amount = invoice.satoshis;
      network = invoice.network;
    } catch (e) {
      isError = true;
      error = "Invalid invoice";
    }
  }

  return { invoiceText, setInvoice, amount, network, isError, error };
}
