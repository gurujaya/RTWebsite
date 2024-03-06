import { Montserrat } from 'next/font/google'
import './globals.css'
import '../public/Rooted.png'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import Head from 'next/head';


const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
})


export const metadata = {
  title: 'Rooted Together',
  description: 'Rooted together is a non-profit organization that educates, advocates and incorporates urban farming into peoples lives.  A lot of people don’t know the importance of farming and agriculture, so we want to encourage people to pick up urban farming due to the massive benefits.',
  icons:{
    icon:['/favicon.ico?v=4'],
    apple:['/apple-touch-icon.png?v=4'],
  shortcut:['/apple-touch-icon.png'],
  }
}

export default function RootLayout({ children }) {
  return (

    <html className={montserrat.className} lang="en">
      <Head>
      <link rel="icon" href="/favicon.ico" sizes="any" />
      </Head>
      <body className="bg-light w-full min-h-screeen dark:bg-primaryDark transition-colors">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
