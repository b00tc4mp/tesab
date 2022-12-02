import { useRouter } from 'next/router'
import Link from 'next/link'
import useLiterals from '../../hooks/useLiterals'
import useContent from '../../hooks/useContent'
import Footer from '../../components/Footer'

const data = {
    '700i': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: 'La 700i es una machacadora móvil de alta robustez montada sobre orugas y diseñada para el machaqueo primario en frente de cantera. Dispone de un diseño único de alimentación con dos precribadores independientes que permiten al cliente obtener un producto determinado por la cinta lateral. La 700i está accionada por un motor Caterpillar de 300cv y cuenta con una machacadora de 1100 x 700mm con un sistema de ajuste hidráulico. Es el equipo idóneo para las aplicaciones más exigentes dentro de la industria de la minería, reciclajes y canteras.',
                technicalSpecificationsTitle: 'Especificaciones Técnicas',
                technicalSpecificationsItems: [
                    'Dimensiones de la machacadora: 1100 x 700 mm.',
                    'Profundidad de la machacadora: 1550 mm.',
                    'Tolva de 9,2 m3.',
                    'Sistema de doble alimentador independiente.',
                    'Banda magnética y cinta lateral (opcionales).',
                    'Motor diésel Caterpillar de 300 CV.',
                    'Peso: 46.720 kg.'
                ],
                makeQueryButton: 'Solicitar información',
            }
        },

        content: {
            video: '/equipment/crushers/700i/700iVideo.mp4',
            image1: '/equipment/crushers/700i/700i1.jpg',
            image2: '/equipment/crushers/700i/700i2.jpg'

        },

    },
    '800i': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: 'La 800i es una machacadora de alta robustez montado sobre orugas diseñado para el machaqueo primario en frente de cantera. Gracias al diseño único de la machacadora con un óptimo ángulo de trituración y mandíbulas largas, la 800i se ha convertido en la herramienta idónea para aplicaciones de piedra dura.  Gracias a su diseño de accionamiento directo y un gran volante que proporciona mucha inercia, representa un equipo de machaqueo altamente eficiente. La 800i está accionada por un motor Caterpillar C13 de 400cv y cuenta con una machacadora robusta con una boca de 1100 x 800mm.',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [
                    'Dimensiones de la machacadora: 1100 x 800 mm.',
                    'Profundidad de la machacadora: 1820 mm.',
                    'Tolva de 10,4 m3 con alimentador vibrante.',
                    'Disponible con banda magnética y cinta lateral (opcionales).',
                    'Motor diésel Caterpillar de 440 CV.',
                    'Peso: 60.000 kg.',
                ],

                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },
    '700ie': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: 'La machacadora 700ie es la última novedad de Tesab. Es un equipo híbrido, accionado por un grupo electrógeno Caterpillar. Está repleta de nuevas funciones, incluye operación inversa de la machacadora, desbloqueo automático, y además, cuenta con un panel de control personalizado con aire acondicionado integrado. El modelo 700ie ofrece las mismas ventajas y altos niveles de rendimiento que las otras machacadoras Tesab y, además, es un 33% más eficiente en el consumo de combustible.',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [
                    'Dimensiones de la machacadora: 1100 x 700 mm.',
                    'Profundidad de la machacadora: 1550 mm.',
                    'Sistema de doble alimentador independiente',
                    'Grupo electrónico Caterpillar C7,1, 225Kw, 230Kvas.',
                    'Machacadora accionada por un motor eléctrico WEG de 150 CV.',
                    'Tolva de 10 m3.',
                    'Peso: 46.720 kg.',
                ],
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    '623CT': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: 'El Tesab 623CT es un equipo compacto de trituración secundaria sobre orugas. Debido al diseño único de la unidad de trituración, se puede conseguir una excelente cubicidad de producto con alto ratio de reducción. La fiabilidad y regularidad de esta máquina han sido probadas durante muchos años y es incomparable a la hora de conseguir un producto final de alta calidad con bajos costes de producción. El 623CT está accionado por un motor Caterpillar de 275cv y cuenta con un molino robusto dotado de un rotor con tres martillos y cuenta con un paladar inferior para asegurar el máximo nivel de trituración y cubicidad de producto final.',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [
                    'Tolva con alimentador de 800 mm de ancho.',
                    'Boca de entrada de 600 x 350 mm. ',
                    'Rotor compuesto de 3 martillos.',
                    'Motor diésel Caterpillar de 275 CV.',
                    'Peso: 27.000 kg.',
                ],
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    '1412T': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: 'El Tesab 1412T es un molino móvil secundario grande montado sobre orugas y diseñado para triturar una gran variedad de tamaño de material. La máquina viene equipada con una tolva de alimentación robusta completa con un alimentador de banda. El molino de trituración incorpora el diseño único de Tesab con paladares de impacto, lo que se traduce en un alto ratio de reducción y la garantía de una excelente cubicidad de material triturado. El 1412T está accionado por un motor Caterpillar de 450cv de potencia y ofrece producciones hasta 350+ tn/h.',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [
                    'Boca de entrada de 1000 x 550 mm.',
                    'Excelente cubicidad de producto triturado.',
                    'Rotor compuesto por 4 martillos.',
                    'Motor diésel Caterpillar C9,3B de 455 CV de bajo consumo.',
                    'Peso: 42.700kg.',
                ],
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    '1012TS': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: 'El Tesab 1012TS es un equipo móvil de altas producciones diseñado para conseguir un producto final de alta calidad de forma constante con un coste por tonelada bajo. La máquina cuenta con un sistema de dos alimentadores independientes de dos pisos lo que permite al cliente obtener un producto determinado por la cinta lateral. El 1012TS está accionado por un motor Caterpillar de 450cv y cuenta con un molino robusto con un rotor de 1200mm de diámetro y con tres paladares de impacto para asegurar el máximo nivel de  trituración y cubicidad de producto final.',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [
                    'Sistema de alimentador independiente.',
                    'Boca de entrada de 1020 x 780 mm.',
                    'Rotor compuesto por 4 martillos.',
                    'Tres paladares de impacto con ajuste hidráulico.',
                    'Motor diésel Caterpillar de 450 CV.',
                    'Peso: 48.500 kg.',
                ],
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    '1150TC': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
               technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [],
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    'TS1550': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: 'El equipo Tesab 1150TC es un cono de trituración robusto sobre orugas diseñado para producir áridos triturados de alta calidad. Consiste en una cámara de trituración conﬁgurable según el  material con sistema de detección de objetos metálicos, y cinta principal de descarga con  sistema  hidráulico,  que  le  permite  mayor  eﬁciencia.  Es  un  equipo  altamente versátil diseñado para ofrecer al cliente los máximos niveles de rendimiento y calidad de producto triturado.',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [
                    'Anchura alimentador de banda: 1200 mm.',
                    'Anchura cinta de descarga: 1050 mm.  ',
                    'Diámetro de cono: 1150 mm.',
                    'Capacidad de tolva 8,7 m3.',
                    'Motor diésel Caterpillar de 450 CV.',
                    'Peso: 42.000 kg.',
                ],
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    'TS1860': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [],
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    'TS1340': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [],
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    'TS2430': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [],
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    'TS2600': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: 'La TS2600 es  modelo de referencia en el mercado de las grandes cribas. Su rendimiento extraordinario, uso fácil, fiabilidad y la calidad del producto clasificado están consiguiendo excelentes resultados para clientes en todas partes del mundo. Debido a la acción agresiva de su criba y su sistema de inclinación variable, la máquina es increíblemente versátil y es el equipo ideal para trabajar en un amplio rango de aplicaciones incluyendo arena, grava, carbón y tierra vegetal.',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [
                    'Tolva de 10 m3 de  capacidad.',
                    'Dimensiones de la criba: 6100 x 1525 mm.',
                    'N° de pisos: 2.',
                    'Tres cintas transportadoras de acopio.',
                    'Motor diésel Caterpillar de 125 CV.',
                    'Peso: 31.000 kgs',
                ],
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    'TS3600': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: 'La criba Tesab TS3600 es un grupo móvil de referencia de su clase, dirigida a clientes que buscan elevadas producciones y la más alta calidad del producto clasificado. Incorpora una potente criba 	de tres  pisos  y  cuatro  transportadores  de  acopio  que  se  pliegan  hidráulicamente para el transporte.  Debido a la acción agresiva de su criba y su sistema de inclinación variable, la máquina es increíblemente versátil y es el equipo ideal para trabajar en un amplio rango de aplicaciones incluyendo arena, grava, carbón y  tierra vegetal. Construida utilizando componentes de alta calidad, esta máquina siempre garantiza óptimos resultados incluso en las aplicaciones más exigentes.',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [
                    'Tolva de 10 m3 de  capacidad.',
                    'Dimensiones de la criba: 6100 x 1525 mm.',
                    'N° de pisos: 3. ',
                    'Cuatro cintas transportadoras de acopio.',
                    'Motor diésel Caterpillar de 125 CV.',
                    'Peso: 36.000 kg.',
                ],
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    '8042T': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [],
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    '8042TSL': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [],
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    'TR100': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [],
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    'REC100': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [],
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    'AIR-VAC': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [],
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },

    'windshifter': {
        literals: {
            pt: {
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                descriptionTitle: 'Descripción',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [],
                technicalSpecificationsText7: '',
                makeQueryButton: 'Más información',
            }
        },
        image: ''
    },
}

