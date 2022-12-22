


import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import prepareLiterals from "../helpers/prepareLiterals";
import prepareContent from "../helpers/prepareContent";

const literals = {
  pt: {
    title: 'CONTACTO',
    address: 'Endereço: Polígono Industrial Erletxe Plataforma 1A, pabellón Nº8, CP 48960,Galdacano,Vizcaya',
    phone: 'Telefone: (+34) 944 924 003',
    wsapp: 'Whatsapp: (+34) 666 967 923'
  },

  en: {
    title: 'CONTACT',
    address: 'Address: Polígono Industrial Erletxe Plataforma 1A, pabellón Nº8, CP 48960,Galdacano,Vizcaya',
    phone: 'Telephone: (+34) 944 924 003',
    wsapp: 'Whatsapp: (+34) 666 967 923'
  },

  es: {
    title: 'CONTACTO',
    address: 'Nuestra sede: Polígono Industrial Erletxe Plataforma 1A, pabellón Nº8, CP 48960,Galdacano,Vizcaya',
    phone: 'Teléfono: (+34) 944 924 003',
    wsapp: 'Whatsapp: (+34) 666 967 923',
    contactFormTitle: 'CONTACTE CON NOSOTROS',
    querytitle: 'SOLICITE INFORMACIÓN SIN COMPROMISO',
    introductionQuery: 'Puede saber sobre nuestras tarifas, servicios, condiciones de contratación o cualquier otra cuestión en el teléfono 944 924 003, o bien rellene el siguiente formulario facilitándonos un correo electrónico y un teléfono de contacto, y nos pondremos en contacto con usted en el menor tiempo posible.'
  }
}

export default function Contact() {

  const { title, address, phone, wsapp, contactFormTitle, querytitle, introductionQuery } = prepareLiterals(literals)
  const content = prepareContent()

  return (
    <main>
      <h1 className="font-bakbakone text-center text-4xl m-4">
        {title}
      </h1>
      <div className="flex items-center justify-center px-2">
        <img className="w-8 h-8" src="images/social/ubication-Icon.jpg" />
        <h4 className="font-alexandria text-center my-2">{address}</h4>
      </div>

      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.6593089048615!2d-2.8019595842386975!3d43.23760218722226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5a01d461cfb3%3A0xed9e8900e45f83c1!2sTesab%20Spain%2C%20S.L.!5e0!3m2!1ses!2ses!4v1668526993445!5m2!1ses!2ses" className="w-full h-96 my-6" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      <div className="flex flex-col items-center gap-y-4">
        <span className="flex items-center">
          <img className="w-4 h-4" src="images/social/Telefono-Negro.png" />
          <a href="tel:+34944924003" className="font-alexandria text-center">{phone}</a>
        </span>
        <span className="flex">
          <img className="w-6 h-6" src="images/social/Wsapp-Verde.png" />
          <a href="https://wa.me/34666967923" className="font-alexandria text-center">{wsapp}</a>
        </span>
      </div>

      <h2 className="font-bakbakone text-center text-3xl my-12">{contactFormTitle}</h2>
      <div className="hidden lg:block">
        <div className="grid grid-cols-2 items-start px-24">
          <div className="flex flex-col gap-6">
            <h4 className="font-bakbakone text-xl">{querytitle}</h4>
            <p className="font-alexandria">{introductionQuery}</p>
            <img src={content('/equipment/crushers/700ie/700ie-2.jpg')} />
          </div>
          <ContactForm />
        </div>
      </div>

      <div id="carouselExampleCaptions" className="carousel slide relative" data-bs-ride="carousel">
        <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(22).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(23).jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon inline-block bg-no-repeat" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div id="carouselExampleCaptions2" className="carousel slide carousel-fade relative" data-bs-ride="carousel">
        <div
          className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4"
        >
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions2"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner relative w-full overflow-hidden">
          <div className="carousel-item active relative float-left w-full">
            {/* <video className="w-full" autoPlay loop muted>
              <source src="https://mdbcdn.b-cdn.net/img/video/Tropical.mp4" type="video/mp4" />
            </video> */}
            {/* <img
              src="https://mdbootstrap.com/img/Photos/Slides/img%20(15).jpg"
              className="block w-full"
              alt="..."
            /> */}
            <video className="w-full" autoPlay loop muted>
              <source src="https://tesab-heavy.surge.sh/equipment/crushers/800i/800iVideo.mp4" type="video/mp4" />
            </video>
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            {/* <video className="w-full" autoPlay loop muted>
              <source src="https://mdbcdn.b-cdn.net/img/video/forest.mp4" type="video/mp4" />
            </video> */}
            <img
              src="https://tesab-heavy.surge.sh/equipment/crushers/800i/800i-1.jpg"
              className="block w-full"
              alt="..."
            />
            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div className="carousel-item relative float-left w-full">
            {/* <video className="w-full" autoPlay loop muted>
              <source src="https://mdbcdn.b-cdn.net/img/video/Agua-natural.mp4" type="video/mp4" />
            </video> */}

            <img
              src="https://tesab-heavy.surge.sh/equipment/crushers/800i/800i-2.jpg"
              className="block w-full"
              alt="..."
            />


            <div className="carousel-caption hidden md:block absolute text-center">
              <h5 className="text-xl">Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline left-0"
          type="button"
          data-bs-target="#carouselExampleCaptions2"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next absolute top-0 bottom-0 flex items-center justify-center p-0 text-center border-0 hover:outline-none hover:no-underline focus:outline-none focus:no-underline right-0"
          type="button"
          data-bs-target="#carouselExampleCaptions2"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon inline-block bg-no-repeat"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <div className="lg:hidden">
        <ContactForm />
      </div>

      <Footer />
    </main>
  );
}