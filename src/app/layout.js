import Navbar from '@/components/Navbar'
import './globals.css'
import { Inter,Nunito_Sans } from 'next/font/google'
import Header from '@/components/Header'
import Loader from '@/components/Loader'

const inter = Inter({ subsets: ['latin'] })
const nunitoSans = Nunito_Sans({
  subsets: ['latin'],
  weight: [ '200', '300', '400', '500']
})

export const metadata = {
  title: 'logically-nerd',
  description: 'Portfolio of Adnan Shahid aka logically-nerd',
}

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`${nunitoSans.className} tracking-wider min-h-screen w-full grid place-items-center py-24 max-md:pb-16 bg-gray-900 text-white md:text-lg`}>
        <Loader />
        <Header />
        {children}
        <Navbar />
      </body>
    </html>
  )
}
