import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Ideorama - Soluciones con Diseño',
  description: 'Ideorama ofrece soluciones con diseño creativo a medida para impulsar tu marca. Expertos en identidad corporativa, diseño web y más. ¡Potencia tu negocio con nosotros!',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="es"
    >
      <meta name="keywords" content="Ideorama, diseño creativo, identidad corporativa, diseño web, diseño gráfico, packaging, materiales promocionales"/>
      <meta name="author" content="Ideorama"/>
      <meta name="robots" content="index, follow"/>

      <body className={inter.className}>{children}</body>
    </html>
  )
}
