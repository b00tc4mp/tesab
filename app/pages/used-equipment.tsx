//TODO: hace una especie de filtro al costado, sobre todo para la pantalla grande. 

import Link from "next/link";
import Footer from "../components/Footer";
import useLiterals from "../hooks/useLiterals";
import useContent from '../hooks/useContent'

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
    makeQueryButtom: 'Más información'
  }
}

export default function UsedEquipment() {

  const { usedEquipmentTitle, model, available, yearOfManufacture, hours, makeQueryButtom } = useLiterals(literals)
  const content = useContent()
  return (
    <>
      <main className="flex flex-col gap-5 py-5 bg-gray-100" style={{ backgroundImage: 'url(/images/piramide2.png)' }}>
        <h1 className="font-bakbakone text-center text-4xl font-bakbak-one">
          {usedEquipmentTitle}
        </h1>
        <div className="flex flex-col items-center gap-10 pt-5">

          <div className="flex flex-col items-center bg-white border-solid border-slate-300 border-2 py-6 sm:w-128 py-6 lg:w-240">
            <h2 className="font-bakbakone text-xl">{model} 700i</h2>
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="flex overflow-x-auto m-4 lg:w-160">
                <img src={content('/equipment/crushers/700i.jpeg')}/>
                <img src={content('/equipment/crushers/700i/crusher700ie2.jpg')}/>
                <img src={content('/equipment/crushers/700ie/crusher700i3.jpg')}/>
              </div>
              <div className="flex flex-col items-center gap-4">
                <p className="font-bakbakone">{available}</p>
                <p className="font-alexandria">{yearOfManufacture} 2022</p>
                <p className="font-alexandria">{hours} 560</p>
                <Link href="/contact"><buttom className="bg-amber-400 px-4 py-2 m-4 font-bakbakone fotn-bold rounded hover:bg-[#323A47] hover:text-amber-400">
                  {makeQueryButtom}
                </buttom></Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white border-solid border-slate-300 border-2 py-6 sm:w-128 lg:w-240">
            <h2 className="font-bakbakone text-xl">{model} 700i</h2>
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="flex overflow-x-auto m-4 lg:w-160">
                <img src={content('/equipment/crushers/700i.jpeg')}/>
                <img src={content('/equipment/crushers/700i/crusher700ie2.jpg')}/>
                <img src={content('/equipment/crushers/700ie/crusher700i3.jpg')}/>
              </div>
              <div className="flex flex-col items-center gap-4">
                <p className="font-bakbakone">{available}</p>
                <p className="font-alexandria">{yearOfManufacture} 2022</p>
                <p className="font-alexandria">{hours} 560</p>
                <Link href="/contact"><buttom className="bg-amber-400 px-4 py-2 m-4 font-bakbakone rounded hover:bg-[#323A47] hover:text-amber-400">
                  {makeQueryButtom}
                </buttom></Link>
              </div>
            </div>
          </div>


          <div className="flex flex-col items-center bg-white border-solid border-slate-300 border-2 py-6 sm:w-128 lg:w-240">
            <h2 className="font-bakbakone text-xl">{model} 700i</h2>
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className=" flex overflow-x-auto m-4 lg:w-160">
                <img src={content('/equipment/crushers/700i.jpeg')}/>
                <img src={content('/equipment/crushers/700i/crusher700ie2.jpg')}/>
                <img src={content('/equipment/crushers/700ie/crusher700i3.jpg')}/>
              </div>
              <div className="flex flex-col items-center gap-4">
                <p className="font-bakbakone">{available}</p>
                <p className="font-alexandria">{yearOfManufacture} 2022</p>
                <p className="font-alexandria">{hours} 560</p>
                <Link href="/contact"><buttom className="bg-amber-400 px-4 py-2 m-4 font-bakbakone fotn-bold rounded hover:bg-[#323A47] hover:text-amber-400">
                  {makeQueryButtom}
                </buttom></Link>
              </div>
            </div>
          </div>

          <div className="flex flex-col items-center bg-white border-solid border-slate-300 border-2 py-6 sm:w-128 lg:w-240">
            <h2 className="font-bakbakone text-xl">{model} 700i</h2>
            <div className="flex flex-col lg:flex-row lg:items-center">
              <div className="flex overflow-x-auto m-4 lg:w-160">
                <img src={content('/equipment/crushers/700i.jpeg')}/>
                <img src={content('/equipment/crushers/700i/crusher700ie2.jpg')}/>
                <img src={content('/equipment/crushers/700ie/crusher700i3.jpg')}/>
              </div>
              <div className="flex flex-col items-center gap-4">
                <p className="font-bakbakone">{available}</p>
                <p className="font-alexandria">{yearOfManufacture} 2022</p>
                <p className="font-alexandria">{hours} 560</p>
                <Link href="/contact"><buttom className="bg-amber-400 px-4 py-2 m-4 font-bakbakone fotn-bold rounded hover:bg-[#323A47] hover:text-amber-400">
                  {makeQueryButtom}
                </buttom></Link>
              </div>
            </div>
          </div>



        </div>
      </main>


      <Footer />
    </>
  );
}
