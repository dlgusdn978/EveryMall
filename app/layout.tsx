"use client";
import { useRef } from "react";
import { Provider } from "react-redux";
import { makeStore, AppStore } from "../lib/store";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../public/css/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import React from "react";
import { CookiesProvider } from "react-cookie";
import { useAppSelector } from "../lib/hooks";
import { RootState } from "../lib/store";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const storeRef = useRef<AppStore>();
  if (!storeRef.current) {
    console.log("store 생성됨.");
    storeRef.current = makeStore();
  }
  return (
    <CookiesProvider>
      <Provider store={storeRef.current}>
        <html lang="en">
          <body>
            <div className="min-w-max">
              <Header />
              {children}
              <Footer />
            </div>
          </body>
        </html>
      </Provider>
    </CookiesProvider>
  );
}
