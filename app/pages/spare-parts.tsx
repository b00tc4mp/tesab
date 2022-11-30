import Link from "next/link";
import Footer from "../components/Footer";
import useLiterals from "../hooks/useLiterals";
import useContent from "../hooks/useContent";

const literals = {
  pt: {
    sparePartsTitle: '',
    sparePartsDescription: '',
    wearPlates: '',
    drums: '',
    millHammers: '',
    millGrindingWheels: '',
    springs: '',
    rollers: '',
    bearing: '',
    hydraulicFilters: '',
    engineFilters: '',
    bibs: '',
    belts: '',
    magnet: '',
    screens: '',
    crushingJaws: '',
    motors: '',
    clutches: '',
    radiators: '',
    oilCoolers: '',
    couplings: '',
    tracks: '',
    hydraulicCylinders: '',
    other: '',
    makeQueryButtom: ''
  },

  en: {
    sparePartsTitle: '',
    sparePartsDescription: '',
    wearPlates: '',
    drums: '',
    millHammers: '',
    millGrindingWheels: '',
    springs: '',
    rollers: '',
    bearing: '',
    hydraulicFilters: '',
    engineFilters: '',
    bibs: '',
    belts: '',
    magnet: '',
    screens: '',
    crushingJaws: '',
    motors: '',
    clutches: '',
    radiators: '',
    oilCoolers: '',
    couplings: '',
    tracks: '',
    hydraulicCylinders: '',
    other: '',
    makeQueryButtom: ''
  },

  es: {
    sparePartsTitle: 'RECAMBIOS',
    sparePartsDescription: 'Ea laborum ullamco ad qui quis. Aute sit exercitation nisi laborum tempor ullamco aute enim dolor ut ut. Commodo non eiusmod pariatur magna exercitation aliquip irure ex. Ea laborum ullamco ad qui quis. Aute sit exercitation nisi laborum tempor ullamco aute enim dolor ut ut. Commodo non eiusmod pariatur magna exercitation aliquip irure ex.',
    wearPlates: 'Platos de desgaste',
    drums: 'Tambores',
    millHammers: 'Martillos de molinos',
    millGrindingWheels: 'Muelas de molinos',
    springs: 'Muelles',
    rollers: 'Rodillos',
    bearing: 'Rodamientos',
    hydraulicFilters: 'Filtros Hidraúlicos',
    engineFilters: 'Filtros de motor',
    bibs: 'Baberos',
    belts: 'Bandas',
    magnet: 'Imán',
    screens: 'Mallas',
    crushingJaws: 'Mandíbulas machaqueo',
    motors: 'Motores',
    clutches: 'Embragues',
    radiators: 'Radiadores',
    oilCoolers: 'Enfriadores de aceite',
    couplings: 'Acoplamientos',
    tracks: 'Orugas',
    hydraulicCylinders: 'Botellas hidraúlicas',
    other: 'Otros',
    makeQueryButtom: 'Más información'
  }

}


export default function SpareParts() {

  const {sparePartsTitle, sparePartsDescription, wearPlates, drums, millHammers, millGrindingWheels, springs, rollers, bearing, hydraulicFilters, engineFilters, bibs, belts, magnet, screens, crushingJaws, motors, clutches, radiators, oilCoolers, couplings, tracks, hydraulicCylinders, other, makeQueryButtom } = useLiterals(literals)
  const content = useContent()

  return (
    <>
      <main className="flex flex-col gap-4">
        <div className="relative">
          <img
            className="-z-10 object-cover w-full h-48 sm:h-64 lg:h-112"
            src={content('spare-parts.jpg')}
            alt=""
          />
          <h1 className="absolute m-4 font-bakbakone text-center text-3xl text-white top-24 left-10 sm:text-6xl sm:top-36 sm:left-28 lg:text-8xl lg:top-72 lg:left-84">
             {sparePartsTitle}
          </h1>
        </div>

        <div className="p-4 flex flex-col items-center gap-4">
          <p className="font-alexandria text-justify">
            {sparePartsDescription}
          </p>

          <ul className="grid grid-cols-2 gap-x-5 list-disc pl-6">
            <li className="font-alexandria">{wearPlates}</li>
            <li className="font-alexandria">{drums}</li>
            <li className="font-alexandria">{millHammers}</li>
            <li className="font-alexandria">{millGrindingWheels}</li>
            <li className="font-alexandria">{springs}</li>
            <li className="font-alexandria">{rollers}</li>
            <li className="font-alexandria">{bearing}</li>
            <li className="font-alexandria">{hydraulicFilters}</li>
            <li className="font-alexandria">{engineFilters}</li>
            <li className="font-alexandria">{bibs}</li>
            <li className="font-alexandria">{belts}</li>
            <li className="font-alexandria">{magnet}</li>
            <li className="font-alexandria">{screens}</li>
            <li className="font-alexandria">{crushingJaws}</li>
            <li className="font-alexandria">{motors}</li>
            <li className="font-alexandria">{clutches}</li>
            <li className="font-alexandria">{radiators}</li>
            <li className="font-alexandria">{oilCoolers}</li>
            <li className="font-alexandria">{couplings}</li>
            <li className="font-alexandria">{tracks}</li>
            <li className="font-alexandria">{hydraulicCylinders}</li>
            <li className="font-alexandria">{other}</li>
          </ul>

          <Link href="/contact"><buttom className="bg-amber-400 px-4 py-2 font-bakbakone rounded ">{makeQueryButtom}</buttom></Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
