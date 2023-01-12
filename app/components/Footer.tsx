import prepareLiterals from "../helpers/prepareLiterals"

const literals = {
    pt: {
        address: 'Endereço: Polígono Industrial Erletxe Plataforma 1A, pabellón Nº8, CP 48960,Galdacano,Vizcaya',
        phone: 'Telefone: (+34) 944 924 003'
    },
    en: {
        address: 'Address: Polígono Industrial Erletxe Plataforma 1A, pabellón Nº8, CP 48960,Galdacano,Vizcaya',
        phone: 'Telephone: (+34) 944 924 003',
    },
    es: {
        address: 'Dirección: Polígono Industrial Erletxe Plataforma 1A, pabellón Nº8, CP 48960,Galdacano,Vizcaya',
        phone: 'Teléfono: (+34) 944 924 003',
    }
}
function Footer() {

    const { address, phone } = prepareLiterals(literals)
    return <footer className='z-10 fixed bottom-0 w-full bg-[#323A47] p-4'>
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
        <div>
            <p className='font-alexandria text-white text-xs text-center'>{address}</p>
            <p className='font-alexandria text-white text-xs text-center'>{phone}</p>
        </div>
    </footer>
}

export default Footer