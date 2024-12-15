"use client";

import * as React from "react";
import { NextUIProvider } from "@nextui-org/system";
import { useRouter } from "next/navigation";
import { ThemeProviderProps } from "next-themes/dist/types";
import { Toaster } from "sonner";
import { PersistGate } from "redux-persist/integration/react";
import { Provider } from "react-redux";

import { persistor, store } from "@/src/redux/store";

export interface ProvidersProps {
  children: React.ReactNode;
  themeProps?: ThemeProviderProps;
}

export function Providers({ children }: ProvidersProps) {
  const router = useRouter();

  return (
    <NextUIProvider navigate={router.push}>
      <Toaster position="top-center" />
      <PersistGate loading={null} persistor={persistor}>
        <Provider store={store}>{children}</Provider>
      </PersistGate>
    </NextUIProvider>
  );
}
