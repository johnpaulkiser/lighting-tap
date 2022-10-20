/* This example requires Tailwind CSS v2.0+ */
import {
  CalendarIcon,
  MapPinIcon,
  ChevronDoubleUpIcon,
  ChevronDoubleDownIcon,
  QueueListIcon,
  ArrowPathIcon,
} from "@heroicons/react/20/solid";
import { useDenomination } from "../providers/DenominationProvider";
import { FormattedBTC } from "./btc-format";

const transactions = [
  {
    id: 1,
    amount: 13456,
    status: "Fullfilled",
    type: "sent",
    date: "2020-01-07",
    dateFull: "January 7, 2020",
  },
  {
    id: 2,
    amount: 345,
    status: "Fullfilled",
    type: "sent",
    date: "2020-01-07",
    dateFull: "January 7, 2020",
  },
  {
    id: 3,
    amount: 13885943,
    status: "Fullfilled",
    type: "sent",
    date: "2020-01-14",
    dateFull: "January 14, 2020",
  },
  {
    id: 4,
    amount: 100,
    status: "Fullfilled",
    type: "sent",
    date: "2020-01-07",
    dateFull: "January 7, 2020",
  },
  {
    id: 5,
    amount: 456,
    status: "Fullfilled",
    type: "sent",
    date: "2020-01-07",
    dateFull: "January 7, 2020",
  },
  {
    id: 6,
    amount: 200,
    status: "Fullfilled",
    type: "sent",
    date: "2020-01-07",
    dateFull: "January 7, 2020",
  },
];

export function TXHistory() {
  return (
    <div className="overflow-hidden rounded-md bg-white shadow">
      <div className="flex justify-between border-b border-b-gray-200 bg-gray-50 px-6 py-2">
        <h3 className="inline-flex items-center  text-lg font-bold text-gray-600 ">
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="h-4 w-4 text-blue-500"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 12h16.5m-16.5 3.75h16.5M3.75 19.5h16.5M5.625 4.5h12.75a1.875 1.875 0 010 3.75H5.625a1.875 1.875 0 010-3.75z"
              />
            </svg>
          </span>
          <span className="pl-2">Transaction History</span>
        </h3>
        <button>
          <ArrowPathIcon className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" />
        </button>
      </div>
      <ul role="list" className="divide-y divide-gray-200 ">
        {transactions.map((tx) => (
          <li key={tx.id}>
            <a href="#" className={`block hover:bg-gray-50`}>
              <div className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <p className="truncate text-sm font-medium text-indigo-600">
                    <FormattedBTC sats={tx.amount} />
                  </p>
                  <div className="ml-2 flex flex-shrink-0">
                    <p className="inline-flex rounded-full bg-green-100 px-2 text-xs font-semibold leading-5 text-green-800">
                      {tx.status}
                    </p>
                  </div>
                </div>
                <div className="mt-2 sm:flex sm:justify-between">
                  <p className="flex items-center text-sm text-gray-500">
                    <ChevronDoubleUpIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    {tx.type}
                  </p>
                  <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                    <CalendarIcon
                      className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <p>
                      <time dateTime={tx.date}>{tx.dateFull}</time>
                    </p>
                  </div>
                </div>
              </div>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
