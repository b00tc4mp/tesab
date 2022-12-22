import { useRouter } from 'next/router'
import Link from 'next/link'
import prepareLiterals from '../../helpers/prepareLiterals'
import prepareContent from '../../helpers/prepareContent'
import Footer from '../../components/Footer'
import Slider from '../../components/Slider'


const data = {
    '700i': {
        literals: {
            pt: {
                title: '700i',
                descriptionTittle: 'Descrição',
                descriptionText: '',
                technicalSpecificationsTitle: 'Especificações técnicas',
                technicalSpecificationsItems: [],
                makeQueryButton: 'Pedido de informação',
            },

            en: {
                title: '700i',
                descriptionTittle: 'Description',
                descriptionText: '',
                technicalSpecificationsTitle: 'Technical Specifications',
                technicalSpecificationsItems: [],
                makeQueryButton: 'More information',
            },

            es: {
                title: '700i',
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

        media: [
            { type: 'video', path: '/equipment/crushers/700i/700iVideo.mp4' },
            { type: 'image', path: '/equipment/crushers/700i/700i-1.jpg' },
            { type: 'image', path: '/equipment/crushers/700i/700i-2.jpeg' },
            { type: 'image', path: '/equipment/crushers/700i/700i-3.jpg' }
        ]
    },
    '800i': {
        literals: {
            pt: {
                title:'',
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

        media: [
            { type: 'video', path: '/equipment/crushers/800i/800iVideo.mp4' },
            { type: 'image', path: '/equipment/crushers/800i/800i-1.jpg' },
            { type: 'image', path: '/equipment/crushers/800i/800i-2.jpg' },
            { type: 'image', path: '/equipment/crushers/800i/800i-3.jpg' }
        ]
    },
    '700ie': {
        literals: {
            pt: {
                title:'TODO',
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
        media: [
            { type: 'video', path: '/equipment/crushers/700ie/700ieVideo.mp4' },
            { type: 'image', path: '/equipment/crushers/700ie/700ie-1.jpg' },
            { type: 'image', path: '/equipment/crushers/700ie/700ie-2.jpg' },
            { type: 'image', path: '/equipment/crushers/700ie/700ie-3.jpg' }
        ]

    },

    '623CT': {
        literals: {
            pt: {
                title:'',
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
        media: [
            { type: 'video', path: '/equipment/impactCrusher-coneCrushers/623CT/623CTVideo.mp4' },
            { type: 'image', path: '/equipment/impactCrusher-coneCrushers/623CT/623CT-1.jpg' },
            { type: 'image', path: '/equipment/impactCrusher-coneCrushers/623CT/623CT-2.jpg' },
            { type: 'image', path: '/equipment/impactCrusher-coneCrushers/623CT/623CT-3.jpg' },
        ]
    },

    '1412T': {
        literals: {
            pt: {
                title:'',
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
        media: [
            { type: 'video', path: '/equipment/impactCrusher-coneCrushers/1412T/1412TVideo.mp4' },
            { type: 'image', path: '/equipment/impactCrusher-coneCrushers/1412T/1412T-1.jpg' },
            { type: 'image', path: '/equipment/impactCrusher-coneCrushers/1412T/1412T-2.jpg' },
        ]
    },

    '1012TS': {
        literals: {
            pt: {
                title:'',
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
        media: [
            { type: 'image', path: '/equipment/impactCrusher-coneCrushers/1012TS/1012TS-1.jpg' },
            { type: 'image', path: '/equipment/impactCrusher-coneCrushers/1012TS/1012TS-2.jpg' },
        ]
    },

    '1150TC': {
        literals: {
            pt: {
                title:'',
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
                makeQueryButton: 'Más información',
            }
        },
        media: [
            { type: 'image', path: '/equipment/impactCrusher-coneCrushers/1150TC/1150TC-1.jpg' },
            { type: 'image', path: '/equipment/impactCrusher-coneCrushers/1150TC/1150TC-2.png' },
        ]
    },

    'TS1550': {
        literals: {
            pt: {
                title:'',
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
                descriptionText: 'Diseñado para trabajar en los entornos más difíciles y exigentes, la versatilidad del TS1550 le permite trabajar en un amplio rango de aplicaciones. Desde circuitos primarios de machaqueo, reciclaje de escombros y materiales de construcción hasta la separación de arcilla pegajosa, la máquina es capaz de clasificar incluso los materiales más difíciles.  La habilidad del TS1550 de rendir con tanto éxito en todo tipo de aplicación, especialmente con materiales húmedos y pegajosos, se basa principalmente en el rendimiento de su criba, con una superficie de clasificación de 7,2m3 y su sistema de vibración agresiva. El equipo cuenta con una tolva grande y una apertura ancha de la salida del alimentador, lo que permite la libre circulación de material sin atascos lo que mejora el rendimiento del equipo sobre todo en aplicaciones de frente de cantera.',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [
                    'Tolva de 8m3 de capacidad.',
                    'Dimensiones de la Criba: 4800 x 1525mm.',
                    'Nº de Pisos: 2',
                    'Tres cintas transportadoras de acopio.',
                    'Motor diésel Caterpillar 4,4 de 125cv.',
                    'Peso: 34.000kgs',
                ],
                makeQueryButton: 'Más información',
            }
        },
        media: [
            { type: 'image', path: '/equipment/scalpers/TS1550/TS1550-1.jpg' },
            { type: 'image', path: '/equipment/scalpers/TS1550/TS1550-2.jpg' },
            { type: 'image', path: '/equipment/scalpers/TS1550/TS1550-3.jpg' },
        ]
    },

    'TS1860': {
        literals: {
            pt: {
                title:'',
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
                descriptionText: 'Siendo el equipo más grande del rango de precribadores Tesab, el modelo TS1860 se encuentra sin rivales en cuanto a rendimiento y versatilidad. Esta máquina puede trabajar en solitario produciendo unos productos determinados o como un precribador primario en aplicaciones de machaqueo en frente de cantera. Accionada por un motor CAT de 225cv, el equipo cuenta con una criba de 6,1 x 1,8m de alta vibración que garantiza los rendimientos más altos en un amplio rango de aplicaciones incluyendo aplicaciones de reciclaje, arena y grava, carbón y frente de cantera.',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [
                    'Tolva de 10m3 de capacidad.',
                    'Dimensiones de la Criba: 6100 x 1525mm.',
                    'Nº de Pisos: 2',
                    'Tres cintas transportadoras de acopio.',
                    'Motor diésel Caterpillar 6,6 de 225cv.',
                    'Peso: 40.000kgs',
                ],
                makeQueryButton: 'Más información',
            }
        },
        media: [
            { type: 'image', path: '/equipment/scalpers/TS1860/TS1860-1.jpg' },
            { type: 'image', path: '/equipment/scalpers/TS1860/TS1860-2.jpg' },
        ]
    },

    'TS1340': {
        literals: {
            pt: {
                title:'',
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
                descriptionText: 'Ofreciendo muchas de las características habituales que se encuentran en precribadores más grandes, el TS1340 es la máquina idónea para contratistas que no requieren producciones muy elevadas, pero exigen el mismo nivel de calidad de material clasificado. Debido a su diseño compacto y su movilidad superior, el equipo es la herramienta idónea para clasificar materiales en sitios donde el espacio es limitado o donde hay necesidad de mover la máquina con frecuencia entre distintos lugares de trabajo, con un tiempo de instalación típico de 15 minutos.',
                technicalSpecificationsTitle: 'Especificación técnica',
                technicalSpecificationsItems: [
                    'Tolva de 6m3 de capacidad.',
                    'Dimensiones de la Criba: 3660 x 1370mm.',
                    'Nº de Pisos: 2',
                    'Tres cintas transportadoras de acopio.',
                    'Motor diesel Caterpillar 4,4 de 100cv.',
                    'Peso: 23.000kgs',
                ],
                makeQueryButton: 'Más información',
            }
        },
        media: [
            { type: 'image', path: '/equipment/scalpers/TS1340/TS1340-1.jpg' },
            { type: 'image', path: '/equipment/scalpers/TS1340/TS1340-2.jpg' },
            { type: 'image', path: '/equipment/scalpers/TS1340/TS1340-3.jpg' },
        ]
    },

    'TS2430': {
        literals: {
            pt: {
                title:'',
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
                makeQueryButton: 'Más información',
            }
        },
        media: [
            { type: 'image', path: '/equipment/screeners/TS2430/TS2430-1.jpg' },
            { type: 'image', path: '/equipment/screeners/TS2430/TS2430-2.jpg' },
            { type: 'image', path: '/equipment/screeners/TS2430/TS2430-3.jpg' },
        ]
    },

    'TS2600': {
        literals: {
            pt: {
                title:'',
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
        media: [
            { type: 'image', path: '/equipment/screeners/TS2600/TS2600-3.png' },
            { type: 'image', path: '/equipment/screeners/TS2600/TS2600-2.jpg' },
            { type: 'image', path: '/equipment/screeners/TS2600/TS2600-1.png' },
        ]
    },

    'TS3600': {
        literals: {
            pt: {
                title:'',
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
        media: [
            { type: 'image', path: '/equipment/screeners/TS3600/TS3600-1.jpg' },
            { type: 'image', path: '/equipment/screeners/TS3600/TS3600-2.jpg' },
            { type: 'image', path: '/equipment/screeners/TS3600/TS3600-3.jpg' },
        ]
    },

    '8042T': {
        literals: {
            pt: {
                title:'',
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
                makeQueryButton: 'Más información',
            }
        },
        media: [
            { type: 'image', path: '/equipment/trackedStockpilers/8042T/8042T-1.jpg' },
            { type: 'image', path: '/equipment/trackedStockpilers/8042T/8042T-2.jpeg' },
        ]
    },

    '8042TSL': {
        literals: {
            pt: {
                title:'',
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
                makeQueryButton: 'Más información',
            }
        },
        media: [
            { type: 'image', path: '/equipment/trackedStockpilers/8042TSL/8042TSL-1.jpg' },
            { type: 'image', path: '/equipment/trackedStockpilers/8042TSL/8042TSL-2.jpg' },
        ]
    },

    'TR100': {
        literals: {
            pt: {
                title:'',
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
                makeQueryButton: 'Más información',
            }
        },
        media: [
            { type: 'image', path: '/equipment/recycling/TR100E/TR100E-1.jpeg' },
            { type: 'image', path: '/equipment/recycling/TR100E/TR100E-2.jpeg' },
        ]
    },

    'REC100': {
        literals: {
            pt: {
                title:'',
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
                makeQueryButton: 'Más información',
            }
        },
        media: [
            { type: 'image', path: '/equipment/recycling/REC100/REC100-1.jpeg' },
            { type: 'image', path: '/equipment/recycling/REC100/REC100-2.jpeg' },
            { type: 'image', path: '/equipment/recycling/REC100/REC100-2.jpeg' },
        ]
    },

    'AIR-VAC': {
        literals: {
            pt: {
                title:'',
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
                makeQueryButton: 'Más información',
            }
        },
        media: [
            { type: 'image', path: '/equipment/recycling/AIR-VAC/AIR-VAC-1.png' },
            { type: 'image', path: '/equipment/recycling/AIR-VAC/AIR-VAC-2.png' },
            { type: 'image', path: '/equipment/recycling/AIR-VAC/AIR-VAC-3.png' },
        ]
    },

    'windshifter': {
        literals: {
            pt: {
                title:'',
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
                makeQueryButton: 'Más información',
            }
        },
        media: [
            { type: 'image', path: '/equipment/recycling/WINDSHIFTER/Windshifter-1.png' },
            { type: 'image', path: '/equipment/recycling/WINDSHIFTER/Windshifter-2.png' },
            { type: 'image', path: '/equipment/recycling/WINDSHIFTER/Windshifter-3.png' },
        ]
    },

    'dustCannon': {
        literals: {
            pt: {
                title:'',
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
                makeQueryButton: 'Más información',
            }
        },
        media: [
            { type: 'video', path: '/equipment/accesories/dustCannonVideo.mp4' },
            { type: 'image', path: '/equipment/accesories/dustCannon-1.png' },
            { type: 'image', path: '/equipment/accesories/dustCannon-2.jpg' },
            { type: 'image', path: '/equipment/accesories/dustCannon-3.jpg' },
        ]
    },


}

export default function Equipment({ isMobile }) {
    const content = prepareContent()
    const router = useRouter()
    const { equipmentId } = router.query

    if (equipmentId) {
        // @ts-ignore
        const { literals, media } = data[equipmentId]
        const { title, descriptionTitle, descriptionText, technicalSpecificationsTitle, technicalSpecificationsItems, makeQueryButton } = prepareLiterals(literals)

        return <>
            <main>
                <h1 className="font-bakbakone text-center text-5xl mx-4 lg:my-4">{title}</h1>
                <div className='flex flex-col  lg:flex-row lg:place-content-around'>
                    <div className='max-w-[800px]'>
                        <Slider id="slider">
                            {media && media.map(({ type, path }) =>
                                type === 'video' ?
                                    <video className="w-full" autoPlay loop muted src={content(path)} type="video/mp4" />
                                    :
                                    <img className="w-full block" src={content(path)} />
                            )}
                        </Slider>
                    </div>

                    <div className='flex flex-col p-4 gap-5 lg:w-160'>
                        <h2 className="font-bakbakone">{descriptionTitle}</h2>
                        <p className="font-alexandria text-justify">{descriptionText}</p>

                        <h2 className="font-bakbakone">{technicalSpecificationsTitle}</h2>
                        <ul className="font-alexandria list-disc px-4">
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