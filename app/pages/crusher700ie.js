import ContactForm from '../components/ContactForm'
import Footer from '../components/Footer'
// import TypeForm from '../components/TypeForm'

export default function crusher700ie() {
    return <>
        <h1 className='font-bakbak-one text-center text-4xl mx-4'>700ie</h1>
        <div >
            <img  src="images/equipment/crushers/700i.jpeg"></img>
            <img  src="images/equipment/crushers/700i/crusher700ie2.jpg"></img>
            <img  src="images/equipment/crushers/700ie/crusher700i3.jpg"></img>
        </div>
        <div>
            <div className='flex'>
            <div className='relative'>
                <div className='border-black border-solid border-4 m-4 -z-10'></div>
                <div className='border-solid border-4 m-4 w-5 absolute top-0'></div>
            </div>
            <p>1 de 4</p>
            </div>

            <h2 className='font-bakbak-one m-4 '>Especificaciones técnicas</h2>
            <ul className='m-4'>
                <li>Dimensiones de la machacadora: 1100 x 700 mm.</li>
                <li>Profundidad de la machacadora: 1550 mm.</li>
                <li>Sistema de doble alimentador independiente.</li>
                <li> Motor diésel Caterpillar de 300 cv.</li>
                <li>Banda magnética y cinta lateral.</li>
            </ul>
        </div>
        <button className='bg-amber-400 m-4 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400'> Solicitar información </button>




        {/* <TypeForm /> */}

        <Footer />
    </>
}