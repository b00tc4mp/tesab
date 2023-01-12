import Header from './Header'
import Head from 'next/head'

export default function Layout({ children, isMobile }) {
  return (
    <div className="h-screen">
      <Head>
        <meta name="description" content="Tesab Spain es una empresa que se dedica a la venta y alquiler de maquinaria de clasificación, trituración y reciclajes. Distribuidor oficial de Tesab Engineering y los fabricantes Trackstack, Screenpod y JLM. Damos servicio principalmente a empresas dedicadas a la minería, fabricación de áridos, obra pública, movimiento de tierra y el tratamiento de residuos de construcción y demolición. Ofrece también reparaciones y recambios de maquinaria. " />
        <link rel="icon" href="https://www.tesab.com/wp-content/uploads/2020/03/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="https://www.tesab.com/wp-content/uploads/2020/03/favicon-32.png" type="image/png" sizes="32x32" />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
      </Head>

      <Header isMobile={isMobile} />


    <div className='w-full py-24 -z-10 h-full'>
        {children}
      </div>

    </div>
  )
}