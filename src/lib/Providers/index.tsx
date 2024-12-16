"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { persistor, store } from "@/src/redux/store";
import { Inter, Roboto } from "next/font/google";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

const inter = Inter({ subsets: ["cyrillic"] });

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider className={inter.className} navigate={router.push}>
      <Toaster position="top-center" />
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>{children}</Provider>
      </PersistGate>
    </NextUIProvider>
  );
}
