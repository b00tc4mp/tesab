import { useState } from "react";
import Link from "next/link";
import useLiterals from "../hooks/useLiterals";
import { useRouter } from 'next/router'
import { FiMenu } from 'react-icons/fi'
import { GrClose } from 'react-icons/gr'

const literals = {
  pt: {
    whoWeAre: 'quem somos',
    equipment: 'equipa',
    crushers: '',
    impactCrushers: '',
    scalpers: '',
    screeners: '',
    conveyor: '',
    recycling: '',
    dustCannon: '',
    usedEquipment: 'equipamento usado',
    spareParts: 'peças de reposição',
    services: 'serviços',
    customerAssitance: 'consultoria',
    afterSaleService: 'pós-venta',
    technicalAssistance: 'assistência técnica',
    news: 'notícias',
    contact: 'contacto'
  },

  en: {
    whoWeAre: 'Who we are',
    equipment: 'Equipment',
    crushers: 'Crushers',
    impactCrushers: 'Impact Crushers',
    scalpers: 'Scalpers',
    screeners: 'Screeners',
    conveyor: 'Conveyors',
    recycling: 'Recycling',
    dustCannon: 'Dust Cannon',
    usedEquipment: 'Used Equipment',
    spareParts: 'Spare parts',
    services: 'services',
    customerAssitance: 'Customer Assistance',
    afterSaleService: 'After-Sale Service',
    technicalAssistance: 'Technical Assistance',
    news: 'News',
    contact: 'Contact'
  },

  es: {
    whoWeAre: 'Quienes somos',
    equipment: 'Equipos',
    crushers: 'Machacadoras',
    impactCrushers: 'Molinos',
    scalpers: 'Precribadores',
    screeners: 'Cribas',
    conveyor: 'Cintas',
    recycling: 'Reciclaje',
    dustCannon: 'Cañón de polvo',
    usedEquipment: 'Equipos usados',
    spareParts: 'Recambios',
    services: 'Servicios',
    customerAssitance: 'Asesoramiento',
    afterSaleService: 'Post-venta',
    technicalAssistance: 'Asistencia Técnica',
    news: 'Novedades',
    contact: 'Contacto'

  }
}

