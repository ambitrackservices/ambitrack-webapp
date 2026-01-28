import type { Metadata } from "next";
import Head from "next/head";
import { AuthProvider } from "./components/auth/provider";
import "./globals.css";

export const metadata: Metadata = {
  title: "AmbiTrack",
  description:
    "AmbiTrack es una aplicación web diseñada para recopilar, gestionar y visualizar reportes ambientales a través de una plataforma interactiva y fácil de usar.",
  keywords: [
    "Aplicación web",
    "monitoreo ambiental",
    "reportes ambientales",
    "incidentes ambientales",
    "protección ambiental",
    "mapa interactivo",
    "datos georreferenciados",
    "alertas ambientales",
    "participación ciudadana",
    "conservación ambiental",
    "biodiversidad",
    "gestión ambiental",
    "plataforma web",
    "tecnología ambiental",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <Head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <body>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
