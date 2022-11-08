import Link from 'next/link'
import Footer from "../components/Footer";
// import TypeForm from '../components/TypeForm'

export default function crusher700ie() {
  return (
    <>
      <h1 className="font-bakbak-one text-center text-4xl mx-4">700i</h1>
      <div className=" flex overflow-x-auto my-4">
        <video autoPlay loop muted>
          <source src="https://tesab-heavy.surge.sh/videos/700ie-drone-video-snippet_bLGz3NnO.mp4" type="video/mp4" />
        </video>
        {/* <img src="images/equipment/crushers/700i.jpeg"></img> */}
        <img src="images/equipment/crushers/700i/crusher700ie2.jpg"></img>
        <img src="images/equipment/crushers/700ie/crusher700i3.jpg"></img>
      </div>
      <div>
        <div className="flex">
          <div className="relative">
            <div className="border-black border-solid border-4 m-4 -z-10"></div>
            <div className="border-solid border-4 m-4 w-5 absolute top-0"></div>
          </div>
          <p>1 de 3</p>
        </div>
        <h2 className="font-bakbak-one m-4">Descripción</h2>
        <p className="m-4 text-justify">700i es un equipo ágil y potente con mayor versatilidad para su manipulación. Vibración de alta eficiencia le permite un mayor rendimiento, una mejor calidad de separación de material y la capacidad de manejar el material en seco y húmedo sin contratiempos en la operación. Con producción de hasta 350 toneladas por hora es un equipo ideal para la industria minera, de agregados y reciclaje.</p>

        <h2 className="font-bakbak-one m-4 ">Especificaciones técnicas</h2>
        <ul className="m-4">
          <li>Dimensiones de la machacadora: 1100 x 700 mm.</li>
          <li>Profundidad de la machacadora: 1550 mm.</li>
          <li>Sistema de doble alimentador independiente.</li>
          <li>Banda magnética y cinta lateral.</li>
          <li>Tolva de 9,2 m3.</li>
          <li>Motor diésel Caterpillar de 300 CV.</li>
        </ul>
      </div>
      <div className="flex justify-center sticky bottom-5">
        <Link href="/contact"><button className="bg-amber-400 m-4 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400 ">
          {" "}
          Solicitar información{" "}
        </button></Link>
      </div>

      {/* <TypeForm /> */}

      <Footer />
    </>
  );
}
