//TODO- Una vez que tenga el contenido, organizar la info según los tamaños de la pantalla

import Link from 'next/link'
import Footer from "../components/Footer";
import useLiterals from '../hooks/useLiterals'
import useContent from '../hooks/useContent'
import Slider from '../components/Slider'
import Slide from '../components/Slide'

const literals = {
  pt: {
    descriptionTittle: 'Descrição',
    descriptionText: '',
    technicalSpecificationsTitle: 'Especificações técnicas',
    technicalSpecificationsText1: '',
    technicalSpecificationsText2: '',
    technicalSpecificationsText3: '',
    technicalSpecificationsText4: '',
    technicalSpecificationsText5: '',
    technicalSpecificationsText6: '',
    makeQueryButton: 'Pedido de informação',
  },

  en: {
    descriptionTittle: 'Description',
    descriptionText: '',
    technicalSpecificationsTitle: 'Technical Specifications',
    technicalSpecificationsText1: '',
    technicalSpecificationsText2: '',
    technicalSpecificationsText3: '',
    technicalSpecificationsText4: '',
    technicalSpecificationsText5: '',
    technicalSpecificationsText6: '',
    makeQueryButton: 'More information',
  },

  es: {
    descriptionTitle: 'Descripción',
    descriptionText: 'El Tesab 700i es un equipo móvil de machaqueo de alta robustez montado sobre orugas y diseñado para el machaqueo primario en frente de cantera. Dispone de un diseño único de alimentación con dos precribadores independientes que permiten al cliente obtener un producto determinado por la cinta lateral. La 700i está accionada por un motor Caterpillar de 300cv y cuenta con una machacadora de 1100 x 700mm con un sistema de ajuste hidráulico. Es el equipo idóneo para las aplicaciones más exijentes de las industrias de minería, canteras y reciclaje.',
    technicalSpecificationsTitle: 'Especificaciones Técnicas',
    technicalSpecificationsText1: 'Dimensiones de la machacadora: 1100 x 700 mm.',
    technicalSpecificationsText2: 'Profundidad de la machacadora: 1550 mm.',
    technicalSpecificationsText3: 'Tolva de 9,2 m3.',
    technicalSpecificationsText4: 'Sistema de doble alimentador independiente.',
    technicalSpecificationsText5: 'Banda magnética y cinta lateral (opcionales).',
    technicalSpecificationsText6: 'Motor diésel Caterpillar de 300 CV.',
    technicalSpecificationsText7: 'Peso: 46.720 kg.',
    makeQueryButton: 'Solicitar información',
  }
}

export default function Crusher700ie() {
  const { descriptionTitle, descriptionText, technicalSpecificationsTitle, technicalSpecificationsText1, technicalSpecificationsText2, technicalSpecificationsText3, technicalSpecificationsText4, technicalSpecificationsText5, technicalSpecificationsText6, technicalSpecificationsText7, makeQueryButton } = useLiterals(literals)
  const content = useContent()

  return (
    <>
      <main className='items-center bg-[#323A47]'>
        <h1 className="font-bakbakone text-center text-4xl mx-4 lg:my-4 lg:text-5xl">700i</h1>

        <Slider>
          <Slide><video className="w-[500px] max-w-none" autoPlay loop muted src={content('/equipment/crushers/700i/700iVideo.mp4')} type="video/mp4"/></Slide>
          <Slide><img className="w-[500px] max-w-none" src={content('/equipment/crushers/700i/700i1.jpg')}/></Slide>
          <Slide><img className="w-[500px] max-w-none" src={content('/equipment/crushers/700i/700i2.jpg')}/></Slide>
        </Slider>


        <div className='lg:flex justify-center gap-x-32'>

          <div id='default-carousel' className="relative" data-carousel='static'>

            <div className="relative h-56 overflow-hidden rounded-lg md:h-96">

              <div className="duration-700 ease-in-out" data-carousel-item>
                <span className="absolute text-2xl font-semibold text-white -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 sm:text-3xl dark:text-gray-800">First Slide</span>
                <video autoPlay loop muted className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <source src={content('/equipment/crushers/700i/700iVideo.mp4')} type="video/mp4" />
                </video>
              </div>

              <div className="duration-700 ease-in-out" data-carousel-item>
                <img className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={content('/equipment/crushers/700i/700i1.jpg')} />
              </div>

              <div className="hidden duration-700 ease-in-out" data-carousel-item>
                <img className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" src={content('/equipment/crushers/700i/700i2.jpg')} />
              </div>
            </div>

            <div className="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2 bg-black">
              <button type="button" className="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
              <button type="button" className="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
            </div>

            <button type="button" className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 19l-7-7 7-7"></path></svg>
                <span className="sr-only">Previous</span>
              </span>
            </button>
            <button type="button" className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                <svg aria-hidden="true" className="w-6 h-6 text-white dark:text-gray-800" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"></path></svg>
                <span className="sr-only">Next</span>
              </span>
            </button>
          </div>

          <div className='flex flex-col p-4 gap-5 lg:w-160'>

            <h2 className="font-bakbakone">{descriptionTitle}</h2>
            <p className="font-alexandria text-justify">{descriptionText}</p>

            <h2 className="font-bakbakone">{technicalSpecificationsTitle}</h2>
            <ul className="list-disc px-4">
              <li className='font-alexandria'>{technicalSpecificationsText1}</li>
              <li className='font-alexandria'>{technicalSpecificationsText2}</li>
              <li className='font-alexandria'>{technicalSpecificationsText3}</li>
              <li className='font-alexandria'>{technicalSpecificationsText4}</li>
              <li className='font-alexandria'>{technicalSpecificationsText5}</li>
              <li className='font-alexandria'>{technicalSpecificationsText6}</li>
              <li className='font-alexandria'>{technicalSpecificationsText7}</li>
            </ul>

          </div> 
        </div>

        <div className="flex justify-center sticky">
          <Link href="/contact"><button className="bg-amber-400 my-4 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400">
            {" "}
            {makeQueryButton}{" "}
          </button></Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
