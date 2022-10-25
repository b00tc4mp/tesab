import Head from 'next/head'
import Header from '../components/Header'
import Link from 'next/link'

export default function Equipment() {
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

      <h1 className='font-bold text-center text-3xl m-4'>EQUIPOS</h1>
      <div className='relative'>
        <h2 className='font-bold text-xl absolute top-5 text-white left-5 inline-block'>Machacadoras</h2>
        <img className='-z-10' src="images/equipment/crushers/700i.jpeg"></img>
      </div>
      <p className='text-justify m-6'>Entre nuestra gama de machaqueo destacan los modelos móviles Tesab 700i, Tesab 800i y la nueva machacadora eléctrica híbrida 700ie, todos ofreciendo una solución excelente y altamente eficaz para el cliente. Gracias al diseño único de las machacadoras con sus óptimos ángulos de trituración y sus mandíbulas largas, los equipos de trituración se han convertido en la herramienta idónea para aplicaciones de piedra dura.</p>
      <div className='flex justify-around'>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>700i</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>800i</button>
        <Link href="/crusher700ie"><button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>700ie</button></Link>
      </div>

      <h2 className='font-bold text-xl'>Molinos</h2>
      <img src=""></img>
      <p className='text-justify m-6'>Pariatur aliqua deserunt culpa elit ullamco cillum in voluptate culpa anim occaecat. Mollit id amet id cupidatat sint. Enim deserunt adipisicing laboris duis do consequat laborum officia consectetur dolore tempor minim. Pariatur quis sunt laborum magna pariatur ullamco.</p>
      <div className='flex justify-around'>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>623CT</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>1412T</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>1012TS</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>1150TC</button>
      </div>

      <h2 className='font-bold text-xl'>Precribadores</h2>
      <img src=""></img>
      <p className='text-justify m-6'>Do officia deserunt aliquip culpa minim aute adipisicing sint ad proident pariatur. Ex nulla deserunt excepteur culpa ex laboris irure proident nisi in. Veniam aliquip excepteur laborum tempor. Pariatur id est mollit nisi. Lorem consequat nisi quis officia nulla et dolore velit irure pariatur et ex aute est. In adipisicing ex ullamco dolor et esse incididunt excepteur magna.</p>
      <div className='flex justify-around'>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>TS1550</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>TS1860</button>
      </div>

      <h2 className='font-bold text-xl'>Cribas</h2>
      <img src=""></img>
      <p className='text-justify m-6'>Entre nuestra gama de machaqueo destacan los modelos móviles Tesab 700i, Tesab 800i y la nueva machacadora eléctrica híbrida 700ie, todos ofreciendo una solución excelente y altamente eficaz para el cliente. Gracias al diseño único de las machacadoras con sus óptimos ángulos de trituración y sus mandíbulas largas, los equipos de trituración se han convertido en la herramienta idónea para aplicaciones de piedra dura.</p>
      <div className='flex justify-around'>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>TS2430</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>TS2600</button>
      </div>

      <h2 className='font-bold text-xl'>Cintas</h2>
      <img src=""></img>
      <p className='text-justify m-6'>Entre nuestra gama de machaqueo destacan los modelos móviles Tesab 700i, Tesab 800i y la nueva machacadora eléctrica híbrida 700ie, todos ofreciendo una solución excelente y altamente eficaz para el cliente. Gracias al diseño único de las machacadoras con sus óptimos ángulos de trituración y sus mandíbulas largas, los equipos de trituración se han convertido en la herramienta idónea para aplicaciones de piedra dura.</p>
      <div className='flex justify-around'>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>8042T</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>8042TSL</button>
      </div>

      <h2 className='font-bold text-xl'>Reciclajes</h2>
      <img src=""></img>
      <p className='text-justify m-6'>Entre nuestra gama de machaqueo destacan los modelos móviles Tesab 700i, Tesab 800i y la nueva machacadora eléctrica híbrida 700ie, todos ofreciendo una solución excelente y altamente eficaz para el cliente. Gracias al diseño único de las machacadoras con sus óptimos ángulos de trituración y sus mandíbulas largas, los equipos de trituración se han convertido en la herramienta idónea para aplicaciones de piedra dura.</p>
      <div className='flex justify-around flex-wrap'>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>TR100</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>REC100</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>AIR VAC</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded mt-3 hover:bg-[#323A47] hover:text-amber-400'>WINDSHIFTER</button>
      </div>

      <h2 className='font-bold text-xl'>Sistemas de supreción de polvo</h2>
      <img src=""></img>
      <p className='text-justify m-6'>Entre nuestra gama de machaqueo destacan los modelos móviles Tesab 700i, Tesab 800i y la nueva machacadora eléctrica híbrida 700ie, todos ofreciendo una solución excelente y altamente eficaz para el cliente. Gracias al diseño único de las machacadoras con sus óptimos ángulos de trituración y sus mandíbulas largas, los equipos de trituración se han convertido en la herramienta idónea para aplicaciones de piedra dura.</p>
      <div className='flex justify-around'>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>S45</button>
        <button className='bg-amber-400 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'>S65</button>
      </div>
    </div>
  )
}
