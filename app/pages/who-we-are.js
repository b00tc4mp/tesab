import Footer from "../components/Footer";


export default function WhoWeAre() {
  return (
    <>
      <main>
        <div className="relative">
          <img
            className="-z-10 object-cover w-full h-48 sm:h-64 md:h-96"
            src="images/equipment/screeners/ts3600.png"
            alt=""
          />
          <h1 className="font-bold text-center text-3xl m-4 absolute top-20 text-white left-10 sm:text-6xl sm:top-36 sm:left-24">
            QUIÉNES SOMOS
          </h1>
        </div>
        <div className="sm:flex sm:flex-col sm:items-center">
          <div className="sm:max-w-6xl sm:flex sm:flex-col sm:items-center">
            <p className="text-justify m-6">
              Reprehenderit minim commodo veniam ipsum deserunt anim nulla. Proident
              sunt cillum consectetur nostrud exercitation ullamco laborum commodo
              elit aute tempor non ut. Veniam do sit nisi et esse velit consectetur.
            </p>
            <p className="text-justify m-6">
              Officia sint laborum sint velit velit sit enim mollit sint
              reprehenderit nostrud cillum fugiat. Deserunt incididunt Lorem ullamco
              deserunt. Labore labore irure Lorem exercitation qui labore quis ad.
              Aute ut Lorem elit anim esse voluptate quis.
            </p>
            <h2 className="font-bold text-center text-3xl m-4">NUESTROS VALORES</h2>
            <ul className="mt-10">
              <li className="font-bold text-left m-4">DESERUNT</li>
              <p className="text-justify m-6">
                Ea nisi velit duis deserunt culpa aliqua veniam est do aliqua cillum
                fugiat. Incididunt irure tempor non mollit laborum elit qui
                cupidatat tempor deserunt ullamco in velit. Consectetur enim
                exercitation irure culpa officia.
              </p>
              <li className="font-bold text-left m-4">DESERUNT</li>
              <p className="text-justify m-6">
                Amet et voluptate ipsum pariatur voluptate amet laboris tempor sit
                sint mollit est sit officia. Sint id magna aliquip dolore.
                Adipisicing ex sit fugiat veniam esse.
              </p>
              <li className="font-bold text-left m-4">DESERUNT</li>
              <p className="text-justify m-6">
                Officia consectetur aute in adipisicing excepteur culpa pariatur.
                Pariatur enim nisi eiusmod elit nisi. Non officia ut non id
                consectetur. Consectetur do aliquip aliquip eiusmod et est deserunt
                excepteur culpa aliquip dolor. Est do cupidatat enim esse elit
                cillum ad reprehenderit duis. Laboris proident irure nostrud do elit
                ad. Mollit laboris et cupidatat nisi consectetur labore magna aliqua
                commodo.
              </p>
            </ul>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
