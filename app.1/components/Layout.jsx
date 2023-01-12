import Header from './Header'
import Head from 'next/head'

export default function Layout({ children }) {
  return (
    <div className="h-screen">
      <Head>
        <title>Tesab Spain SL</title>
        <meta name="description" content="TODO set tesab description here" />
        <link rel="icon" href="https://www.tesab.com/wp-content/uploads/2020/03/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="https://www.tesab.com/wp-content/uploads/2020/03/favicon-32.png" type="image/png" sizes="32x32" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link href="https://fonts.googleapis.com/css2?family=Bakbak+One&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <div className='w-full pt-32 -z-10 h-full'>{children}</div>

    </div>
  )
}