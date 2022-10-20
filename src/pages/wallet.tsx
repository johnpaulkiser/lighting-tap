import { Card } from "../components/card";
import { TXHistory } from "../components/tx-history";
import { Well } from "../components/well";
import {
  ScaleIcon,
  ChevronDoubleDownIcon,
  ChevronDoubleUpIcon,
} from "@heroicons/react/24/outline";
import { FormattedBTC } from "../components/btc-format";
import { Receive } from "../components/receive";

import { Tab } from "@headlessui/react";
import { classNames } from "../utils";
import { Send } from "../components/send";

export default function Wallet() {
  const balance = 123456;

  return (
    <Card>
      <div className="flex flex-col justify-between gap-8 sm:flex-row">
        <div className="flex flex-1 flex-col gap-4">
          <div className="flex flex-col gap-2 pb-2">
            <h3 className="flex items-center gap-2 text-2xl font-medium text-gray-500">
              <ScaleIcon className="h-6 w-6 text-indigo-500" />
              Balance:
            </h3>
            <h2 className=" border-b-2 border-pink-800/20 pb-1 font-mono text-4xl text-gray-800 sm:text-6xl">
              <FormattedBTC sats={balance} />
            </h2>
          </div>

          <Tab.Group>
            <Tab.List className="flex w-fit gap-2 rounded-md bg-indigo-100 p-1 text-indigo-700 shadow-inner">
              <Tab
                className={({ selected }: { selected: boolean }) =>
                  classNames(
                    "inline-flex items-center gap-1 rounded-md border border-transparent px-4 py-2 text-sm font-medium text-indigo-700  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                    selected ? "bg-white shadow" : ""
                  )
                }
              >
                <span>
                  <ChevronDoubleUpIcon className="h-5 w-5 text-indigo-500" />
                </span>
                <span>Send</span>
              </Tab>
              <Tab
                className={({ selected }: { selected: boolean }) =>
                  classNames(
                    "inline-flex items-center gap-1 rounded-md border border-transparent px-4 py-2 text-sm font-medium text-indigo-700  focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2",
                    selected ? "bg-white shadow" : ""
                  )
                }
              >
                <span>
                  <ChevronDoubleDownIcon className="h-5 w-5 text-indigo-500" />
                </span>
                <span>Receive</span>
              </Tab>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <Well>
                  <Send />
                </Well>
              </Tab.Panel>
              <Tab.Panel>
                <Well>
                  <Receive />
                </Well>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
        <div className="flex min-w-full flex-col sm:w-2/5 sm:min-w-0">
          <TXHistory />
        </div>
      </div>
    </Card>
  );
}

Wallet.displayName = "Wallet";
