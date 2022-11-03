import { useState } from "react";
import Link from "next/link";
import { useRouter } from 'next/router'

function Header() {
  const [toggleMenuButtonText, setToggleMenuText] = useState("menu");
  const [toggleEquipmentButtonText, setToggleEquipmentButton] =
    useState("arrow_drop_down");
  const [toggleServicesButtonText, setToggleServicesButton] =
    useState("arrow_drop_down");
  const [phoneNumberVisible, setPhoneNumberVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);
  const router = useRouter()

  const toggleMenu = () =>
    setToggleMenuText(toggleMenuButtonText === "menu" ? "close" : "menu");
  const toggleEquipment = () =>
    setToggleEquipmentButton(
      toggleEquipmentButtonText === "arrow_drop_up"
        ? "arrow_drop_down"
        : "arrow_drop_up"
    );
  const toggleServices = () =>
    setToggleServicesButton(
      toggleServicesButtonText === "arrow_drop_up"
        ? "arrow_drop_down"
        : "arrow_drop_up"
    );
  const togglePhoneNumber = () => {
    setEmailVisible(false);
    setPhoneNumberVisible(!phoneNumberVisible);
  };
  const toggleEmail = () => {
    setPhoneNumberVisible(false);
    setEmailVisible(!emailVisible);
  };

  const navigateTo = event => {
    event.preventDefault()

    setToggleMenuText('menu')

    const { href } = event.target

    router.push(href)
  }

  return (
    <header className="z-10 absolute top-0 w-full">
      <div className="flex justify-between bg-[#323A47] p-2">
        <nav className="flex space-x-5">
          <a href="https://wa.me/34666967923">
            <img
              className="w-5"
              src="images/social/Wsapp-Blanco.png"
              alt="WhatsApp"
            />
          </a>
          <a href="">
            <img
              className="w-5"
              src="images/social/Youtube-Blanco.png"
              alt="YouTube"
            />
          </a>
          <a href="https://www.instagram.com/tesabspain/">
            <img
              className="w-5"
              src="images/social/Instagram-Blanco.png"
              alt="Instagram"
            />
          </a>
          <a href="https://www.linkedin.com/company/tesab-spain-sl/?viewAsMember=true">
            <img
              className="w-5"
              src="images/social/Linkedin-blanco.png"
              alt="LinkedIn"
            />
          </a>
          <a href="https://www.facebook.com/tesabspainsl/">
            <img
              className="w-5"
              src="images/social/Facebook-blanco.png"
              alt="Facebook"
            />
          </a>
        </nav>
        <nav className="flex space-x-5">
          <span className="flex items-center space-x-2">
            <img
              className="w-4"
              src="images/social/Telefono-Blanco.png"
              alt="Telephone"
              onClick={togglePhoneNumber}
            />
            {phoneNumberVisible && (
              <a href="tel:+34944924003" className="text-white text-xs">
                944 924 003
              </a>
            )}
          </span>

          <span className="flex items-center space-x-2">
            <img
              className="w-4"
              src="images/social/Correo-blanco.png"
              alt="E-mail"
              onClick={toggleEmail}
            />
            {emailVisible && (
              <a
                href="mailto:tesab@tesabspain.es"
                className="text-white text-xs"
              >
                tesab@tesabspain.es
              </a>
            )}
          </span>
        </nav>
      </div>

      <div className="flex justify-between p-3 bg-white/75">
        <div className="flex flex-col justify-self-center self-center">
          <h1>
            <Link href="/">
              <img
                className="h-8 cursor-pointer"
                src="images/tesab-logo.png"
                alt="Tesab Spain"
              />
            </Link>
          </h1>
          <h2 className="text-sm font-bold">Alquiler y venta de maquinaria</h2>
        </div>
        <button
          className="material-symbols-outlined justify-self-end self-center cursor-pointer"
          onClick={toggleMenu}
        >
          {toggleMenuButtonText}
        </button>
      </div>

      {toggleMenuButtonText === "close" && (
        <nav className=" h-full bg-white opacity-95 +z-20">
          <ul className="text-lg font-bold">
            <li className="pl-4 text-right ">
              <a href="" className="px-4">
                English
              </a>
              |
              <a href="" className="px-4">
                Português
              </a>
            </li>
            <li className="border-b-black border pl-4 py-2">
              <a href="/who-we-are" onClick={navigateTo}>Quienes Somos</a>
            </li>
            <li className="border-b-black border pl-4 py-2">
              <span className="flex items-center">
                <a href="/equipment" onClick={navigateTo}>Equipos</a>
                <button
                  className="material-symbols-outlined"
                  onClick={toggleEquipment}
                >
                  {toggleEquipmentButtonText}
                </button>
              </span>
              {toggleEquipmentButtonText === "arrow_drop_up" && (
                <ul className="ml-4">
                  <li className="">
                    <a href="">Machacadoras</a>
                  </li>
                  <li className="">
                    <a href="">Cribadoras</a>
                  </li>
                  <li className="">
                    <a href="">Precribadoras</a>
                  </li>
                  <li className="">
                    <a href="">Molinos</a>
                  </li>
                  <li className="">
                    <a href="">Cintas</a>
                  </li>
                  <li className="">
                    <a href="">Reciclaje</a>
                  </li>
                  <li>
                    <a href="">Application news</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="border-b-black border pl-4 py-2 py-2">
              <a href="/used-equipment" onClick={navigateTo}>Equipos usados</a>
            </li>
            <li className="border-b-black border pl-4 py-2">
              <a href="/spare-parts" onClick={navigateTo}>Recambios</a>
            </li>
            <li className="border-b-black border pl-4 py-2">
              <span className="flex items-center">
                <a href="/services" onClick={navigateTo}>Servicios</a>
                <button
                  className="material-symbols-outlined"
                  onClick={toggleServices}
                >
                  {toggleServicesButtonText}
                </button>
              </span>
              {toggleServicesButtonText === "arrow_drop_up" && (
                <ul className="ml-4">
                  <li className="py-1">
                    <a href="">Asesoramiento</a>
                  </li>
                  <li className="py-1">
                    <a href="">Post-Venta</a>
                  </li>
                  <li className="py-1">
                    <a href="">Asistencia Técnica</a>
                  </li>
                </ul>
              )}
            </li>
            <li className="border-b-black border pl-4 py-2">
              <a href="/news" onClick={navigateTo}>Application News</a>
            </li>
            <li className="border-b-black border pl-4 py-2">
              <a href="/contact" onClick={navigateTo}>Contacto</a>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

export default Header;
