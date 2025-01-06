// import type { Metadata } from "next";
// import localFont from "next/font/local";
// import "./globals.css";

// import React from "react";

// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// export const metadata: Metadata = {
//   title:
//     "Grommr - A site for guys into gaining and encouraging, bellies, chubby bears, gay chubs and admirers",
//   description:
//     "A site for guys into gaining and encouraging, bellies, chubby bears, gay chubs and admirers",
// };

// const pathName = typeof window !== "undefined" ? window.location.pathname : "";

// const isLogin = pathName === "/login";

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en" data-theme="light">
//       <body
//         style={{
//           backgroundSize: "cover",
//           backgroundRepeat: "repeat",
//           backgroundBlendMode: "multiply",
//           minHeight: "100vh",
//         }}
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <div className="md:container"></div>
//         <div className="md:px-5">
//           {!isLogin ? (
//             <div className="md:container md:rounded-lg text-text">
//               {children}
//             </div>
//           ) : (
//             <>{children}</>
//           )}
//         </div>
//         <div className="md:container">{/* <Footer /> */}</div>
//       </body>
//     </html>
//   );
// }

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import React from "react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Dua Page",
  description: "Learn and explore Islamic duas",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        style={{
          background: "#EBEEF2",
          minHeight: "100vh",
        }}
        className={inter.className}
      >
        <div className="flex min-h-screen">{children}</div>
      </body>
    </html>
  );
}
