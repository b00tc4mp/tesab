import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { useRouter } from 'next/router'

const literals = {
    'pt-PT': {
        title: 'CONTACTO',
        address: 'Endereço: Polígono Industrial Erletxe Plataforma 1A, pabellón Nº8, CP 48960,Galdacano,Vizcaya'
    },
    'en-IE': {
        title: 'CONTACT',
        address: 'Address: Polígono Industrial Erletxe Plataforma 1A, pabellón Nº8, CP 48960,Galdacano,Vizcaya'
    },
    'es-ES': {
        title: 'CONTACTO',
        address: 'Dirección: Polígono Industrial Erletxe Plataforma 1A, pabellón Nº8, CP 48960,Galdacano,Vizcaya'
    }
}

export default function contact() {
    const { locale } = useRouter()
    const { title, address } = literals[locale]

    return (
        <>
            <h1 className="font-bakbak-one text-center text-3xl m-4">
                {title}
            </h1>
            <h4 className="text-center my-2">{address}</h4>
            <img src="/maps.png" className="my-6" />
            <p className="flex flex-col">
                <a href="tel:+34944924003" className="text-center">Teléfono: (+34) 944 924 003</a>
                <a href="https://wa.me/34666967923" className="text-center">Whatsapp: (+34) 690 814 482</a>
            </p>

            <ContactForm />
            <Footer />
        </>
    );
}