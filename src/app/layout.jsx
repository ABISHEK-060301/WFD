"use client";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Provider } from "react-redux";
import { store } from "@/redux/store";
import { ConfigProvider } from "antd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const metadata = {
  title: "Wild Flour Desserts",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ConfigProvider
          disableCompatible={true}
          theme={{
            components: {
              // Customize components if needed
            },
          }}
          alert={{
            warning: false, // Suppresses Ant Design warnings
          }}
        >
          <Provider store={store}>{children}</Provider>
        </ConfigProvider>
      </body>
    </html>
  );
}