function Header() {
  const { whoWeAre, equipment, crushers, impactCrusher, scalpers, screeners, conveyor, recycling, dustCannon, usedEquipment, spareParts, services, customerAssitance, afterSaleService, technicalAssistance, news, contact } = useLiterals(literals)

  const [toggleMenuButtonVisible, setToggleMenuVisible] = useState(false);
  const [toggleEquipmentButtonText, setToggleEquipmentButton] =
    useState("arrow_drop_down");
  const [toggleServicesButtonText, setToggleServicesButton] =
    useState("arrow_drop_down");
  const [phoneNumberVisible, setPhoneNumberVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);

  const router = useRouter()

  const toggleMenu = () =>
    setToggleMenuVisible(!toggleMenuButtonVisible);
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

    setToggleMenuVisible(false)

    const { href } = event.target

    router.push(href)
  }

  return (
    <header className="z-10 absolute top-0 w-full">
      <div className="flex justify-between bg-[#323A47] p-2">
        <nav className="flex space-x-5">
          <a href="https://wa.me/34666967923">
            <img className="w-5" src="/images/social/Wsapp-Blanco.png" alt="WhatsApp" />
          </a>
          <a href="">
            <img className="w-5" src="/images/social/Youtube-Blanco.png" alt="YouTube" />
          </a>
          <a href="https://www.instagram.com/tesabspain/">
            <img className="w-5" src="/images/social/Instagram-Blanco.png" alt="Instagram" />
          </a>
          <a href="https://www.linkedin.com/company/tesab-spain-sl/?viewAsMember=true">
            <img className="w-5" src="/images/social/Linkedin-blanco.png" alt="LinkedIn" />
          </a>
          <a href="https://www.facebook.com/tesabspainsl/">
            <img className="w-5" src="/images/social/Facebook-blanco.png" alt="Facebook" />
          </a>
        </nav>
        <nav className="flex space-x-5">
          <span className="flex items-center space-x-2">
            <img
              className="w-4"
              src="/images/social/Telefono-Blanco.png"
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
              src="/images/social/Correo-blanco.png"
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

      <div className="flex justify-between items-center p-3 bg-white/75">
        <div className="flex flex-col justify-self-center self-center">
          <h1>
            <Link href="/">
              <img
                className="h-8 cursor-pointer"
                src="/images/tesab-logo.png"
                alt="Tesab Spain"
              />
            </Link>
          </h1>
          <h2 className="text-sm font-bold">Alquiler y venta de maquinaria</h2>
        </div>
        <button
          className="justify-self-end self-center cursor-pointer lg:hidden"
          onClick={toggleMenu}
        >
          {toggleMenuButtonVisible ? <GrClose size="1.5rem" /> : <FiMenu size="1.5rem" />}
        </button>
        <nav className="hidden lg:block">
          <ul className="flex gap-5 font-bold">
            <li><Link href="/who-we-are" legacyBehavior onClick={navigateTo}>{whoWeAre}</Link></li>
            <li className="flex flex-col">
              <span className="flex items-center">
                <a>{equipment}</a>
                <button className="material-symbols-outlined" onClick={toggleEquipment}>{toggleEquipmentButtonText}</button>
              </span>
              {toggleEquipmentButtonText === "arrow_drop_up" && (
                <ul className="ml-4">
                  <li className="">
                    <Link href="/equipment#crushers">{crushers}</Link>
                  </li>
                  <li className="">
                    <Link href="/equipment#impactCrusher">{impactCrusher}</Link>
                  </li>
                  <li className="">
                    <Link href="/equipment#scalpers">{scalpers}</Link>
                  </li>
                  <li className="">
                    <Link href="/equipment#screeners">{screeners}</Link>
                  </li>
                  <li className="">
                    <Link href="/equipment#conveyor">{conveyor}</Link>
                  </li>
                  <li className="">
                    <Link href="/equipment#recycling">{recycling}</Link>
                  </li>
                  <li>
                    <Link href="/equipment#dust-cannon">{dustCannon}</Link>
                  </li>
                </ul>
              )}
            </li>
            <li><Link href="/used-equipment" legacyBehavior onClick={navigateTo}>{usedEquipment}</Link></li>
            <li><Link href="/spare-parts" legacyBehavior onClick={navigateTo}>{spareParts}</Link></li>
            <li className="flex flex-col">
              <span className="flex items-center">
                <a>{services}</a>
                <button className="material-symbols-outlined" onClick={toggleServices}>{toggleServicesButtonText}</button>
              </span>
              {toggleServicesButtonText === "arrow_drop_up" && (
                <ul>
                  <li className="py-1">
                    <Link href='/services#customerAssistance'>{customerAssitance}</Link>
                  </li>
                  <li className="py-1">
                    <Link href='/services#afterSaleService'>{afterSaleService}</Link>
                  </li>
                  <li className="py-1">
                    <Link href='/services#technicalAssistance'>{technicalAssistance}</Link>
                  </li>
                </ul>
              )}
            </li>
            <li><Link href="/news" legacyBehavior onClick={navigateTo}>{news}</Link></li>
            <li><Link href="/contact" legacyBehavior onClick={navigateTo}>{contact}</Link></li>
          </ul>
        </nav>
      </div>
      {toggleMenuButtonVisible && (
        <nav className=" h-full bg-white opacity-95 +z-20">
          <ul className="text-lg font-bold">
            <li className="pl-4 text-right ">
              <Link href="" locale="es" className="px-4">
                Español
              </Link>
              <Link href="" locale="en" className="px-4">
                English
              </Link>
              <Link href="" locale="pt" className="px-4">
                Português
              </Link>
            </li>
            <li className="border-b-black border pl-4 py-2">
              <Link href="/who-we-are" onClick={navigateTo}>
                {whoWeAre}
              </Link>
            </li>
            <li className="border-b-black border pl-4 py-2">
              <span className="flex items-center">
                <Link href="/equipment" onClick={navigateTo}>
                  {equipment}
                </Link>
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
                    <Link href="/equipment#crushers">{crushers}</Link>
                  </li>
                  <li className="">
                    <Link href="/equipment#impactCrusher">{impactCrusher}</Link>
                  </li>
                  <li className="">
                    <Link href="/equipment#scalpers">{scalpers}</Link>
                  </li>
                  <li className="">
                    <Link href="/equipment#screeners">{screeners}</Link>
                  </li>
                  <li className="">
                    <Link href="/equipment#conveyor">{conveyor}</Link>
                  </li>
                  <li className="">
                    <Link href="/equipment#recycling">{recycling}</Link>
                  </li>
                  <li>
                    <Link href="/equipment#dust-cannon">{dustCannon}</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="border-b-black border pl-4 py-2 py-2">
              <Link onClick={navigateTo} href="/used-equipment">{usedEquipment}</Link>
            </li>
            <li className="border-b-black border pl-4 py-2">
              <Link href="/spare-parts" onClick={navigateTo}>{spareParts}</Link>
            </li>
            <li className="border-b-black border pl-4 py-2">
              <span className="flex items-center">
                <Link onClick={navigateTo} href="/services">{services}</Link>
                <button className="material-symbols-outlined" onClick={toggleServices}>{toggleServicesButtonText}</button>
              </span>
              {toggleServicesButtonText === "arrow_drop_up" && (
                <ul className="ml-4">
                  <li className="py-1">
                    <Link href='/services#customerAssistance'>{customerAssitance}</Link>
                  </li>
                  <li className="py-1">
                    <Link href='/services#afterSaleService'>{afterSaleService}</Link>
                  </li>
                  <li className="py-1">
                    <Link href='/services#technicalAssistance'>{technicalAssistance}</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="border-b-black border pl-4 py-2">
              <Link onClick={navigateTo} href="/news">{news}</Link>
            </li>
            <li className="border-b-black border pl-4 py-2">
              <Link onClick={navigateTo} href="/contact">{contact}</Link>
            </li>
          </ul>
        </nav>
      )
      }
    </header >
  );
}

export default Header;
