import Link from 'next/link'
import Footer from '../components/Footer'
import useLiterals from '../hooks/useLiterals'
import useContent from '../hooks/useContent'

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
    impactCrushersDescription: 'Pariatur aliqua deserunt culpa elit ullamco cillum in voluptate culpa anim occaecat. Mollit id amet id cupidatat sint. Enim deserunt adipisicing laboris duis do consequat laborum officia consectetur dolore tempor minim. Pariatur quis sunt laborum magna pariatur ullamco.',
    scalpersTittle: 'Precribadores',
    scalpersDescription: 'Pariatur aliqua deserunt culpa elit ullamco cillum in voluptate culpa anim occaecat. Mollit id amet id cupidatat sint. Enim deserunt adipisicing laboris duis do consequat laborum officia consectetur dolore tempor minim. Pariatur quis sunt laborum magna pariatur ullamco.',
    screenersTittle: 'Cribas',
    screenersDescription: 'Pariatur aliqua deserunt culpa elit ullamco cillum in voluptate culpa anim occaecat. Mollit id amet id cupidatat sint. Enim deserunt adipisicing laboris duis do consequat laborum officia consectetur dolore tempor minim. Pariatur quis sunt laborum magna pariatur ullamco.',
    conveyorTittle: 'Cintas',
    conveyorDescription: 'Pariatur aliqua deserunt culpa elit ullamco cillum in voluptate culpa anim occaecat. Mollit id amet id cupidatat sint. Enim deserunt adipisicing laboris duis do consequat laborum officia consectetur dolore tempor minim. Pariatur quis sunt laborum magna pariatur ullamco.',
    recyclingTittle: 'Reciclajes',
    recyclingDescription: 'Pariatur aliqua deserunt culpa elit ullamco cillum in voluptate culpa anim occaecat. Mollit id amet id cupidatat sint. Enim deserunt adipisicing laboris duis do consequat laborum officia consectetur dolore tempor minim. Pariatur quis sunt laborum magna pariatur ullamco.',
    dustCannonTittle: 'Cañón de polvo',
    dustCannonDescription: 'Pariatur aliqua deserunt culpa elit ullamco cillum in voluptate culpa anim occaecat. Mollit id amet id cupidatat sint. Enim deserunt adipisicing laboris duis do consequat laborum officia consectetur dolore tempor minim. Pariatur quis sunt laborum magna pariatur ullamco.',
  }
}

export default function Equipment() {
  const { equipmentTitle, crushersTittle, crushersDescription, impactCrushersTittle, impactCrushersDescription, scalpersTittle, scalpersDescription, screenersTittle, screenersDescription, conveyorTittle, conveyorDescription, recyclingTittle, recyclingDescription, dustCannonTittle, dustCannonDescription } = useLiterals(literals)
  const content = useContent()

  return <>
    <main>
      <h1 className='font-bakbakone text-center text-4xl m-4 font-bakbak-one'>{equipmentTitle}</h1>
      <div className=' pt-6 sm:grid sm:grid-cols-2 sm:gap-x-4 lg:grid lg:grid-cols-3 lg:gap-x-4'>

        <div id='crushers'>
          <div className='relative'>
            <h2 className='font-bakbakone text-2xl absolute top-5 text-white left-5 inline-block'>{crushersTittle}</h2>
            <img className='-z-10 w-full object-cover sm:h-72 lg:h-96' src={content('/equipment/crushers/700i.jpeg')}/>
          </div>
          <p className='font-alexandria text-justify m-6'>{crushersDescription}</p>
          <div className='flex justify-around my-6'>
            <Link href="/equipments/700i"><button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>700i</button></Link>
            <Link href="/crusher800i"><button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>800i</button></Link>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>700ie</button>
          </div>
        </div>

        <div id='impactCrushers'>
          <div className='relative'>
            <h2 className='font-bakbakone text-2xl absolute top-5 text-white left-5 inline-block'>{impactCrushersTittle}</h2>
            <img className='-z-10 w-full object-cover sm:h-72 lg:h-96' src={content('/equipment/impactCrusher-coneCrushers/impact1012ts.png')}/>
          </div>
          <p className='font-alexandria text-justify m-6'>{impactCrushersDescription}</p>
          <div className='flex justify-around my-6'>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>623CT</button>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>1412T</button>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>1012TS</button>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>1150TC</button>
          </div>
        </div>

        <div id='scalpers'>
          <div className='relative'>
            <h2 className='font-bakbakone text-2xl absolute top-5 text-white left-5 inline-block'>{scalpersTittle}</h2>
            <img className='-z-10 w-full object-cover sm:h-72 lg:h-96' src={content('/equipment/scalpers/scalper.png')} />
          </div>
          <p className='font-alexandria text-justify m-6'>{scalpersDescription}</p>
          <div className='flex justify-around my-6'>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>TS1550</button>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>TS1860</button>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>TS1340</button>
          </div>
        </div>

        <div id='screeners'>
          <div className='relative'>
            <h2 className='font-bakbakone text-2xl absolute top-5 text-white left-5 inline-block'>{screenersTittle}</h2>
            <img className='-z-10 w-full object-cover sm:h-72 lg:h-96' src={content('/equipment/screeners/ts3600.png')}/>
          </div>
          <p className='font-alexandria text-justify m-6'>{screenersDescription}</p>
          <div className='flex justify-around my-6'>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>TS2430</button>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>TS2600</button>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>TS3600</button>
          </div>
        </div>

        <div id='conveyor'>
          <div className='relative'>
            <h2 className='font-bakbakone text-2xl absolute top-5 text-white left-5 inline-block'>{conveyorTittle}</h2>
            <img className='-z-10 w-full object-cover sm:h-72 lg:h-96' src={content('/equipment/trackedStockpilers/8042.jpg')}/>
          </div>
          <p className='font-alexandria text-justify m-6'>{conveyorDescription}</p>
          <div className='flex justify-around my-6'>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>8042T</button>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>8042TSL</button>
          </div>
        </div>

        <div id='recycling'>
          <div className='relative'>
            <h2 className='font-bakbakone text-2xl absolute top-5 text-white left-5 inline-block'>{recyclingTittle}</h2>
            <img className='-z-10 w-full object-cover sm:h-72 lg:h-96' src={content('/equipment/recycling/tr100e.png')}/>
          </div>
          <p className='font-alexandria text-justify m-6'>{recyclingDescription}</p>
          <div className='flex justify-around my-6 flex-wrap'>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>TR100</button>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>REC100</button>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>AIR VAC</button>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>WINDSHIFTER</button>
          </div>
        </div>

        <div id="dust-cannon">
          <div>
            <h2 className='font-bold text-2xl absolute top-5 text-white  inline-block'>{dustCannonTittle}</h2>
            <img className='-z-10 w-full object-cover sm:h-72 lg:h-96' src={content('/equipment/accesories/dustCannon.png')}/>
          </div>
          <p className='font-alexandria text-justify m-6'>{dustCannonDescription}</p>
          <div className='flex justify-around my-6'>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>S45</button>
            <button className='bg-amber-400 px-4 py-2 font-bakbakone rounded ease-in-out duration-300 hover:bg-[#323A47] hover:text-amber-400 hover:px-6 hover:py-3 hover:text-lg'>S65</button>
          </div>
        </div>
      </div>
    </main>

    <Footer />
  </>
}
