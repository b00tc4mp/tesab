import useLiterals from "../hooks/useLiterals"

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

    const {address, phone} = useLiterals(literals)
    return <footer className='bg-[#323A47] p-4'>
        <div>
            <p className='text-white text-xs text-center'>{address}</p>
            <p className='text-white text-xs text-center'>{phone}</p>
        </div>
    </footer>
}

export default Footer