export default function Equipment() {
    const content = useContent()
    const router = useRouter()
    const { equipmentId } = router.query


    if (equipmentId) {
        // @ts-ignore
        const { literals, image } = data[equipmentId]
        //const { title, description } = useLiterals(literals)
        const { descriptionTitle, descriptionText, technicalSpecificationsTitle, technicalSpecificationsItems, makeQueryButton } = useLiterals(literals)

        return <>
            <main className='items-center'>
                <h1 className="font-bakbakone text-center text-4xl mx-4 lg:my-4">700i</h1>


                <div className='lg:flex justify-center gap-x-32'>
                    <div className="flex overflow-x-auto my-4 lg:h-128 lg:w-200 lg:ml-6">
                        <video autoPlay loop muted>
                            <source src={content('/equipment/crushers/700i/700iVideo.mp4')} type="video/mp4" />
                        </video>
                        <img src={content('/equipment/crushers/700i/700i1.jpg')} />
                        <img src={content('/equipment/crushers/700i/700i2.jpg')} />
                    </div>

                    <div className='flex flex-col p-4 gap-5 lg:w-160'>

                        <h2 className="font-bold">{descriptionTitle}</h2>
                        <p className=" text-justify">{descriptionText}</p>

                        <h2 className="font-bold">{technicalSpecificationsTitle}</h2>
                        <ul className="list-disc px-4">
                            {technicalSpecificationsItems.map(technicalSpecificationsItem => <li>{technicalSpecificationsItem}</li>)}
                        </ul>

                    </div>
                </div>

                <div className="flex justify-center sticky">
                    <Link href="/contact"><button className="bg-amber-400 my-4 px-4 py-2 font-bold rounded hover:bg-[#323A47] hover:text-amber-400 ">
                        {makeQueryButton}
                    </button></Link>
                </div>
            </main>

            <Footer />
        </>
    } else return null
}