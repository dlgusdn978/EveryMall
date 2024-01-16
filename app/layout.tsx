import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../public/css/globals.css";
import Header from "../components/header";
import Footer from "../components/footer";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <div className="min-w-max">
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}