import Link from "next/link";
import Footer from "../components/Footer";

export default function UsedEquipment() {
  return (
    <>
      <h1 className="font-bold text-center text-3xl m-4 font-bakbak-one">
        EQUIPOS USADOS
      </h1>
      <div className="text-center my-6">
        <h2 className="font-bakbak-one">Modelo: 700i</h2>
        <div className=" flex overflow-x-auto m-4 border-solid border-black border-4">
          <img src="images/equipment/crushers/700i.jpeg"></img>
          <img src="images/equipment/crushers/700i/crusher700ie2.jpg"></img>
          <img src="images/equipment/crushers/700ie/crusher700i3.jpg"></img>
        </div>
        <p>En stock</p>
        <p>Año de fabricación: 2022</p>
        <p>Horas trabajadas: 560</p>
        <buttom className="bg-amber-400 px-4 py-2 my-4 font-bold rounded">
          Me interesa
        </buttom>
      </div>

      <div className="text-center my-6">
        <h2 className="font-bakbak-one">Modelo: 800i</h2>
        <div className=" flex overflow-x-auto m-4 border-solid border-black border-4">
          <img src="images/equipment/crushers/700i.jpeg"></img>
          <img src="images/equipment/crushers/700i/crusher700ie2.jpg"></img>
          <img src="images/equipment/crushers/700ie/crusher700i3.jpg"></img>
        </div>
        <p>En stock: 5</p>
        <p>Año de fabricación: 2022</p>
        <p>Horas trabajadas: 560</p>
        <buttom className="bg-amber-400 px-4 py-2 m-4 font-bold rounded hover:bg-[#323A47] hover:text-amber-400">
          Me interesa
        </buttom>
      </div>

      <div className="text-center my-6">
        <h2 className="font-bakbak-one">Modelo: 700ie</h2>
        <div className=" flex overflow-x-auto m-4 border-solid border-black border-4">
          <img src="images/equipment/crushers/700i.jpeg"></img>
          <img src="images/equipment/crushers/700i/crusher700ie2.jpg"></img>
          <img src="images/equipment/crushers/700ie/crusher700i3.jpg"></img>
        </div>
        <p>En stock: 5</p>
        <p>Año de fabricación: 2022</p>
        <p>Horas trabajadas: 560</p>
        <buttom className="bg-amber-400 px-4 py-2 m-4 font-bold rounded hover:bg-[#323A47] hover:text-amber-400">
          Me interesa
        </buttom>
      </div>

      <div className="text-center my-6">
        <h2 className="font-bakbak-one">Modelo: 623CT</h2>
        <div className=" flex overflow-x-auto m-4 border-solid border-black border-4">
          <img src="images/equipment/crushers/700i.jpeg"></img>
          <img src="images/equipment/crushers/700i/crusher700ie2.jpg"></img>
          <img src="images/equipment/crushers/700ie/crusher700i3.jpg"></img>
        </div>
        <p>En stock: 5</p>
        <p>Año de fabricación: 2022</p>
        <p>Horas trabajadas: 560</p>
        <buttom className="bg-amber-400 px-4 py-2 m-4 font-bold rounded hover:bg-[#323A47] hover:text-amber-400">
          Me interesa
        </buttom>
      </div>

      <Footer />
    </>
  );
}
