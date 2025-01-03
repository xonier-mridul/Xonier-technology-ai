import { Plus_Jakarta_Sans } from 'next/font/google';
import "./globals.css";
import Navbar from '@/components/Navbar';
import Whatsapp from '@/components/Whatsapp';
import Footer from '@/components/Footer';
import AosComponent from '@/subcomponent/AosComponent';

const plusjakartsans = Plus_Jakarta_Sans({
  subsets:["latin"],
  weight: [ '400', "500", "600", "700", "800"],
  variable: "--font-plus-jakarta-sans"

})

export const metadata = {
  title: "Xonier Technology - Innovating Tomorrow",
  description: "Xonier Technologies is a software development company. Our strength lies in software development as per customer needs. We operate globally.We are a Young, Vibrant, and experienced business house with a strong focus on customized software development, and mobile application development.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${plusjakartsans.className} antialiased`}
      >
        <Navbar/>
        <Whatsapp/>
        <AosComponent/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
