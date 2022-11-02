import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function spareParts() {
  return (
    <>
      <div className="relative">
        <img
          className="-z-10 w-128 h-48 object-cover"
          src="images/spare-parts.jpg"
          alt=""
        />
        <h1 className="font-bold text-center text-3xl m-4 absolute top-16 text-white right-48">
          RECAMBIOS
        </h1>
      </div>
      <p className="m-4">
        Ea laborum ullamco ad qui quis. Aute sit exercitation nisi laborum
        tempor ullamco aute enim dolor ut ut. Commodo non eiusmod pariatur magna
        exercitation aliquip irure ex.
      </p>
      <p className="m-4">
        Ea laborum ullamco ad qui quis. Aute sit exercitation nisi laborum
        tempor ullamco aute enim dolor ut ut. Commodo non eiusmod pariatur magna
        exercitation aliquip irure ex.
      </p>
      <ul className="grid grid-cols-2">
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Platos de desgaste</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Mandíbulas machaqueo</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Martillos de molinos</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Muelas de molinos</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Muelles</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Rodillos</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Rodamiento</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Filtros Hidraúlicos</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Filtros motor</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Baberos</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Cintas/ Bandas</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Imán</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Mallas</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Tambores</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Motores</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Embragues</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Radiadores</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Enfriadores de aceite</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Acomplamientos</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Orugas</li>
        <li className="bg-amber-400 px-4 py-2 font-bold rounded mx-4 my-2 text-center">Botellas Hidraúlicas</li>
      </ul>
      <buttom className='bg-amber-400 px-4 py-2 font-bold rounded'>Solicitar presupuesto</buttom>

      <Footer />
    </>
  );
}
