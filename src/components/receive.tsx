import { ClipboardIcon } from "@heroicons/react/24/outline";
import { QRCodeSVG } from "qrcode.react";

export function Receive() {
  return (
    <div className="flex flex-col sm:flex-row sm:items-stretch sm:gap-8 gap-4">
      <div className="mx-auto">
        <QRCodeSVG
          value={
            "lntb1u1p3s5f5app592eyvw7w53pg39h4gh8m86x68elynsgd4uhdaps7cgqp022v6aasdqqcqzpgxqyz5vqsp5q758mun23gmxd6k5n997ss6n07u3qaa3tuhsk4hglq4mvg3lg45q9qyyssqt7a0225rjn49xnucke26sa87h9wl9znm5hms342ck7q5mhgjr5355tdqyefker5saukfny5u60h96un5ahywrfm8cwwkflyd9adt9dqqyvsrzw"
          }
          size={300}
          bgColor={"#ffffff"}
          fgColor={"#0f0656"}
          level={"L"}
          includeMargin={false}
        />
      </div>
      <div className="flex flex-col flex-1 justify-evenly gap-2">
        <div>
          <label
            htmlFor="price"
            className="block text-sm font-medium text-gray-700"
          >
            Amount
          </label>
          <div className="mt-1 relative rounded-md shadow-sm">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <span className="text-gray-500 sm:text-sm">₿</span>
            </div>
            <input
              type="text"
              name="price"
              id="price"
              className="focus:ring-indigo-500 focus:border-indigo-500 block w-full pl-7 pr-12 sm:text-sm border-gray-300 rounded-md"
              placeholder="0.00"
            />
            <div className="absolute inset-y-0 right-0 flex items-center">
              <label htmlFor="currency" className="sr-only">
                Currency
              </label>
              <select
                id="currency"
                name="currency"
                className="focus:ring-indigo-500 focus:border-indigo-500 h-full py-0 pl-2 pr-7 border-transparent bg-transparent text-gray-500 sm:text-sm rounded-md"
              >
                <option>BTC</option>
                <option>SAT</option>
                <option>USD</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <div className="flex justify-between items-center">
            <label
              htmlFor="receive-invoice"
              className="block text-sm font-medium text-gray-700"
            >
              Payment Request
            </label>
            <button>
              <ClipboardIcon className="w-5 h-5 text-gray-500" />
            </button>
          </div>
          <div className="mt-1">
            <textarea
              rows={6}
              name="receive-invoice"
              id="receive-invoice"
              disabled
              className="overflow-hidden p-2 focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 border-2 rounded-md"
              value="lntb1u1p3s5f5app592eyvw7w53pg39h4gh8m86x68elynsgd4uhdaps7cgqp022v6aasdqqcqzpgxqyz5vqsp5q758mun23gmxd6k5n997ss6n07u3qaa3tuhsk4hglq4mvg3lg45q9qyyssqt7a0225rjn49xnucke26sa87h9wl9znm5hms342ck7q5mhgjr5355tdqyefker5saukfny5u60h96un5ahywrfm8cwwkflyd9adt9dqqyvsrzw"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
