import { useState } from 'react'
import {useRouter} from 'next/router'

const literals = {
    'pt-PT': {
        formTitle: 'Contacto',
        contactName: 'Nome e Apelido(*)',
        contactEmail: 'E-mail de contacto(*)',
        contactPhone: 'Número de telefone de contacto(*)',
        company: 'Empresa(*)',
        companyLocation: 'Localização da empresa',
        description: 'Descreva resumidamente a sua consulta',
        subcription: 'Gostaria de receber as notícias quinzenais gratuitas da Tesab Espanha por correio electrónico.',
        dataProtectionInputText: 'Concordo com o tratamento dos meus dados.',
        dataProtectionInfo: 'Em conformidade com as disposições do Regulamento (UE) 2016/679 e da Lei Orgânica 3/2018, de 5 de Dezembro (LOPDGDD), informamos que os seus dados serão incorporados no sistema de processamento propriedade da TESAB ESPANHA, S.L. com CIF B9546222222 e endereço registado em Polígono Industrial Erletxe - Plataforma A1, Pabellón 8, 48960 - Galdakao (Vizcaya), a fim de o informar sobre os produtos e serviços que oferecemos. Como parte directamente interessada, tem o direito de acesso, rectificação, cancelamento e oposição ao processamento de informações que lhe dizem respeito. Os referidos direitos podem ser exercidos através do envio de um e-mail para info@tesabspain.es'
    },

    'en-IE':{
        formTitle: 'Get in touch (*)',
        contactName: 'Name and surname(*)',
        contactEmail: 'Contact email(*)',
        contactPhone: 'Contact telephone number(*)',
        company: 'Company name(*)',
        companyLocation: 'Company location',
        description: 'Please, describe your query',
        subcription: 'I would like to receive the free fortnightly news from Tesab Spain by email.',
        dataProtectionInputText: 'I agree to the processing of my personal data',
        dataProtectionInfo: 'In accordance with the provisions of Regulation (EU) 2016/679 and Organic Law 3/2018, of 5 December (LOPDGDD), we inform you that your data will be incorporated into the processing system owned by TESAB SPAIN, S.L. with CIF B95462222 and registered address at Polígono Industrial Erletxe - Plataforma A1, Pabellón 8, 48960 - Galdakao (Vizcaya), in order to inform you of the products and services we offer. You, as a direct interested party, have the right of access, rectification, cancellation and opposition to the processing of information concerning you. The aforementioned rights may be exercised by sending an email to info@tesabspain.es'
    },

    'es-ES' : {
        formTitle: 'Contacta',
        contactName: 'Nombre y Apellidos(*)',
        contactEmail: 'Email de contacto(*)',
        contactPhone: 'Teléfono de contacto(*)',
        company: 'Empresa(*)',
        companyLocation: 'Ubicación de la empresa',
        description: 'Describenos brevemente tu consulta',
        subcription: 'Me gustaría recibir las noticias quincenales gratuitas de Tesab Spain en mi correo electrónico.',
        dataProtectionInputText: 'Acepto el tratamiento de mis datos',
        dataProtectionInfo: 'De conformidad con lo establecido en el Reglamento (UE) 2016/679 y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD), le informamos que sus datos serán incorporados al sistema de tratamiento titularidad de TESAB SPAIN, S.L. con CIF B95462222 y domicilio social sito en Polígono Industrial Erletxe – Plataforma A1, Pabellón 8, 48960 – Galdakao (Vizcaya), con la finalidad de informarle de los productos y servicios que ofrecemos. Usted, como interesado directo, tiene derecho de acceso, rectificación, cancelación y oposición al tratamiento de la información que le concierne. Los derechos precitados podrán hacerse efectivos enviando un correo electrónico a info@tesabspain.es',
    }

    }



function ContactForm() {
    const { locale } = useRouter()
    const { formTitle,contactName, contactEmail, contactPhone, company, companyLocation, description, subcription, dataProtectionInputText, dataProtectionInfo} = literals[locale]

    const [toggleDataProtectionButtomText, setToggleDataProtectionButtomText] = useState('arrow_drop_down')
    const [dataProtectionVisible, setDataProtectionVisible] = useState(false);

    const toggleDataProtection = () => {
        setToggleDataProtectionButtomText(toggleDataProtectionButtomText === "arrow_drop_down" ? "arrow_drop_up" : "arrow_drop_down");
        setDataProtectionVisible(!dataProtectionVisible);
    }

    return <div className="m-6">
        <h2 className="font-bakbak-one text-2xl my-6 text-center">{formTitle}</h2>
        <p className='border border-black rounded my-2 py-1 pl-2' contentEditable="true">{contactName}</p>

        <p className='border border-black rounded my-2 py-1 pl-2' contentEditable="true">{contactEmail}</p>
        <p className='border border-black rounded my-2 py-1 pl-2' contentEditable="true">{contactPhone}</p>
        <p className='border border-black rounded my-2 py-1 pl-2' contentEditable="true">{company}</p>
        <p className='border border-black rounded my-2 py-1 pl-2' contentEditable="true">{companyLocation}</p>
        <div className="relative h-72 border border-black rounded my-2">
            <p className="pl-2" contentEditable="true">{description}</p>
            <img className="absolute bottom-0" src="images/backgroundMachine.png" alt="" />
        </div>
        <p><input id="checkbox1" type="checkbox" />{subcription}</p>
        <p><input id="checkbox1" type="checkbox" />{dataProtectionInputText}<button className="material-symbols-outlined" onClick={toggleDataProtection}>{toggleDataProtectionButtomText}</button></p>
        {dataProtectionVisible && (<p className='text-sm text-justify pl-4'>{dataProtectionInfo}</p>)}
        <button className="justify-end font-bakbak-one bg-amber-400 rounded border border-black my-4 p-2">Solicitar información</button>

    </div>
}

export default ContactForm