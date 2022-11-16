import Link from "next/link";
import Footer from "../components/Footer";
import useLiterals from "../hooks/useLiterals";

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
    makeQueryButtom: 'Contactar'
  }

}


export default function spareParts() {

  const {sparePartsTitle, sparePartsDescription, wearPlates, drums, millHammers, millGrindingWheels, springs, rollers, bearing, hydraulicFilters, engineFilters, bibs, belts, magnet, screens, crushingJaws, motors, clutches, radiators, oilCoolers, couplings, tracks, hydraulicCylinders, other, makeQueryButtom } = useLiterals(literals)

  return (
    <>
      <main className="flex flex-col gap-4">
        <div className="relative">
          <img
            className="-z-10 w-128 h-48 object-cover"
            src="images/spare-parts.jpg"
            alt=""
          />
          <h1 className="font-bold text-3xl m-4 absolute top-16 text-white right-48">
             {sparePartsTitle}
          </h1>
        </div>

        <div className="p-4 flex flex-col items-center gap-4">
          <p className="text-justify">
            {sparePartsDescription}
          </p>

          <ul className="grid grid-cols-2 gap-x-5 list-disc pl-6">
            <li>{wearPlates}</li>
            <li>{drums}</li>
            <li>{millHammers}</li>
            <li>{millGrindingWheels}</li>
            <li>{springs}</li>
            <li>{rollers}</li>
            <li>{bearing}</li>
            <li>{hydraulicFilters}</li>
            <li>{engineFilters}</li>
            <li>{bibs}</li>
            <li>{belts}</li>
            <li>{magnet}</li>
            <li>{screens}</li>
            <li>{crushingJaws}</li>
            <li>{motors}</li>
            <li>{clutches}</li>
            <li>{radiators}</li>
            <li>{oilCoolers}</li>
            <li>{couplings}</li>
            <li>{tracks}</li>
            <li>{hydraulicCylinders}</li>
            <li>{other}</li>
          </ul>

          <Link href="/contact"><buttom className="bg-amber-400 px-4 py-2 font-bold rounded">{makeQueryButtom}</buttom></Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
