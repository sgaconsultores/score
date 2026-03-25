import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SCORE - Tu Juego. Tu Nivel.",
  description: "Entrena · Compite · Destaca — La app de fútbol amateur con IA",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
          rel="stylesheet"
        />
      </head>
      <body className="font-primary antialiased">{children}</body>
    </html>
  );
}
