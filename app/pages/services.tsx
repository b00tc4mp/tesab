import Footer from "../components/Footer";
import useLiterals from "../hooks/useLiterals";

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
  }
}
export default function Services() {

  const { servicesTitle, customerAssistanceTitle, customerAssistanceDescription, afterSaleAssistanceTitle, afterSaleAssistanceDescription, technicalAssistanceTitle, technicalAssistanceDescription } = useLiterals(literals)
  return (
    <>
      <main>
        <h1 className="font-bakbak-one text-center text-3xl m-4">
          {servicesTitle}
        </h1>

        <div className="relative my-10" id = 'customerAssistance'>
          <img className="-z-10 w-128 h-48 object-cover" src="/advasing.jpg" alt="" />
          <h2 className="font-bakbak-one text-center text-3xl px-4 absolute top-32 left-32 text-black bg-gray-200/50 backdrop-blur-sm rounded">{customerAssistanceTitle}</h2>
          <p className="m-4">{customerAssistanceDescription}</p>
        </div>

        <div className="relative my-10" id = 'afterSaleAssistance' >
          <img className="-z-10 w-128 h-48 object-cover" src="/post-venta.jpg" alt="" />
          <h2 className="font-bakbak-one text-center text-3xl px-4 absolute top-32 left-48 text-black bg-gray-200/50 backdrop-blur-sm rounded">{afterSaleAssistanceTitle}</h2>
          <p className="m-4">{afterSaleAssistanceDescription}</p>
        </div>

        <div className="relative my-10" id = 'technicalAssistance'>
          <img className="-z-10 w-128 h-48 object-cover" src="/technical-assistance.jpg" alt="" />
          <h2 className="font-bakbak-one text-center text-3xl px-4 absolute top-32 text-black bg-gray-200/50 backdrop-blur-sm rounded">{technicalAssistanceTitle}</h2>
          <p className="m-4">{technicalAssistanceDescription}</p>
        </div>
      </main>

      <Footer />
    </>
  );
}
