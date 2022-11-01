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
      <div>
        <div className="border-solid border-2 border-amber-400">
          <img src="" className="rounded-full"/>
        <h2>Piezas de desgaste</h2>
        <p>Excepteur laboris id eu duis eu laboris cupidatat consequat culpa et pariatur deserunt.</p>
        </div>

        <div className="border-solid border-2 border-amber-400">
          <img src="" className="rounded-full"/>
        <h2>Mallas de cribado</h2>
        <p>Nisi exercitation eiusmod occaecat Lorem sunt cillum.</p>
        </div>

        <div className="border-solid border-2 border-amber-400">
          <img src="" className="rounded-full"/>
        <h2>Motores y bombas hidráulicas</h2>
        <p>Est commodo laboris ut sunt dolor in.</p>
        </div>

        <div className="border-solid border-2 border-amber-400">
          <img src="" className="rounded-full"/>
        <h2>Rodillos</h2>
        <p>Consequat ex nisi est ea id.</p>
        </div>

        <div className="border-solid border-2 border-amber-400">
          <img src="" className="rounded-full"/>
        <h2>Casquillos y acoplamientos</h2>
        <p>Id incididunt in aute consectetur elit voluptate esse consequat culpa.</p>
        </div>

        <div className="border-solid border-2 border-amber-400">
          <img src="" className="rounded-full"/>
        <h2>Filtros</h2>
        <p>Anim laborum et adipisicing nostrud nisi culpa officia veniam dolor est.</p>
        </div>

        <div className="border-solid border-2 border-amber-400">
          <img src="" className="rounded-full"/>
        <h2>Válvulas</h2>
        <p>Cupidatat ut dolor in duis aliquip minim officia id quis reprehenderit duis consequat.</p>
        </div>

        <div className="border-solid border-2 border-amber-400">
          <img src="" className="rounded-full"/>
        <h2>Tambores</h2>
        <p>Exercitation irure duis duis commodo occaecat excepteur enim magna minim deserunt laboris officia nulla Lorem.</p>
        </div>

        <div className="border-solid border-2 border-amber-400">
          <img src="" className="rounded-full"/>
        <h2>Piezas de embragues</h2>
        <p>Aute tempor aliqua nulla anim in dolor exercitation.</p>
        </div>

        <div className="border-solid border-2 border-amber-400">
          <img src="" className="rounded-full"/>
        <h2>Baberos</h2>
        <p>Minim consequat dolore qui veniam enim aliquip labore adipisicing.</p>
        </div>

      </div>

      <ContactForm />
      <Footer />
    </>
  );
}
