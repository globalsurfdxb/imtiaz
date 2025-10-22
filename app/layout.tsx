import type { Metadata } from "next";

import "./globals.css";
import Header from "./components/common/Header";
import Footer from "./components/common/Footer";

export const metadata: Metadata = {
  title: "IMTIAZ",
  description: "Imtiaz",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`antialiased`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
