import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://seba-perez.vercel.app/"),
  title: "Sebastian Perez - Desarrollador Web",
  description:
    "Desarrollador web freelance especializado en crear tiendas online, sitios web y aplicaciones a medida para emprendedores y pequeñas empresas.",

  openGraph: {
    title: "Sebastian Perez - Desarrollador Web",
    description:
      "Desarrollador web freelance especializado en crear tiendas online, sitios web y aplicaciones a medida.",
    url: "https://seba-perez.vercel.app/",
    siteName: "Sebastian Perez",
    locale: "es_AR",
    type: "website",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Sebastian Perez - Desarrollador Web",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Sebastian Perez 🧑‍💻 | Desarrollador Web",
    description:
      "Desarrollador web freelance especializado en crear sitios web y soluciones a medida.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
