import Footer from "../components/Footer";
import prepareLiterals from "../helpers/prepareLiterals";
import Link from "next/link";
import prepareContent from "../helpers/prepareContent";
import Head from 'next/head'

const literals = {
  pt: {
    servicesTitle: '',
    customerAssistanceTitle: '',
    customerAssistanceDescription: '',
    afterSaleAssistanceTitle: '',
    afterSaleAssistanceDescription: '',
    technicalAssistanceTitle: '',
    technicalAssistanceDescription: '',
  },

  en: {
    servicesTitle: '',
    customerAssistanceTitle: '',
    customerAssistanceDescription: '',
    afterSaleAssistanceTitle: '',
    afterSaleAssistanceDescription: '',
    technicalAssistanceTitle: '',
    technicalAssistanceDescription: '',
  },

  es: {
    servicesTitle: 'SERVICIOS',
    customerAssistanceTitle: 'Asesoramiento',
    customerAssistanceDescription: 'Ea laborum ullamco ad qui quis. Aute sit exercitation nisi laborum tempor ullamco aute enim dolor ut ut. Commodo non eiusmod pariatur magna exercitation aliquip irure ex.',
    afterSaleAssistanceTitle: 'Servicio Post-Venta',
    afterSaleAssistanceDescription: 'Ea laborum ullamco ad qui quis. Aute sit exercitation nisi laborum tempor ullamco aute enim dolor ut ut. Commodo non eiusmod pariatur magna exercitation aliquip irure ex.',
    technicalAssistanceTitle: 'Asistencia Técnica',
    technicalAssistanceDescription: 'Ea laborum ullamco ad qui quis. Aute sit exercitation nisi laborum tempor ullamco aute enim dolor ut ut. Commodo non eiusmod pariatur magna exercitation aliquip irure ex.',
    makeQueryButtom: 'Contactar'
  }
}
export default function Services() {

  const { servicesTitle, customerAssistanceTitle, customerAssistanceDescription, afterSaleAssistanceTitle, afterSaleAssistanceDescription, technicalAssistanceTitle, technicalAssistanceDescription, makeQueryButtom} = prepareLiterals(literals)
  const content = prepareContent()
  
  return (
    <>
    <Head>
      <title>{servicesTitle}- Tesab Spain</title>
    </Head>
      <main className="min-h-screen">
        <h1 className="font-bakbakone text-center text-4xl m-4 ">
          {servicesTitle}
        </h1>
        <div className="lg:flex">

          <div className="relative my-10 sm:flex sm:flex-col sm:items-center md:flex lg:flex-col gap-5" id='customerAssistance'>
            <img className="-z-10 w-128 h-48 sm:min-w-160 sm:h-96 object-cover" src={content('/services/advasing.jpg')} alt="" />
            <div>
              <h2 className="font-bakbakone text-center text-3xl mx-2 absolute top-32 left-32 text-black bg-gray-200/50 backdrop-blur-sm rounded sm:static">{customerAssistanceTitle}</h2>
              <p className="p-4 font-alexandria">{customerAssistanceDescription}</p>
            </div>
          </div>

          <div className="relative my-10 sm:flex sm:flex-col sm:items-center md:flex lg:flex-col gap-5" id='afterSaleAssistance' >
            <img className="-z-10 w-128 h-48 sm:min-w-160 sm:h-96 object-cover" src={content('/services/postVenta.jpg')} alt="" />
            <div>
              <h2 className="font-bakbakone text-center text-3xl mx-2 absolute top-36 left-62 text-black bg-gray-200/50 backdrop-blur-sm rounded sm:static">{afterSaleAssistanceTitle}</h2>
              <p className="p-4 font-alexandria">{afterSaleAssistanceDescription}</p>
            </div>
          </div>

          <div className="relative my-10 sm:flex sm:flex-col sm:items-center md:flex lg:flex-col gap-5" id='technicalAssistance'>
            <img className="-z-10 w-128 h-48 sm:min-w-160 sm:h-96 object-cover" src={content('/services/technical-assistance.jpg')} alt="" />
            <div>
              <h2 className="font-bakbakone text-center text-3xl mx-2 absolute top-32 text-black bg-gray-200/50 backdrop-blur-sm rounded sm:static">{technicalAssistanceTitle}</h2>
              <p className="p-4 font-alexandria">{technicalAssistanceDescription}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center sticky bottom-5">
        <Link href="/contact"><button className="btn">{makeQueryButtom}</button></Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
