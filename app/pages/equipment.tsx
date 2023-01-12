import Link from 'next/link'
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
      <div className='flex flex-col gap-10 pt-6 mx-2 sm:grid sm:grid-cols-2 sm:gap-x-4 lg:grid lg:grid-cols-3 lg:gap-x-4'>

        <div id='crushers' className='flex flex-col gap-7 shadow-lg overflow-hidden bg-no-repeat bg-cover'>
          <div className='relative hover:opacity-75 hover:scale-105 transition duration-300 ease-in-out'>
            <h2 className='font-bakbakone text-2xl absolute top-5 left-5 text-white inline-block'>{crushersTittle}</h2>
            <img className='-z-10 w-full object-cover sm:h-72 lg:h-96  ' src={content('/equipment/crushers/700i.jpg')} />
          </div>
          <div className='flex flex-col gap-6 h-full justify-between mx-4 pb-4'>
            <p className='font-alexandria text-justify'>{crushersDescription}</p>
            <div className='flex justify-around'>
              <Link href="/equipments/crushers"><button className='btn'>ver modelos</button></Link>
            </div>
          </div>
        </div>

        <div id='impactCrushers' className='flex flex-col gap-7 shadow-lg overflow-hidden bg-no-repeat bg-cover'>
          <div className='relative hover:opacity-75 hover:scale-105 transition duration-300 ease-in-out'>
            <h2 className='font-bakbakone text-2xl absolute top-5 left-5 text-white inline-block'>{impactCrushersTittle}</h2>
            <img className='-z-10 w-full object-cover sm:h-72 lg:h-96' src={content('/equipment/impactCrusher-coneCrushers/impact1012ts.png')} />
          </div>
          <div className='flex flex-col gap-6 h-full justify-between mx-4 pb-4'>
            <p className='font-alexandria text-justify'>{impactCrushersDescription}</p>
            <div className='flex justify-around'>
              <Link href="/equipments/impactCrusher-coneCrushers"><button className='btn'>ver modelos</button></Link>
            </div>
          </div>
        </div>

        <div id='scalpers' className='flex flex-col gap-7 shadow-lg overflow-hidden bg-no-repeat bg-cover'>
          <div className='relative hover:opacity-75 hover:scale-105 transition duration-300 ease-in-out'>
            <h2 className='font-bakbakone text-2xl absolute top-5 left-5 text-white inline-block'>{scalpersTittle}</h2>
            <img className='-z-10 w-full object-cover sm:h-72 lg:h-96' src={content('/equipment/scalpers/scalper.png')} />
          </div>
          <div className='flex flex-col gap-6 justify-between mx-4 pb-4'>
            <p className='font-alexandria text-justify'>{scalpersDescription}</p>
            <div className='flex justify-around'>
              <Link href="/equipments/scalpers"><button className='btn'>ver modelos</button></Link>
            </div>
          </div>
        </div>

        <div id='screeners' className='flex flex-col gap-7 shadow-lg overflow-hidden bg-no-repeat bg-cover'>
          <div className='relative hover:opacity-75 hover:scale-105 transition duration-300 ease-in-out'>
            <h2 className='font-bakbakone text-2xl absolute top-5 left-5 text-white inline-block'>{screenersTittle}</h2>
            <img className='-z-10 w-full object-cover sm:h-72 lg:h-96' src={content('/equipment/screeners/ts3600.png')} />
          </div>
          <div className='flex flex-col gap-6 justify-between mx-4 pb-4'>
            <p className='font-alexandria text-justify'>{screenersDescription}</p>
            <div className='flex justify-around'>
              <Link href="/equipments/screeners"><button className='btn'>ver modelos</button></Link>
            </div>
          </div>
        </div>

        <div id='conveyor' className='flex flex-col gap-7 shadow-lg overflow-hidden bg-no-repeat bg-cover'>
          <div className='relative hover:opacity-75 hover:scale-105 transition duration-300 ease-in-out'>
            <h2 className='font-bakbakone text-2xl absolute top-5 left-5 text-white inline-block'>{conveyorTittle}</h2>
            <img className='-z-10 w-full object-cover sm:h-72 lg:h-96' src={content('/equipment/trackedStockpilers/8042.jpg')} />
          </div>
          <div className='flex flex-col gap-6 justify-between mx-4 pb-4'>
            <p className='font-alexandria text-justify'>{conveyorDescription}</p>
            <div className='flex justify-around'>
              <Link href="/equipments/trackedStockpilers"><button className='btn'>ver modelos</button></Link>
            </div>
          </div>
        </div>

        <div id='recycling' className='flex flex-col gap-7 shadow-lg overflow-hidden bg-no-repeat bg-cover'>
          <div className='relative hover:opacity-75 hover:scale-105 transition duration-300 ease-in-out'>
            <h2 className='font-bakbakone text-2xl absolute top-5 left-5 text-white inline-block'>{recyclingTittle}</h2>
            <img className='-z-10 w-full object-cover sm:h-72 lg:h-96' src={content('/equipment/recycling/tr100e.png')} />
          </div>
          <div className='flex flex-col gap-6 justify-between mx-4 pb-4'>
            <p className='font-alexandria text-justify'>{recyclingDescription}</p>
            <div className='flex justify-around gap-1 flex-wrap'>
              <Link href="/equipments/recycling"><button className='btn'>ver modelos</button></Link>
            </div>
          </div>
        </div>

        <div id="dust-cannon" className='flex flex-col gap-7 shadow-lg col-start-2 overflow-hidden bg-no-repeat bg-cover'>
          <div className='relative hover:opacity-75 hover:scale-105 transition duration-300 ease-in-out'>
            <h2 className='font-bakbakone text-2xl absolute top-5 right-5 text-white inline-block'>{dustCannonTittle}</h2>
            <img className='-z-10 w-full object-cover sm:h-72 lg:h-96' src={content('/equipment/accesories/dustCannon.png')} />
          </div>
          <div className='flex flex-col gap-6 justify-between mx-4 pb-4'>
            <p className='font-alexandria text-justify'>{dustCannonDescription}</p>
            <div className='flex justify-around'>
              <Link href="/equipments/dustCannon"><button className='btn'>ver modelos</button></Link>

            </div>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </>
}
