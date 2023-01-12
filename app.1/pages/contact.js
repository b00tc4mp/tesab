//TODO --> ARREGLAR QUE APARECE DOS VECES EL CONTACT FORM

import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import useLiterals from "../hooks/useLiterals";

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
    const { title, address, phone, wsapp, contactFormTitle, querytitle, introductionQuery } = useLiterals(literals)

    return (
        <main>
            <h1 className="font-bakbak-one text-center text-4xl m-4">
                {title}
            </h1>
            <div className="flex items-center justify-center px-2">
                <img className="w-8 h-8" src="images/social/ubication-Icon.jpg" />
                <h4 className="text-center my-2">{address}</h4>
            </div>

            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2906.6593089048615!2d-2.8019595842386975!3d43.23760218722226!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd4e5a01d461cfb3%3A0xed9e8900e45f83c1!2sTesab%20Spain%2C%20S.L.!5e0!3m2!1ses!2ses!4v1668526993445!5m2!1ses!2ses" className="w-full h-96 my-6" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

            <div className="flex flex-col items-center gap-y-4">
                <span className="flex items-center">
                    <img className="w-4 h-4" src="images/social/Telefono-Negro.png" />
                    <a href="tel:+34944924003" className="text-center">{phone}</a>
                </span>
                <span className="flex">
                    <img className="w-6 h-6" src="images/social/Wsapp-Verde.png" />
                    <a href="https://wa.me/34666967923" className="text-center">{wsapp}</a>
                </span>
            </div>

            <h2 className="text-center text-3xl font-bold my-12">{contactFormTitle}</h2>
            <div className="hidden lg:block">
                <div className="grid grid-cols-2 items-start px-24">
                    <div className="flex flex-col gap-6">
                        <h4 className="font-bold text-xl">{querytitle}</h4>
                        <p>{introductionQuery}</p>
                        <img src="/images/equipment/crushers/700ie/crusher700i3.jpg"></img>
                    </div>

                    <ContactForm />
                </div>
            </div>
            <ContactForm />

            <Footer />
        </main>
    );
}