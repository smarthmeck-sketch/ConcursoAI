import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ConcursoAI - Preparação para Concursos Públicos",
  description: "Plataforma SaaS com IA para estudar para concursos públicos",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
