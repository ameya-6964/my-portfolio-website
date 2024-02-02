import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Ameya Belvalkar | Portfolio | Software/Web Developer",
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
      <body className={`${inter.className} bg-gray-50 text-gray-950`}>
        <div className="bg-[#c79fa0] absolute top-[-6rem] right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem]"></div>
        <div className="bg-[#a19ac6] absolute top-[-1rem] left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]"></div>
        {children}
      </body>
    </html>
  );
}
