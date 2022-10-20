// src/pages/_app.tsx
import "../styles/globals.css";
import type { AppType } from "next/app";
import { trpc } from "../utils/trpc";
import DenominationProvider from "../providers/DenominationProvider";
import Layout from "../components/layout";

const MyApp: AppType = ({ Component, pageProps }) => {
  return (
    <DenominationProvider>
      <Layout title={Component.displayName ?? ""}>
        <Component {...pageProps} />
      </Layout>
    </DenominationProvider>
  );
};

export default trpc.withTRPC(MyApp);
