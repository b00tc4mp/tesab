import { useState } from "react";
import Link from "next/link";
import prepareLiterals from "../helpers/prepareLiterals";
import { useRouter } from 'next/router'
import { FiMenu } from 'react-icons/fi'
import { GrClose, GrFormUp, GrFormDown } from 'react-icons/gr'
import Head from 'next/head'


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

function Header({ isMobile }) {
  const { whoWeAre, equipment, crushers, impactCrusher, scalpers, screeners, conveyor, recycling, dustCannon, usedEquipment, spareParts, services, customerAssitance, afterSaleService, technicalAssistance, news, contact } = prepareLiterals(literals)

  const [toggleMenuButtonVisible, setToggleMenuVisible] = useState(false);
  const [toggleEquipmentButtonVisibleLg, setToggleEquipmentButtonVisibleLg] = useState(false);
  const [toggleEquipmentButtonVisibleMovil, setToggleEquipmentButtonVisibleMovil] = useState(false);
  const [toggleServicesButtonVisibleLg, setToggleServicesButtonVisibleLg] = useState(false);
  const [toggleServicesButtonVisibleMovil, setToggleServicesButtonVisibleMovil] = useState(false);
  const [phoneNumberVisible, setPhoneNumberVisible] = useState(false);
  const [emailVisible, setEmailVisible] = useState(false);

  const router = useRouter()

  const toggleMenu = () =>
    setToggleMenuVisible(!toggleMenuButtonVisible);

  const toggleEquipmentLg = () =>
    setToggleEquipmentButtonVisibleLg(!toggleEquipmentButtonVisibleLg);

  const toggleEquipmentMovil = () =>
    setToggleEquipmentButtonVisibleMovil(!toggleEquipmentButtonVisibleMovil);

  const toggleServicesLg = () =>
    setToggleServicesButtonVisibleLg(!toggleServicesButtonVisibleLg);

  const toggleServicesMovil = () =>
    setToggleServicesButtonVisibleMovil(!toggleServicesButtonVisibleMovil);

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

    setToggleMenuVisible(false);
    setToggleEquipmentButtonVisibleLg(false);
    setToggleEquipmentButtonVisibleMovil(false);
    setToggleServicesButtonVisibleLg(false);
    setToggleServicesButtonVisibleMovil(false);

    const { href } = event.target

    router.push(href)
  }

  return <>
    <Head>
      <title>Tesab Spain S.L.</title>
    </Head>

    <header className="z-10 fixed top-0 w-full">
      <nav className="flex space-x-5">
        <span className="flex items-center space-x-2">
          <img
            className="w-4"
            src="/images/social/Telefono-Blanco.png"
            alt="Telephone"
            onClick={togglePhoneNumber}
          />
          {phoneNumberVisible && (
            <a href="tel:+34944924003" className="font-alexandria text-white text-xs">
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
              className="font-alexandria text-white text-xs"
            >
              tesab@tesabspain.es
            </a>
          )}
        </span>
      </nav>
      <div className="flex justify-between p-3 bg-white lg:overflow-visible h-[90px]">
        <div className="flex flex-col justify-self-center self-center">
          <h1>
            <Link href="/" title="Tesab Spain S.L.">
              <img
                className="h-8 cursor-pointer"
                src="/images/tesab-logo.png"
                alt="Tesab Spain S.L."
              />
            </Link>
          </h1>
          <h2 className="text-sm font-bold">Alquiler y venta de maquinaria</h2>
        </div>
        {isMobile ?
          <button
            className="justify-self-end self-center cursor-pointer lg:hidden"
            onClick={toggleMenu}
          >
            {toggleMenuButtonVisible ? <GrClose size="1.5rem" /> : <FiMenu size="1.5rem" />}
          </button>
          :
          <nav className="hidden lg:block">
            <ul className="flex font-bold gap-x-5">
              <li className="font-alexandria p-2 rounded hover:bg-amber-200 ease-in-out duration-300"><Link href="/who-we-are" onClick={navigateTo}>{whoWeAre}</Link></li>
              <li className="font-alexandria flex flex-col w-auto p-2 rounded hover:bg-amber-200 ease-in-out duration-300">
                <span className="flex items-center justify-center">
                  <Link href="/equipment" onClick={navigateTo}>{equipment}</Link>
                  <button onClick={toggleEquipmentLg}>{toggleEquipmentButtonVisibleLg ? <GrFormUp size="1.5rem" /> : <GrFormDown size="1.5rem" />}</button>
                </span>
                <ul className={`flex flex-col gap-1 py-2 ${toggleEquipmentButtonVisibleLg ? 'block' : 'hidden'}`}>
                  <li className="font-alexandria hover:scale-105 transition duration-300 ease-in-out">
                    <Link href="/equipment#crushers" onClick={navigateTo}>{crushers}</Link>
                  </li>
                  <li className="font-alexandria hover:scale-105 transition duration-300 ease-in-out">
                    <Link href="/equipment#impactCrusher" onClick={navigateTo}>{impactCrusher}</Link>
                  </li>
                  <li className="font-alexandria hover:scale-105 transition duration-300 ease-in-out">
                    <Link href="/equipment#scalpers" onClick={navigateTo}>{scalpers}</Link>
                  </li>
                  <li className="font-alexandria hover:scale-105 transition duration-300 ease-in-out">
                    <Link href="/equipment#screeners" onClick={navigateTo}>{screeners}</Link>
                  </li>
                  <li className="font-alexandria hover:scale-105 transition duration-300 ease-in-out">
                    <Link href="/equipment#conveyor" onClick={navigateTo}>{conveyor}</Link>
                  </li>
                  <li className="font-alexandria hover:scale-105 transition duration-300 ease-in-out">
                    <Link href="/equipment#recycling" onClick={navigateTo}>{recycling}</Link>
                  </li>
                  <li className="font-alexandria hover:scale-105 transition duration-300 ease-in-out">
                    <Link href="/equipment#dust-cannon" onClick={navigateTo}>{dustCannon}</Link>
                  </li>
                </ul>

              </li>
              <li className="font-alexandria p-2 rounded hover:bg-amber-200 ease-in-out duration-300"><Link href="/used-equipment" onClick={navigateTo}>{usedEquipment}</Link></li>
              <li className="font-alexandria p-2 rounded hover:bg-amber-200 ease-in-out duration-300"><Link href="/spare-parts" onClick={navigateTo}>{spareParts}</Link></li>
              <li className="font-alexandria flex flex-col w-auto p-2 rounded hover:bg-amber-200 ease-in-out duration-300">
                <span className="flex items-center justify-center">
                  <Link onClick={navigateTo} href="/services">{services}</Link>
                  <button onClick={toggleServicesLg}>{toggleServicesButtonVisibleLg ? <GrFormUp size="1.5rem" /> : <GrFormDown size="1.5rem" />}</button>
                </span>
                <ul className={`flex flex-col gap-1 py-2 ${toggleServicesButtonVisibleLg ? 'block' : 'hidden'}`}>
                  <li className="font-alexandria py-1 hover:scale-105 transition duration-300 ease-in-out">
                    <Link href='/services#customerAssistance'>{customerAssitance}</Link>
                  </li>
                  <li className="font-alexandria py-1 hover:scale-105 transition duration-300 ease-in-out">
                    <Link href='/services#afterSaleService'>{afterSaleService}</Link>
                  </li>
                  <li className="font-alexandria py-1 hover:scale-105 transition duration-300 ease-in-out">
                    <Link href='/services#technicalAssistance'>{technicalAssistance}</Link>
                  </li>
                </ul>
              </li>
              <li className="font-alexandria p-2 rounded hover:bg-amber-200 ease-in-out duration-300"><Link href="/news" onClick={navigateTo}>{news}</Link></li>
              <li className="font-alexandria p-2 rounded hover:bg-amber-200 ease-in-out duration-300"><Link href="/contact" onClick={navigateTo}>{contact}</Link></li>
            </ul>
          </nav>}
      </div>
      {isMobile && toggleMenuButtonVisible && (
        <nav className="h-full bg-white opacity-95 +z-20 lg:hidden">
          <ul className="text-lg font-bold">
            <li className="font-alexandria pl-4 text-right ">
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
            <li className="font-alexandria border-b-black border pl-4 py-2">
              <Link href="/who-we-are" onClick={navigateTo}>
                {whoWeAre}
              </Link>
            </li>
            <li className="font-alexandria border-b-black border pl-4 py-2">
              <span className="flex items-center">
                <Link href="/equipment" onClick={navigateTo}>
                  {equipment}
                </Link>
                <button
                  className="material-symbols-outlined"
                  onClick={toggleEquipmentMovil}
                >
                  {toggleEquipmentButtonVisibleMovil ? <GrFormUp size="1.5rem" /> : <GrFormDown size="1.5rem" />}
                </button>
              </span>
              {toggleEquipmentButtonVisibleMovil && (
                <ul className="ml-4">
                  <li className="font-alexandria">
                    <Link href="/equipment#crushers" onClick={navigateTo}>{crushers}</Link>
                  </li>
                  <li className="font-alexandria">
                    <Link href="/equipment#impactCrusher" onClick={navigateTo}>{impactCrusher}</Link>
                  </li>
                  <li className="font-alexandria">
                    <Link href="/equipment#scalpers" onClick={navigateTo}>{scalpers}</Link>
                  </li>
                  <li className="font-alexandria">
                    <Link href="/equipment#screeners" onClick={navigateTo}>{screeners}</Link>
                  </li>
                  <li className="font-alexandria">
                    <Link href="/equipment#conveyor" onClick={navigateTo}>{conveyor}</Link>
                  </li>
                  <li className="font-alexandria">
                    <Link href="/equipment#recycling" onClick={navigateTo}>{recycling}</Link>
                  </li>
                  <li className="font-alexandria">
                    <Link href="/equipment#dust-cannon" onClick={navigateTo}>{dustCannon}</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="font-alexandria border-b-black border pl-4 py-2 py-2">
              <Link onClick={navigateTo} href="/used-equipment">{usedEquipment}</Link>
            </li>
            <li className="font-alexandria border-b-black border pl-4 py-2">
              <Link href="/spare-parts" onClick={navigateTo}>{spareParts}</Link>
            </li>
            <li className="font-alexandria border-b-black border pl-4 py-2">
              <span className="flex items-center">
                <Link onClick={navigateTo} href="/services">{services}</Link>
                <button className="material-symbols-outlined" onClick={toggleServicesMovil}>{toggleServicesButtonVisibleMovil ? <GrFormUp size="1.5rem" /> : <GrFormDown size="1.5rem" />}</button>
              </span>
              {toggleServicesButtonVisibleMovil && (
                <ul className="ml-4">
                  <li className="py-1">
                    <Link href='/services#customerAssistance' onClick={navigateTo}>{customerAssitance}</Link>
                  </li>
                  <li className="py-1">
                    <Link href='/services#afterSaleService' onClick={navigateTo}>{afterSaleService}</Link>
                  </li>
                  <li className="py-1">
                    <Link href='/services#technicalAssistance' onClick={navigateTo}>{technicalAssistance}</Link>
                  </li>
                </ul>
              )}
            </li>
            <li className="font-alexandria border-b-black border pl-4 py-2">
              <Link onClick={navigateTo} href="/news">{news}</Link>
            </li>
            <li className="font-alexandria border-b-black border pl-4 py-2">
              <Link onClick={navigateTo} href="/contact">{contact}</Link>
            </li>
          </ul>
        </nav>
      )
      }
    </header >
  </>
}

export default Header;
