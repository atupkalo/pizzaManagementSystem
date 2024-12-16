import type { Metadata } from "next";
import { Red_Hat_Display } from "next/font/google";
import { Miltonian_Tattoo } from "next/font/google";
import "./globals.css";

const redHatDisplay = Red_Hat_Display({
  variable: "--font-red-hat-dispaly",
  subsets: ["latin"],
});

const miltonianTattoo = Miltonian_Tattoo({
  variable: "--font-miltonian-tattoo",
  subsets: ["latin"],
  weight: "400",
});


export const metadata: Metadata = {
  title: "No Pine Zone",
  description: "Pizza mamagment softwaer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${redHatDisplay.variable}`}>
        {children}
      </body>
    </html>
  );
}
