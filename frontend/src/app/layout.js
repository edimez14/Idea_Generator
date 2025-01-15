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

export const metadata = {
  title: "Generador de Ideas",
  description: "Generador de idea que usa la IA de Google gemini para dar las respuestas de las ideas",
  keywords: "idea generator, idea, generator",
  applicationName: "Idea Generator",
  author: {
    name: "Edizon Alexander Meza Leal",
    url: "https://edizon-leal.vercel.app/es",
  },
  themeColor: "#1E40AF",
  viewport: "width=device-width, initial-scale=1",
  icons: {
    icon: "./favicon.ico",
  },
  openGraph: {
    title: "Generador de Ideas",
    description:
      "Generador de idea que usa la IA de Google gemini para dar las respuestas de las ideas",
    url: "https://idea-generator-alpha.vercel.app/",
    siteName: "Generador de Ideas",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "../../public/img/captura_de_pantalla_idea_generator.png",
        width: 1200,
        height: 630,
        alt: "Generador de Ideas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Generador de Ideas",
    description:
      "Generador de idea que usa la IA de Google gemini para dar las respuestas de las ideas",
    site: "@elax_4",
    creator: "@elax_4",
    images: ["../../public/img/captura_de_pantalla_idea_generator.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
