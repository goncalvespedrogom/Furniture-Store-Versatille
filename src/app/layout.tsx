import type { Metadata } from "next";
import { Poppins } from "next/font/google"; 
import "./globals.css";

const poppins = Poppins({
  weight: ["400", "500", "600", "700"], 
  subsets: ["latin"], 
  variable: "--font-poppins", 
});

export const metadata: Metadata = {
  title: "Versatille",
  description: "Transforme o seu espaço com elegância e sofisticação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={poppins.className}>
        {children}
      </body>
    </html>
  );
}
