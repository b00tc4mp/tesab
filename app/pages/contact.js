import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import { useRouter } from 'next/router'

const literals = {
    'pt-PT': {
        title: 'CONTACTO',
        address: 'Endereço: Polígono Industrial Erletxe Plataforma 1A, pabellón Nº8, CP 48960,Galdacano,Vizcaya',
        phone: 'Telefone: (+34) 944 924 003',
        wsapp: 'Whatsapp: (+34) 666 967 923'
            },

    'en-IE': {
        title: 'CONTACT',
        address: 'Address: Polígono Industrial Erletxe Plataforma 1A, pabellón Nº8, CP 48960,Galdacano,Vizcaya',
        phone: 'Telephone: (+34) 944 924 003',
        wsapp: 'Whatsapp: (+34) 666 967 923'
            },

    'es-ES': {
        title: 'CONTACTO',
        address: 'Dirección: Polígono Industrial Erletxe Plataforma 1A, pabellón Nº8, CP 48960,Galdacano,Vizcaya',
        phone: 'Teléfono: (+34) 944 924 003',
        wsapp: 'Whatsapp: (+34) 666 967 923'
    }
}

export default function contact() {
    const { locale } = useRouter()
    const { title, address, phone, wsapp } = literals[locale]

    return (
        <main>
            <h1 className="font-bakbak-one text-center text-3xl m-4">
                {title}
            </h1>
            <div className="flex items-center px-2">
                <img className="w-8 h-8" src="images/social/ubication-Icon.jpg" />
                <h4 className="text-justify my-2">{address}</h4>
            </div>
            <img src="/maps.png" className="my-6" />
            <div className="flex flex-col items-center gap-y-4">
                <span className="flex items-center">
                    <img className="w-4 h-4" src="images/social/Telefono-Negro.png"/>
                    <a href="tel:+34944924003" className="text-center">{phone}</a>
                </span>
                <span className="flex">
                    <img className="w-6 h-6" src="images/social/Wsapp-Verde.png"/>
                    <a href="https://wa.me/34666967923" className="text-center">{wsapp}</a>
                </span>
            </div>

            <ContactForm />
            <Footer />
        </main>
    );
}