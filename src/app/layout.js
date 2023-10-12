"use client";
import Header from "@/component/Header/Header";
import "./globals.css";
import { Inter } from "next/font/google";
import Header2 from "@/component/Header/Header2";
import { ThemeUIProvider } from "theme-ui";
import Theme from "@/Theme";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  return (
    <>
      <ThemeUIProvider theme={Theme}>
        <html lang="en">
          <body className={inter.className}>
            <Header />
            <span style={{ paddingTop: "0px" }}>{children}</span>
          </body>
        </html>
      </ThemeUIProvider>
    </>
  );
}
