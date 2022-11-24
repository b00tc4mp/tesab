//TODO : Agregar en la versión móvil los iconos de los valores para que se desplieguen y muestren la información

import Footer from "../components/Footer";
import useLiterals from "../hooks/useLiterals";

const literals = {

  pt: {

  },

  en: {

  },

  es: {
    whoWeAreTitle: 'QUIENES SOMOS',
    whoWeAreIntroduction1: 'Somos Tesab Spain S.L., distribuidor oficial de la reconocida marca irlandesa Tesab Engineering y los fabricantes Trackstack, Screenpod y JLM. Estamos especializados en el alquiler y la venta de equipos móviles de clasificación, trituración y reciclajes.',
    whoWeAreIntroduction2:'Damos servicio principalmente a empresas dedicadas a la minería, fabricación de áridos, obra pública, movimiento de tierra y el tratamiento de residuos de construcción y demolición.',
    whoWeAreIntroduction3: 'Contamos con una amplia experiencia, avalada por nuestro smás de 15 años en el mercado, ofreciendo soluciones y equipos móviles de alta calidad y rentabilidad en España, Portugal, Inglaterra y América del Sur.',
    whoWeAreIntroduction4:'NUESTRA MISIÓN proporcionar soluciones eficientes y mejorar los procesos de producción para aumentar la rentabilidad de empresas que desarrollen su actividad en el ámbito de la fabricación de áridos, reciclajes, obra civil, construcción y movimiento de tierras.',
    ourValuesTitle: 'NUESTROS VALORES',
    firstValueTitle: 'ESPECIALIZACIÓN Y ORIENTACIÓN AL CLIENTE',
    firstValueDescription: 'Especialización y conocimientos técnicos y del mercado, diferencian la empresa Tesab Spain  y nos capacitan para ser eﬁciente y diseñar proyectos personalizados. Gracias a nuestra ﬂota extensa de equipos móviles de alquiler, convertimos estos proyectos en reales, dando solución a las necesidades especíﬁcas de cada uno de nuestros clientes.',
    secondValueTitle: 'ÉTICA Y TRANSPARENCIA',
    secondValueDescription: 'En Tesab Spain no nos limitamos a ser un proveedor, creamos un vínculo de conﬁanza con  nuestros clientes convirtiéndonos en un colaborador con quien crecemos de forma conjunta. Nuestra política es ofrecer garantías reales, y un servicio pre y posventa de primer nivel.',
    thirdValueTitle: 'RENTABILIDAD Y EFICACIA',
    thirdValueDescription: 'En Tesab Spain nos comprometemos a ofrecer a nuestros clientes los equipos de mejor calidad y ayudarles a elegir el equipo más apropiado para sus necesidades, porque sabemos  que igual que calidad, la aptitud tiene un impacto significado en el ahorro de costes.',

  }
}


export default function WhoWeAre() {

  const { whoWeAreTitle, whoWeAreIntroduction, whoWeAreIntroduction1, whoWeAreIntroduction2, whoWeAreIntroduction3, whoWeAreIntroduction4, ourValuesTitle, firstValueTitle, firstValueDescription, secondValueTitle, secondValueDescription, thirdValueTitle, thirdValueDescription }= useLiterals(literals)

  return (
    <>
      <main>
        <div className="relative">
          <img
            className="-z-10 object-cover w-full h-48 sm:h-64 lg:h-112"
            src="/images/whoWeAre.jpg"
            alt=""
          />
          <h1 className="absolute m-4 font-bold text-center text-3xl text-white top-24 left-10 sm:text-6xl sm:top-36 sm:left-44 lg:text-8xl lg:top-72 lg:left-128">
            {whoWeAreTitle}
          </h1>
        </div>
        <div className="sm:flex sm:flex-col sm:items-center">
          <div className="sm:max-w-6xl sm:flex sm:flex-col sm:items-center">
            <div className="flex  flex-col gap-5 px-4 text-justify">
            <p className="text-justify m-6">{whoWeAreIntroduction}</p>
            <p>{whoWeAreIntroduction1}</p>
            <p>{whoWeAreIntroduction2}</p>
            <p>{whoWeAreIntroduction3}</p>
            <p>{whoWeAreIntroduction4}</p>
            </div>
           
            <h2 className="font-bold text-center text-3xl m-4">{ourValuesTitle}</h2>
            <ul className="mt-10">
              <li className="font-bold text-left m-4">{firstValueTitle}</li>
              <p className="text-justify m-6">
                {firstValueDescription}
              </p>
              <li className="font-bold text-left m-4">{secondValueTitle}</li>
              <p className="text-justify m-6">
               {secondValueDescription}
              </p>
              <li className="font-bold text-left m-4">{thirdValueTitle}</li>
              <p className="text-justify m-6">
                 {thirdValueDescription}
              </p>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
