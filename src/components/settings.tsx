/**
 * Settings dropdown menu
 */

import { Menu, Switch } from "@headlessui/react";
import { useDenomination } from "../providers/DenominationProvider";
import { classNames } from "../utils";

export function Settings() {
  const { denom, setDenomination } = useDenomination();

  return (
    <Switch.Group
      as="div"
      className="flex items-center justify-between py-2 px-4 sm:gap-4 bg-white rounded"
    >
      <span className="flex-grow flex flex-col">
        <Switch.Label
          as="span"
          className="text-sm font-medium text-gray-900"
          passive
        >
          Denomination
        </Switch.Label>
        <Switch.Description
          as="span"
          className="text-sm text-gray-500 sm:whitespace-nowrap"
        >
          The default denomination of the displayed amounts
        </Switch.Description>
      </span>

      <div className="inline-flex">
        <Switch.Label as="span" className="mr-3">
          <span className="text-sm font-medium text-gray-900">BTC</span>
        </Switch.Label>
        <Switch
          checked={denom == "SAT"}
          // onChange={(d) => {
          //   setDenomination(d ? "SAT" : "BTC");
          // }}
          onChange={(d) => {
            setDenomination(d ? "SAT" : "BTC");
          }}
          className="relative inline-flex bg-gray-300 flex-shrink-0 h-6 w-11 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        >
          <span
            aria-hidden="true"
            className={classNames(
              denom == "SAT" ? "translate-x-5" : "translate-x-0",
              "pointer-events-none inline-block h-5 w-5 rounded-full bg-indigo-700 shadow transform ring-0 transition ease-in-out duration-200"
            )}
          />
        </Switch>
        <Switch.Label as="span" className="ml-3">
          <span className="text-sm font-medium text-gray-900">SAT</span>
        </Switch.Label>
      </div>
    </Switch.Group>
  );
}
