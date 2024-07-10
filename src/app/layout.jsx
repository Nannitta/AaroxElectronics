import { Inter } from "next/font/google";
import "./globals.css";
import Header from './components/Header/Header.jsx';
import SideMenu from './components/SideMenu/SideMenu.jsx';
import Footer from './components/Footer/Footer.jsx';
import CookiesConsent from './components/CookiesConsent/CookiesConsent';

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aarox Electronics",
  description: "",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SideMenu/>
        <Header/>
        {children}
        <Footer/>
        <CookiesConsent/>
      </body>
    </html>
  );
}
