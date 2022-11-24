import Footer from "../components/Footer";
import useLiterals from "../hooks/useLiterals";
import Link from "next/link";

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

  const { servicesTitle, customerAssistanceTitle, customerAssistanceDescription, afterSaleAssistanceTitle, afterSaleAssistanceDescription, technicalAssistanceTitle, technicalAssistanceDescription, makeQueryButtom} = useLiterals(literals)
  return (
    <>
      <main>
        <h1 className="font-bakbak-one text-center text-3xl m-4">
          {servicesTitle}
        </h1>
        <div className="lg:flex">

          <div className="relative my-10 sm:flex sm:items-center lg:flex lg:flex-col" id='customerAssistance'>
            <img className="-z-10 w-128 h-48 sm:min-w-160 sm:h-96 object-cover" src="/advasing.jpg" alt="" />
            <div>
              <h2 className="font-bakbak-one text-center text-3xl px-4 absolute top-32 left-32 text-black bg-gray-200/50 backdrop-blur-sm rounded sm:static">{customerAssistanceTitle}</h2>
              <p className="m-4">{customerAssistanceDescription}</p>
            </div>
          </div>

          <div className="relative my-10 sm:flex sm:items-center lg:flex lg:flex-col" id='afterSaleAssistance' >
            <img className="-z-10 w-128 h-48 sm:min-w-160 sm:h-96 object-cover" src="/images/services/postVenta.jpg" alt="" />
            <div>
              <h2 className="font-bakbak-one text-center text-3xl px-4 absolute top-32 left-48 text-black bg-gray-200/50 backdrop-blur-sm rounded sm:static">{afterSaleAssistanceTitle}</h2>
              <p className="m-4">{afterSaleAssistanceDescription}</p>
            </div>
          </div>

          <div className="relative my-10 sm:flex sm:items-center lg:flex lg:flex-col" id='technicalAssistance'>
            <img className="-z-10 w-128 h-48 sm:min-w-160 sm:h-96 object-cover" src="/technical-assistance.jpg" alt="" />
            <div>
              <h2 className="font-bakbak-one text-center text-3xl px-4 absolute top-32 text-black bg-gray-200/50 backdrop-blur-sm rounded sm:static">{technicalAssistanceTitle}</h2>
              <p className="m-4">{technicalAssistanceDescription}</p>
            </div>
          </div>
        </div>
        <div className="flex justify-center sticky bottom-5">
        <Link href="/contact"><buttom className="bg-amber-400 px-4 py-2 font-bold rounded">{makeQueryButtom}</buttom></Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
