import { Inter } from "next/font/google";
import "./globals.css";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
      <Script src="https://cdn.botpress.cloud/webchat/v1/inject.js"></Script>
    <Script src="https://mediafiles.botpress.cloud/ed53f881-14b4-413a-94a1-4677759613c7/webchat/config.js" defer></Script>
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
