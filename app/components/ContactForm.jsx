import { useState } from 'react'


function ContactForm() {

    const [toggleDataProtectionButtomText,setToggleDataProtectionButtomText] = useState ('arrow_drop_down')
    
    const toggleDataProtection = ()=> setToggleDataProtectionButtomText (false)

    return <div className="m-6">
            <h2 className="font-bakbak-one text-2xl my-6">Contacte con un experto </h2>
            <p className='border border-black rounded my-2 py-1 pl-2' contentEditable="true">Nombre</p>
            <p className='border border-black rounded my-2 py-1 pl-2' contentEditable="true">Empresa</p>
            <p className='border border-black rounded my-2 py-1 pl-2' contentEditable="true">Ubicación de la empresa</p>
            <p className='border border-black rounded my-2 py-1 pl-2' contentEditable="true">Email de contacto</p>
            <p className='border border-black rounded my-2 py-1 pl-2' contentEditable="true">Teléfono de contacto</p>
            <div className="relative h-72 border border-black rounded my-2'">
                <p className="pl-2" contentEditable="true">Describenos brevemente tu consulta</p>
                <img className="absolute bottom-0" src="images/backgroundMachine.png" alt="" />
            </div>
            <p><input id="checkbox1" type="checkbox" />SÍ, me gustaría recibir las noticias quincenales gratuitas de Tesab Spain en mi correo electrónico.</p>
            <p><input id="checkbox1" type="checkbox" />Acepto el tratamiento de mis datos.<button className="material-symbols-outlined" onClick={toggleDataProtection}>{toggleDataProtectionButtomText}</button></p>
            {toggleDataProtection === 'arrow_drop_down' && <p>De conformidad con lo establecido en el Reglamento (UE) 2016/679 y la Ley Orgánica 3/2018, de 5 de diciembre (LOPDGDD), le informamos que sus datos serán incorporados al sistema de tratamiento titularidad de TESAB SPAIN, S.L. con CIF B95462222 y domicilio social sito en Polígono Industrial Erletxe – Plataforma A1, Pabellón 8, 48960 – Galdakao (Vizcaya), con la finalidad de informarle de los productos y servicios que ofrecemos. Usted, como interesado directo, tiene derecho de acceso, rectificación, cancelación y oposición al tratamiento de la información que le concierne. Los derechos precitados podrán hacerse efectivos enviando un correo electrónico a info@tesabspain.es</p>}
            <button className="justify-end font-bakbak-one bg-amber-400 rounded border border-black my-4 p-2">Solicitar información</button>
        </div>
}

export default ContactForm