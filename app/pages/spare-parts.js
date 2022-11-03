import Link from "next/link";
import Footer from "../components/Footer";

export default function spareParts() {
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
            RECAMBIOS
          </h1>
        </div>

        <div className="p-4 flex flex-col items-center gap-4">
          <p className="text-justify">
            Ea laborum ullamco ad qui quis. Aute sit exercitation nisi laborum
            tempor ullamco aute enim dolor ut ut. Commodo non eiusmod pariatur magna
            exercitation aliquip irure ex.
          </p>

          <p className="text-justify">
            Ea laborum ullamco ad qui quis. Aute sit exercitation nisi laborum
            tempor ullamco aute enim dolor ut ut. Commodo non eiusmod pariatur magna
            exercitation aliquip irure ex.
          </p>

          <ul className="grid grid-cols-2 gap-x-5 list-disc pl-6">
            <li>Platos de desgaste</li>
            <li>Tambores</li>
            <li>Martillos de molinos</li>
            <li>Muelas de molinos</li>
            <li>Muelles</li>
            <li>Rodillos</li>
            <li>Rodamiento</li>
            <li>Filtros Hidraúlicos</li>
            <li>Filtros motor</li>
            <li>Baberos</li>
            <li>Cintas/ Bandas</li>
            <li>Imán</li>
            <li>Mallas</li>
            <li>Mandíbulas machaqueo</li>
            <li>Motores</li>
            <li>Embragues</li>
            <li>Radiadores</li>
            <li>Enfriadores de aceite</li>
            <li>Acomplamientos</li>
            <li>Orugas</li>
            <li>Botellas Hidraúlicas</li>
            <li>Otros</li>
          </ul>

          <Link href="/contact"><buttom className="bg-amber-400 px-4 py-2 font-bold rounded">Solicitar presupuesto</buttom></Link>
        </div>
      </main>

      <Footer />
    </>
  );
}
