import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { MainLayout } from "./components/main-layout";
import { cx } from "class-variance-authority";

const inter = Inter({ subsets: ["latin"] });

const title = "yips无存储聊天室",
  description =
    "yips聊天室无存储";

export const metadata: Metadata = {
  title,
  description,
  openGraph: {
    title,
    description,
    locale: "zh_CN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="zh">
      <head>
        <meta name="viewport" content="width=device-width" />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-32x32.png"
          sizes="32x32"
        />
        <link
          rel="icon"
          type="image/png"
          href="/favicon-16x16.png"
          sizes="16x16"
        />
      </head>
      <body className={cx(inter.className, "bg-red-50")}>
        <MainLayout>{children}</MainLayout>
      </body>
    </html>
  );
}
