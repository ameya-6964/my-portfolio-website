import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ameya Belvalkar | Full Stack Developer",
  description:
    "Experienced Full Stack Developer proficient in React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind, Bootstrap, Node, Express, and certified in AWS and Azure. Specializing in dynamic UIs and scalable back-end solutions, I bring a commitment to excellence and current industry practices to every project in the rapidly evolving landscape of Full Stack Development",
  icons: {
    icon: [
      {
        url: "/icon.jpg",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head></head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
