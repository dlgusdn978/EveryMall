"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore, getPersistor, store } from "../lib/store";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../public/css/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";
import { CookiesProvider } from "react-cookie";
import { useAppSelector } from "../lib/hooks";
import { RootState } from "../lib/store";
import { PersistGate } from "redux-persist/integration/react";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  const persistor = getPersistor(store);
  if (!storeRef.current) {
    console.log("store 생성됨.");
    storeRef.current = makeStore();
  }

  return (
    <html lang="en">
      <body>
        <CookiesProvider>
          <Provider store={storeRef.current}>
            <PersistGate loading={null} persistor={persistor}>
              <div className="w-full">
                <Header />
                {children}
                <Footer />
              </div>
            </PersistGate>
          </Provider>
        </CookiesProvider>
      </body>
    </html>
  );
}
