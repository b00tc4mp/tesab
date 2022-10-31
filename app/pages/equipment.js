import Link from 'next/link'
import Footer from '../components/Footer'

export default function Equipment() {
  return <>
    <main>
      <h1 className='font-bold text-center text-3xl m-4 font-bakbak-one'>EQUIPOS</h1>

      <div className='relative'>
        <h2 className='font-bold text-2xl absolute top-5 text-white left-5 inline-block '>Machacadoras</h2>
        <img className='-z-10 lg:w-128 lg:h-48 lg:object-cover' src="images/equipment/crushers/700i.jpeg"></img>
      </div>
      <p className='text-justify m-4'>Entre nuestra gama de machaqueo destacan los modelos móviles Tesab 700i, Tesab 800i y la nueva machacadora eléctrica híbrida 700ie, todos ofreciendo una solución excelente y altamente eficaz para el cliente. Gracias al diseño único de las machacadoras con sus óptimos ángulos de trituración y sus mandíbulas largas, los equipos de trituración se han convertido en la herramienta idónea para aplicaciones de piedra dura.</p>
      <div className='flex justify-around my-6'>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>700i</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>800i</button>
        <Link href="/crusher700ie"><button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>700ie</button></Link>
      </div>

      <div className='relative'>
        <h2 className='font-bold text-2xl absolute top-5 text-white left-5 inline-block'>Molinos</h2>
        <img className='-z-10 lg:w-128 lg:h-48 lg:object-cover' src="images/equipment/impactCrusher-coneCrushers/impact1012ts.png"></img>
      </div>
      <p className='text-justify m-6'>Pariatur aliqua deserunt culpa elit ullamco cillum in voluptate culpa anim occaecat. Mollit id amet id cupidatat sint. Enim deserunt adipisicing laboris duis do consequat laborum officia consectetur dolore tempor minim. Pariatur quis sunt laborum magna pariatur ullamco.</p>
      <div className='flex justify-around my-6'>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>623CT</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>1412T</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>1012TS</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>1150TC</button>
      </div>

      <div className='relative'>
        <h2 className='font-bold text-2xl absolute top-5 text-white left-5 inline-block'>Precribadores</h2>
        <img className='-z-10 lg:w-128 lg:h-48 lg:object-cover' src="images/equipment/scalpers/scalper.png"></img>
      </div>
      <p className='text-justify m-6'>Do officia deserunt aliquip culpa minim aute adipisicing sint ad proident pariatur. Ex nulla deserunt excepteur culpa ex laboris irure proident nisi in. Veniam aliquip excepteur laborum tempor. Pariatur id est mollit nisi. Lorem consequat nisi quis officia nulla et dolore velit irure pariatur et ex aute est. In adipisicing ex ullamco dolor et esse incididunt excepteur magna.</p>
      <div className='flex justify-around my-6'>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>TS1550</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>TS1860</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>TS1340</button>
      </div>

      <div className='relative'>
        <h2 className='font-bold text-2xl absolute top-5 text-white left-5 inline-block'>Cribas</h2>
        <img className='-z-10 lg:w-128 lg:h-48 lg:object-cover' src="images/equipment/screeners/ts3600.jpeg"></img>
      </div>
      <p className='text-justify m-6'>Entre nuestra gama de machaqueo destacan los modelos móviles Tesab 700i, Tesab 800i y la nueva machacadora eléctrica híbrida 700ie, todos ofreciendo una solución excelente y altamente eficaz para el cliente. Gracias al diseño único de las machacadoras con sus óptimos ángulos de trituración y sus mandíbulas largas, los equipos de trituración se han convertido en la herramienta idónea para aplicaciones de piedra dura.</p>
      <div className='flex justify-around my-6'>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>TS2430</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>TS2600</button>
      </div>


      <h2 >Cintas</h2>
      <img src=""></img>
      <p className='text-justify m-6'>Entre nuestra gama de machaqueo destacan los modelos móviles Tesab 700i, Tesab 800i y la nueva machacadora eléctrica híbrida 700ie, todos ofreciendo una solución excelente y altamente eficaz para el cliente. Gracias al diseño único de las machacadoras con sus óptimos ángulos de trituración y sus mandíbulas largas, los equipos de trituración se han convertido en la herramienta idónea para aplicaciones de piedra dura.</p>
      <div className='flex justify-around my-6'>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>8042T</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>8042TSL</button>
      </div>

      <div className='relative'>
        <h2 className='font-bold text-2xl absolute top-5 text-white left-5 inline-block'>Reciclajes</h2>
        <img className='-z-10 lg:w-128 lg:h-48 lg:object-cover' src="images/equipment/recycling/tr100e.png"></img>
      </div>
      <p className='text-justify m-6'>Entre nuestra gama de machaqueo destacan los modelos móviles Tesab 700i, Tesab 800i y la nueva machacadora eléctrica híbrida 700ie, todos ofreciendo una solución excelente y altamente eficaz para el cliente. Gracias al diseño único de las machacadoras con sus óptimos ángulos de trituración y sus mandíbulas largas, los equipos de trituración se han convertido en la herramienta idónea para aplicaciones de piedra dura.</p>
      <div className='flex justify-around my-6 flex-wrap'>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>TR100</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>REC100</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>AIR VAC</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded mt-3 hover:bg-[#323A47] hover:text-amber-400'>WINDSHIFTER</button>
      </div>


      <h2 className='font-bold text-2xl'>Sistemas de supreción de polvo</h2>
      <img src=""></img>
      <p className='text-justify m-6'>Entre nuestra gama de machaqueo destacan los modelos móviles Tesab 700i, Tesab 800i y la nueva machacadora eléctrica híbrida 700ie, todos ofreciendo una solución excelente y altamente eficaz para el cliente. Gracias al diseño único de las machacadoras con sus óptimos ángulos de trituración y sus mandíbulas largas, los equipos de trituración se han convertido en la herramienta idónea para aplicaciones de piedra dura.</p>
      <div className='flex justify-around my-6'>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>S45</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>S65</button>
      </div>
    </main>

    <Footer />
  </>
}
