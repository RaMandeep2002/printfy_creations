import type { Metadata } from "next";
import "./globals.css";
import { StoreProvider } from "@/components/store-provider";

export const metadata: Metadata = {
  title: "Printify Creations — Turn memories into 3D",
  description: "Personalized 3D printed creations made from your memories.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
