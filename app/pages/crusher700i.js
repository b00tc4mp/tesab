import Link from 'next/link'
import Footer from "../components/Footer";
import { useRouter } from 'next/router';

const literals = {
  'pt-PT': {
    descriptionTittle: 'Descrição',
    descriptionText: '',
    technicalSpecifications: 'Especificações técnicas',
    technicalSpecificationsText: '',
    makeQueryButton: 'Pedido de informação',
  },

  'en-IE': {
    descriptionTittle: 'Description',
    descriptionText: '',
    technicalSpecifications: 'Technical Specifications',
    technicalSpecificationsText1: '',
    makeQueryButton: 'More information',
  },

  'es-ES': {
    descriptionTittle: 'Descripciçon',
    descriptionText: '',
    technicalSpecifications: 'Especificaciones Técnicas',
    technicalSpecificationsText1: '',
    technicalSpecificationsText2: '',
    technicalSpecificationsText3: '',
    technicalSpecificationsText4: '',
    technicalSpecificationsText5: '',
    technicalSpecificationsText6: '',
    makeQueryButton: 'Solicitar información',
  }
}


export default function crusher700ie() {
  const { locale } = useRouter()
  const {descriptionTitle, descriptionText,technicalSpecifications, technicalSpecificationsText1,technicalSpecificationsText2, technicalSpecificationsText3,technicalSpecificationsText4,technicalSpecificationsText5,technicalSpecificationsText6, makeQueryButton } = literals[locale]

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
        <h2 className="font-bakbak-one m-4">{descriptionTitle}</h2>
        <p className="m-4 text-justify">{descriptionText}</p>

        <h2 className="font-bakbak-one m-4 ">{technicalSpecifications}</h2>
        <ul className="m-4">
          <li>{technicalSpecificationsText1}</li>
          <li>{technicalSpecificationsText2}</li>
          <li>{technicalSpecificationsText3}</li>
          <li>{technicalSpecificationsText4}</li>
          <li>{technicalSpecificationsText5}</li>
          <li>{technicalSpecificationsText6}</li>
        </ul>
      </div>
      <div className="flex justify-center sticky bottom-5">
        <Link href="/contact"><button className="bg-amber-400 m-4 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400 ">
          {" "}
          {makeQueryButton}{" "}
        </button></Link>
      </div>

      {/* <TypeForm /> */}

      <Footer />
    </>
  );
}
