import Footer from "../components/Footer";

export default function services() {
  return (
    <>
      <h1 className="font-bakbak-one text-center text-3xl m-4">
        SERVICIOS
      </h1>

      <div className="relative my-10">
        <img className="-z-10 w-128 h-48 object-cover" src="/advasing.jpg" alt="" />
        <h2 className="font-bakbak-one text-center text-3xl m-4 absolute top-32 left-32 text-black bg-gray-200/50 backdrop-blur-sm rounded">Asesoramiento</h2>
        <p className="m-4">
          Ea laborum ullamco ad qui quis. Aute sit exercitation nisi laborum
          tempor ullamco aute enim dolor ut ut. Commodo non eiusmod pariatur magna
          exercitation aliquip irure ex.
        </p>
      </div>

      <div className="relative my-10">
        <img className="-z-10 w-128 h-48 object-cover" src="/post-venta.jpg" alt="" />
        <h2 className="font-bakbak-one text-center text-3xl m-4 absolute top-32 left-48 text-black bg-gray-200/50 backdrop-blur-sm rounded">Post-venta</h2>
        <p className="m-4">
          Ea laborum ullamco ad qui quis. Aute sit exercitation nisi laborum
          tempor ullamco aute enim dolor ut ut. Commodo non eiusmod pariatur magna
          exercitation aliquip irure ex.
        </p>
      </div>

      <div className="relative my-10">
        <img className="-z-10 w-128 h-48 object-cover" src="/technical-assistance.jpg" alt="" />
        <h2 className="font-bakbak-one text-center text-3xl m-4 absolute top-32 text-black bg-gray-200/50 backdrop-blur-sm rounded">Asistencia técnica</h2>
        <p className="m-4">
          Ea laborum ullamco ad qui quis. Aute sit exercitation nisi laborum
          tempor ullamco aute enim dolor ut ut. Commodo non eiusmod pariatur magna
          exercitation aliquip irure ex.
        </p>
      </div>



      <Footer />
    </>
  );
}
