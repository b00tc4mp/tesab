import { useRouter } from 'next/router'
import useLiterals from '../../hooks/useLiterals'
import useContent from '../../hooks/useContent'

const data = {
    '700i': {
        literals: {
            pt: {
                title: 'title pt 700i',
                description: 'description pt 700i '
            },
            en: {
                title: 'title en 700i',
                description: 'description en 700i '
            },
            es: {
                title: 'title es 700i',
                description: 'description es 700i '
            }
        },

        image: '/equipment/crushers/700i/700i1.jpg'
    },
    '800i': {
        literals: {
            pt: {
                title: 'title pt 800i',
                description: 'description pt 800i '
            },
            en: {
                title: 'title en 800i',
                description: 'description en 800i '
            },
            es: {
                title: 'title es 800i',
                description: 'description es 800i '
            }
        },

        image: '/equipment/crushers/700i/700i2.jpg'
    }
}

export default function Equipment() {
    const content = useContent()
    const router = useRouter()
    const { equipmentId } = router.query

    if (equipmentId) {
        // @ts-ignore
        const { literals, image } = data[equipmentId]
        const { title, description } = useLiterals(literals)

        return <div>
            <h1>{title}</h1>
            <p>{description}</p>
            <img src={content(image)} />
        </div>
    } else return null
}