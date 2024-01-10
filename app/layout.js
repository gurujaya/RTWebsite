import { Montserrat } from 'next/font/google'
import './globals.css'
import NavBar from './components/NavBar'
import Footer from './components/Footer'

const montserrat = Montserrat({
  subsets: ['latin'],
  variable: "--font-mont"
})

export const metadata = {
  title: 'Rooted Together',
  description: 'Rooted together is a non-profit organization that educates, advocates and incorporates urban farming into peoples lives.  A lot of people don’t know the importance of farming and agriculture, so we want to encourage people to pick up urban farming due to the massive benefits.',
}

export default function RootLayout({ children }) {
  return (

    <html className={montserrat.className} lang="en">
      <head>
        <link rel="icon" href="" />
      </head>
      <body className="bg-light w-full min-h-screeen dark:bg-primaryDark transition-colors">
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  )
}
