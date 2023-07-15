import { Providers } from "@/states/provider";
import "./globals.css";
import type { Metadata } from "next";
import Theme from "@/components/Theme";

export const metadata: Metadata = {
  title: "SmartEats",
  description:
    "Descubre recetas deliciosas y saludables en SmartEats, una aplicación web que te brinda una amplia variedad de opciones culinarias. Explora platos tradicionales, veganos y sin gluten, con instrucciones fáciles de seguir y listas de ingredientes. Personaliza tus preferencias alimenticias y mejora tus habilidades en la cocina con SmartEats.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Theme>{children}</Theme>
        </Providers>
      </body>
    </html>
  );
}
