import { Geist, Geist_Mono, Indie_Flower } from "next/font/google";
import "./globals.css";
import Navigation from "@/components/navbar";
import { Toaster } from "sonner";
import CustomCursor from "@/components/CustomCursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const indie_Flower = Indie_Flower({
  variable: "--font-indie-flower",
  subsets: ["latin"],
  style: "normal",
  display: "fallback",
  weight: "400",
});
const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Notes app",
  description: "Drag and drop practice session",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`bg-neutral-100/80 ${geistSans.variable} ${geistMono.variable} ${indie_Flower.className} antialiased flex flex-col items-center justify-center`}
      >
        <Navigation />
        {children}
        <Toaster />
        <CustomCursor />
      </body>
    </html>
  );
}
