import { useRouter } from 'next/router'

const literals = {
    'pt-PT': {
        address: 'Endereço: Polígono Industrial Erletxe Plataforma 1A, pabellón Nº8, CP 48960,Galdacano,Vizcaya',
        phone: 'Telefone: (+34) 944 924 003'
    },
    'en-IE': {
        address: 'Address: Polígono Industrial Erletxe Plataforma 1A, pabellón Nº8, CP 48960,Galdacano,Vizcaya',
        phone: 'Telephone: (+34) 944 924 003',
    },
    'es-ES': {
        address: 'Dirección: Polígono Industrial Erletxe Plataforma 1A, pabellón Nº8, CP 48960,Galdacano,Vizcaya',
        phone: 'Teléfono: (+34) 944 924 003',
    }
}
function Footer() {
    const {locale} = useRouter()
    const {address, phone} = literals[locale]

    return <footer className='bg-[#323A47] p-4'>
        <div>
            <p className='text-white text-xs text-center'>{address}</p>
            <p className='text-white text-xs text-center'>{phone}</p>
        </div>
    </footer>
}

export default Footer