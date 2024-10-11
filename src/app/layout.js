import localFont from "next/font/local";
import "./globals.css";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const getistVisby = localFont({
  src: "./fonts/VisbyBold.otf",
  variable: "--font-visby",
  weight: "700",
});

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:ital,opsz,wght@0,14..32,100..900;1,14..32,100..900&display=swap" rel="stylesheet" />
        <title>Primeset</title>
      </head>
      <body className={`${getistVisby.variable}`}>
        {children}
        <ToastContainer position="top-right" />
      </body>
    </html>
  )
}
