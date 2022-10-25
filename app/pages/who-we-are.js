import Head from 'next/head'
import Header from '../components/Header'

export default function WhoWeAre() {
  return (
    <div>
      <Head>
        <title>Tesab Spain SL</title>
        <meta name="description" content="TODO set tesab description here" />
        <link rel="icon" href="https://www.tesab.com/wp-content/uploads/2020/03/favicon-16.png" type="image/png" sizes="16x16" />
        <link rel="icon" href="https://www.tesab.com/wp-content/uploads/2020/03/favicon-32.png" type="image/png" sizes="32x32" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined" rel="stylesheet" />
      </Head>

      <Header />

      <h1 className='font-bold text-center text-3xl m-4'>QUIENES SOMOS</h1>
      <p className='text-justify m-6'>Somos Tesab Spain S.L., distribuidor oficial de la reconocida marca sueco-Irlandesa Tesab Engineeringy sus marcas afiliadas Trackstack, Screenpod y JLM.  Estamos especializados en alquiler y venta de equipos móviles para clasificación, trituración y reciclaje, complementos para gestión de residuos inertes y cabinas de triaje.</p>

        <p className='text-justify m-6'>Damos servicio principalmente a empresas dedicadas a la minería, fabricación de áridos, reciclaje y gestión de RCDs.</p>
        <p className='text-justify m-6'>Contamos con una amplia experiencia, avalada por nuestros más de 15 años en el mercado, ofreciendo soluciones y equipos móviles de alta calidad y rentabilidad, en España, Portugal, Inglaterra y América del Sur.</p>
        <p className='text-justify m-6'>Nuestra especialización y conocimientos técnicos y del mercado, nos diferencian y nos capacitan para ser eficientes y diseñar proyectos personalizados. Gracias a nuestra flota de alquiler, con más de 50 equipos móviles en propiedad, convertimos estos proyectos en reales, dando solución a las necesidades específicas de cada uno de nuestros clientes.</p>
        <p className='text-justify m-6'>Puedes encontrarnos en Bizkaia, en nuestra sede donde disponemos de 300 m3 que se distribuyen entre oficinas y almacén, con un amplio stock de repuestos, que no permiten ser lideres en el servicio post venta.</p>
        <p className='text-justify m-6'>Basamos nuestro trabajo en la escucha activa y el desarrollo de relaciones comerciales duraderas y rentables para todos los implicados. Nos sentimos identificados y nos representan la transparencia, la eficacia y la pasión por nuestro negocio y el sector.</p>
    </div>
  )
}
