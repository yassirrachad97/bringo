import type React from "react"
import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Bringo by Carrefour - Livraison de courses à domicile",
  description:
    "Commandez vos courses en ligne et faites-vous livrer à domicile en moins de 90 minutes avec Bringo by Carrefour"
   
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
