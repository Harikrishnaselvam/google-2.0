

import Footer from '@/components/Footer';
import './globals.css'
import { Inter } from '@next/font/google';
import {BrowserRouter as Router} from 'react-router-dom';


const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Google2.0',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen" >
        {children}
        <Footer/>
      </body>
    </html>
  
  )
}
