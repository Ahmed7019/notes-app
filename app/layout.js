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
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body
        className={`bg-neutral-100/80 ${geistSans.variable} ${geistMono.variable} ${indie_Flower.className} antialiased min-h-screen flex flex-col`}
      >
        <Navigation />
        <main className="flex-1 w-full flex flex-col items-center px-2 sm:px-4 md:px-8">
          {children}
        </main>
        <Toaster />
        <CustomCursor />
      </body>
    </html>
  );
}
