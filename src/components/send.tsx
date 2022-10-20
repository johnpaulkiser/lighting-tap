import { QrCodeIcon, PaperAirplaneIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import InvoiceReader from "./modal";
import { useInvoice } from "../hooks/useInvoice";
import { FormattedBTC } from "./btc-format";

export function Send() {
  const [showQrReader, setShowQrReader] = useState(false);
  const { invoiceText, amount, setInvoice, isError, error, network } =
    useInvoice();

  return (
    <div className="flex flex-col items-center justify-evenly gap-2 lg:flex-row">
      {showQrReader && (
        <InvoiceReader
          setInvoice={setInvoice}
          open={showQrReader}
          setOpen={setShowQrReader}
        />
      )}
      <button
        className="flex items-center gap-4 rounded-lg border-4 border-dashed p-4 sm:flex-col"
        onClick={() => setShowQrReader(true)}
      >
        <QrCodeIcon className="h-14 w-14 text-gray-500 " />
        <p className="font-medium">Scan Invoice</p>
      </button>
      <span className="p-4 text-lg font-bold opacity-30">OR</span>
      <div className="flex w-full flex-1 flex-col gap-1">
        <label
          htmlFor="payment-request"
          className="block text-sm font-medium text-gray-500"
        >
          Paste Invoice
        </label>
        <textarea
          rows={4}
          name="payment-request"
          id="payment-request"
          className="block w-full rounded-md border-2 border-gray-300 p-2 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          value={invoiceText ?? ""}
          onChange={(e) => setInvoice(e.target.value)}
        />
        <div className="flex flex-row-reverse items-center gap-4 pt-2">
          <button
            type="button"
            className="inline-flex items-center rounded-md border border-transparent bg-indigo-600 px-3 py-2 text-sm font-medium text-white shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            disabled={isError}
          >
            Send
            <PaperAirplaneIcon
              className="ml-2 -mr-1 h-4 w-4"
              aria-hidden="true"
            />
          </button>
          {isError && <p className="text-red-500">{error}</p>}
          {amount && (
            <p className="text-green-500">
              <FormattedBTC sats={amount} />
            </p>
          )}
        </div>
      </div>
    </div>
  );
}
