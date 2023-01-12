import Slider from "../components/Slider";
import Footer from '../components/Footer'
import prepareLiterals from '../helpers/prepareLiterals'
import prepareContent from '../helpers/prepareContent'
import Head from 'next/head'

const literals = {
  pt: {
    equipmentTitle: '',
    crushersTittle: '',
    crushersDescription: '',
    impactCrushersTittle: '',
    impactCrushersDescription: '',
    scalpersTittle: '',
    scalpersDescription: '',
    screenersTittle: '',
    screenersDescription: '',
    conveyorTittle: '',
    conveyorDescription: '',
    recyclingTittle: '',
    recyclingDescription: '',
    dustCannonTittle: '',
    dustCannonDescription: '',
  },

  en: {
    equipmentTitle: '',
    crushersTittle: '',
    crushersDescription: '',
    impactCrushersTittle: '',
    impactCrushersDescription: '',
    scalpersTittle: '',
    scalpersDescription: '',
    screenersTittle: '',
    screenersDescription: '',
    conveyorTittle: '',
    conveyorDescription: '',
    recyclingTittle: '',
    recyclingDescription: '',
    dustCannonTittle: '',
    dustCannonDescription: '',
  },

  es: {
    equipmentTitle: 'EQUIPOS',
    crushersTittle: 'Machacadoras',
    crushersDescription: 'Gracias al diseño único de nuestras machacadoras, con ángulos óptimos de trituración y mandíbulas largas, los equipos de machaqueo  Tesab se han convertido en la herramienta idónea para aplicaciones de piedra dura. Mejorando aún más con la nueva machacadora eléctrica híbrida 700ie, ofreciendo así una solución excelente y altamente eficaz para el cliente.',
    impactCrushersTittle: 'Molinos',
    impactCrushersDescription: 'Tanto de impacto como de cono, los molinos Tesab fueron diseñados para garantizar una máxima movilidad y una rápida instalación. La calidad de los componentes, combinada con el diseño único de nuestros molinos da como resultado un material de magnífica calidad teniendo como ventaja,  uno de los costes por tonelada más bajos en el mercado actual.',
    scalpersTittle: 'Precribadores',
    scalpersDescription: 'Caracterizados por su diseño robusto y su alto rendimiento, los precribadores Tesab poseen un gran éxito en el sector de canteras y reciclados.  Siendo la maquinaria ideal para emplearse previamente al proceso de trituración. Los distintos modelos que ofrecemos en Tesab están creados  para cubrir todas las posibles necesidades del cliente en cuanto a tamaño y producción.',
    screenersTittle: 'Cribas',
    screenersDescription: 'Nuestras cribas ofrecen  uno de los rangos más extensivos de equipos móviles de clasificación de dos y tres pisos, ideados para satisfacer las distintas demandas de los sectores de canteras, obra pública y reciclaje. Montadas sobre un chasis de orugas y accionadas por un motor diésel Caterpillar. Sus cribas son de alta vibración para asegurar el máximo rendimiento y la máxima calidad de producto clasificado.',
    conveyorTittle: 'Cintas',
    conveyorDescription: ' Las cintas Trackstack se han convertido en la herramienta idónea para reducir los costes de acopiar y manipular el material. Pudiendo evitar el uso de una cargadora y la costosa doble manipulación de material. Las cintas Trackstack ofrecen una máxima flexibilidad y movilidad, además de una instalación rápida en el lugar de trabajo y muy altos niveles de producción.',
    recyclingTittle: 'Reciclajes',
    recyclingDescription: 'En Tesab nos preocupamos por el medio-ambiente, por lo que hemos decidido incorporar en nuestra gama de productos, instalaciones para el tratamiento y valorización de los residuos de la construcción y la demolición (RCD), siendo distribuidores exclusivos de JLM en España.',
    dustCannonTittle: 'Cañón supresor de polvo',
    dustCannonDescription: 'Los cañones de supresión de polvo Screenpod S45 & S65 han sido construidos para durar. Montadas sobre un chasis robusto, estas máquinas son perfectas para la supresión de polvo en las industrias de demolición, reciclaje y canteras, donde ayudan a minimizar el polvo, a la vez reduciendo los riesgos para la salud y mejorando la calidad del aire.',
  }
}

export default function Equipment({ isMobile }) {
  const { equipmentTitle, crushersTittle, crushersDescription, impactCrushersTittle, impactCrushersDescription, scalpersTittle, scalpersDescription, screenersTittle, screenersDescription, conveyorTittle, conveyorDescription, recyclingTittle, recyclingDescription, dustCannonTittle, dustCannonDescription } = prepareLiterals(literals)
  const content = prepareContent()

  return <>
    <Head>
      <title>{equipmentTitle} - Tesab Spain</title>
    </Head>

    <main className='mb-8'>
      <h1 className='font-bakbakone text-center text-4xl m-4 font-bakbak-one'>{equipmentTitle}</h1>


      <div className='flex flex-col lg:flex-row lg:place-content-around'>
        <div className='max-w-[800px]'>
          <Slider id="slider">
            <img className="w-full" src={content('/equipment/crushers/700i/700i-1.jpg')} />
            <img className="w-full" src={content('/equipment/crushers/700i/700i-2.jpeg')} />
            <img className="w-full" src={content('/equipment/crushers/700i/700i-3.jpg')} />
          </Slider>
        </div>

        <div>
          <ul className="nav nav-tabs flex flex-col md:flex-row flex-wrap list-none border-b-0 pl-0 mb-4" id="tabs-tab3"
            role="tablist">
            <li className="nav-item" role="presentation">
              <a href="#tabs-home3" className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent active" id="tabs-home-tab3" data-bs-toggle="pill" data-bs-target="#tabs-home3" role="tab" aria-controls="tabs-home3" aria-selected="true">Descripción</a>
            </li>
            <li className="nav-item" role="presentation">
              <a href="#tabs-profile3" className="nav-link w-full block font-medium text-xs leading-tight uppercase border-x-0 border-t-0 border-b-2 border-transparent px-6 py-3 my-2 hover:border-transparent hover:bg-gray-100 focus:border-transparent" id="tabs-profile-tab3" data-bs-toggle="pill" data-bs-target="#tabs-profile3" role="tab" aria-controls="tabs-profile3" aria-selected="false">Especificaciones Técnicas</a>
            </li>
          </ul>

          <div className="tab-content">
            <div className="tab-pane fade show active" id="tabs-home3" role="tabpanel" aria-labelledby="tabs-home-tab3">
              La 700i es una machacadora móvil de alta robustez montada sobre orugas y diseñada para el machaqueo primario en frente de cantera. Dispone de un diseño único de alimentación con dos precribadores independientes que permiten al cliente obtener un producto determinado por la cinta lateral. La 700i está accionada por un motor Caterpillar de 300cv y cuenta con una machacadora de 1100 x 700mm con un sistema de ajuste hidráulico. Es el equipo idóneo para las aplicaciones más exigentes dentro de la industria de la minería, reciclajes y canteras.
            </div>
            <div className="tab-pane fade" id="tabs-profile3" role="tabpanel" aria-labelledby="tabs-profile-tab3">
              <ul>
                <li>'Dimensiones de la machacadora: 1100 x 700 mm.'</li>
                <li>'Dimensiones de la machacadora: 1100 x 700 mm.'</li>
                <li>'Dimensiones de la machacadora: 1100 x 700 mm.'</li>
                <li>'Dimensiones de la machacadora: 1100 x 700 mm.'</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </>
}
