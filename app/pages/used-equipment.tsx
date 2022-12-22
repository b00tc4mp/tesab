//TODO: hace una especie de filtro al costado, sobre todo para la pantalla grande. 

import Link from "next/link";
import Footer from "../components/Footer";
import prepareLiterals from "../helpers/prepareLiterals";
import prepareContent from '../helpers/prepareContent'
import Slide from "../components/Slide";
import Slider from "../components/Slider";

const literals = {
  pt: {
    usedEquipmentTitle: '',
    model: '',
    available: '',
    yearOfManufacture: '',
    hours: '',
  },

  en: {
    usedEquipmentTitle: '',
    model: '',
    available: '',
    yearOfManufacture: '',
    hours: '',
  },

  es: {
    usedEquipmentTitle: 'EQUIPOS USADOS',
    model: 'Modelo: ',
    available: 'En stock',
    yearOfManufacture: 'Año de fabricación: ',
    hours: 'Horas: ',
    makeQueryButton: 'Más información'
  }
}

export default function UsedEquipment({ isMobile }) {

  const { usedEquipmentTitle, model, available, yearOfManufacture, hours, makeQueryButton } = prepareLiterals(literals)
  const content = prepareContent()
  return (
    <>
      <main className="flex flex-col gap-5 py-5 bg-gray-100" style={{ backgroundImage: 'url(/images/piramide2.png)' }}>
        <h1 className="font-bakbakone text-center text-4xl font-bakbak-one">
          {usedEquipmentTitle}
        </h1>
        <div className="flex flex-col items-center gap-10 pt-5 lg:grid lg:grid-cols-2">

          <div className="flex flex-col items-center bg-white shadow-lg py-6 sm:w-128 py-6 lg:w-full">
            <h2 className="font-bakbakone text-xl">{model} 700i</h2>
            <div className="flex flex-col lg:items-center lg:gap-x-16">
              <Slider id="slider">
                <img className="w-full" src={content('/equipment/crushers/700i/700i-1.jpg')} />
                <img className="w-full" src={content('/equipment/crushers/700i/700i-2.jpeg')} />
                <img className="w-full" src={content('/equipment/crushers/700i/700i-3.jpg')} />
              </Slider>

              <div className="flex flex-col items-center gap-4">
                <p className="font-bakbakone">{available}</p>
                <p className="font-alexandria">{yearOfManufacture} 2022</p>
                <p className="font-alexandria">{hours} 560</p>
                <Link href="/contact"><button className='btn'>
                  {makeQueryButton}
                </button></Link>
              </div>
            </div>
          </div>
{/*
          <div className="flex flex-col items-center bg-white shadow-lg py-6 sm:w-128 py-6 lg:w-200">
            <h2 className="font-bakbakone text-xl">{model} 700i</h2>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-16">
              <Slider>
                <Slide><img className="w-[500px] max-w-none" src={content('/equipment/crushers/700i.jpeg')} /></Slide>
                <Slide><img className="w-[500px] max-w-none" src={content('/equipment/crushers/700i.jpeg')} /></Slide>
                <Slide><img className="w-[500px] max-w-none" src={content('/equipment/crushers/700i.jpeg')} /></Slide>
              </Slider>

              <div className="flex flex-col items-center gap-4">
                <p className="font-bakbakone">{available}</p>
                <p className="font-alexandria">{yearOfManufacture} 2022</p>
                <p className="font-alexandria">{hours} 560</p>
                <Link href="/contact"><button className='btn'>
                  {makeQueryButton}
                </button></Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white shadow-lg py-6 sm:w-128 py-6 lg:w-200">
            <h2 className="font-bakbakone text-xl">{model} 700i</h2>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-16">
              <Slider>
                <Slide><img className="w-[500px] max-w-none" src={content('/equipment/crushers/700i.jpeg')} /></Slide>
                <Slide><img className="w-[500px] max-w-none" src={content('/equipment/crushers/700i.jpeg')} /></Slide>
                <Slide><img className="w-[500px] max-w-none" src={content('/equipment/crushers/700i.jpeg')} /></Slide>
              </Slider>

              <div className="flex flex-col items-center gap-4">
                <p className="font-bakbakone">{available}</p>
                <p className="font-alexandria">{yearOfManufacture} 2022</p>
                <p className="font-alexandria">{hours} 560</p>
                <Link href="/contact"><button className='btn'>
                  {makeQueryButton}
                </button></Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white shadow-lg py-6 sm:w-128 py-6 lg:w-200">
            <h2 className="font-bakbakone text-xl">{model} 700i</h2>
            <div className="flex flex-col lg:flex-row lg:items-center lg:gap-x-16">
              <Slider>
                <Slide><img className="w-[500px] max-w-none" src={content('/equipment/crushers/700i.jpeg')} /></Slide>
                <Slide><img className="w-[500px] max-w-none" src={content('/equipment/crushers/700i.jpeg')} /></Slide>
                <Slide><img className="w-[500px] max-w-none" src={content('/equipment/crushers/700i.jpeg')} /></Slide>
              </Slider>

              <div className="flex flex-col items-center gap-4">
                <p className="font-bakbakone">{available}</p>
                <p className="font-alexandria">{yearOfManufacture} 2022</p>
                <p className="font-alexandria">{hours} 560</p>
                <Link href="/contact"><button className='btn'>
                  {makeQueryButton}
                </button></Link>
              </div>
            </div>
          </div>
  */}

        </div>
      </main>


      <Footer />
    </>
  );
}
