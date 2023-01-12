import { useState } from 'react'
import { useRouter } from 'next/router'
import prepareLiterals from '../helpers/prepareLiterals'
import sendEmail from '../logic/sendEmail'
import { GrFormUp, GrFormDown } from 'react-icons/gr'

const literals = {
    pt: {
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

    en: {
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

    es: {
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
    const {contactName, contactEmail, contactPhone, company, companyLocation, description, subcription, dataProtectionInputText, dataProtectionInfo } = prepareLiterals(literals)

    const [toggleDataProtectionButtomText, setToggleDataProtectionButtomText] = useState(false)
    const [dataProtectionVisible, setDataProtectionVisible] = useState(false);

    const toggleDataProtection = event => {
        event.stopPropagation()
        
        setToggleDataProtectionButtomText(!toggleDataProtectionButtomText);
        setDataProtectionVisible(!dataProtectionVisible);
    }

    const submit = event => {
        event.preventDefault()

        const form = event.target

        const name = form.name.value
        const email = form.email.value
        const phone = form.phone.value
        const company = form.company.value
        const location = form.location.value
        const description = form.description.value
        const subscription = form.subscription.value
        const dataProtection = form['data-protection'].value

        // TODO fetch('/api/contact', ... ) send all the previous data in json format to the api (method post)

        try {
            sendEmail(email, `contact from the web (${name})`, `name: ${name}
            phone: ${phone}
            company: ${company}
            location: ${location}
            description: ${description}
            subscription: ${subscription}
            dataProtecton: ${dataProtection}`)
                .then(() => alert('mail sent!'))
                .catch(error => alert(error.message))
        } catch (error) {
            alert(error.message)
        }
    }

    return <form className="p-6 flex flex-col lg:grid" onSubmit={submit}>

        <label className='font-alexandria' htmlFor="name">{contactName}</label>
        <input id="name" name="name" className='border border-black rounded my-2 py-1 pl-2' placeholder={contactName} />

        <label className='font-alexandria' htmlFor="email">{contactEmail}</label>
        <input id="email" name="email" className='border border-black rounded my-2 py-1 pl-2' placeholder={contactEmail} />

        <label className='font-alexandria' htmlFor="phone">{contactPhone}</label>
        <input id="phone" name="phone" className='border border-black rounded my-2 py-1 pl-2' placeholder={contactPhone} />

        <label className='font-alexandria' htmlFor="company">{company}</label>
        <input id="company" name="company" className='border border-black rounded my-2 py-1 pl-2' placeholder={company} />

        <label className='font-alexandria' htmlFor="location">{companyLocation}</label>
        <input id="location" name="location" className='border border-black rounded my-2 py-1 pl-2' placeholder={companyLocation} />

        {/* <div className="relative h-72 border border-black rounded my-2">
            <textarea className="pl-2" placeholder={description}/>
            <img className="absolute bottom-0" src="/images/backgroundMachine.png" alt="" />
        </div> */}

        <label className='font-alexandria' htmlFor="description">{description}</label>
        <textarea id="description" name="description" className='border border-black rounded my-2 py-1 pl-2 bg-contain h-48' placeholder={description} style={{ backgroundImage: 'url(/images/piramide.png)' }} />

        <label className='font-alexandria' htmlFor='subscription'><input id="subscription" name="subscription" type="checkbox" />{subcription}</label>
        <label className='font-alexandria pb-4' htmlFor='data-protection'><input id="data-protection" name="data-protection" type="checkbox" />{dataProtectionInputText}<button type="button" className="" onClick={toggleDataProtection}>{toggleDataProtectionButtomText ? <GrFormUp size="1.5rem" /> : <GrFormDown size="1.5rem" />}</button></label>
        {dataProtectionVisible && (<p className='text-sm text-justify pl-4 pb-4'>{dataProtectionInfo}</p>)}
        <div className='flex justify-center'>
            <button type="submit" id="queryButton" className="btn w-56">Solicitar información</button>
        </div>

    </form>
}

export default ContactForm