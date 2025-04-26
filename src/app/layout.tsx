import type { Metadata } from "next";
import AuthProvider from "@/components/Providers/AuthProvider";
import MainLayout from "@/components/layouts/MainLayout";
import "./globals.scss";

export const metadata: Metadata = {
  title: "Kaypak Finder",
  description: "Track and manage your activities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <AuthProvider>
          <div className="layout">
            <MainLayout>{children}</MainLayout>
          </div>
        </AuthProvider>
      </body>
    </html>
  );
}
