import { useRouter } from 'next/router';

function prepareLiterals(literals) {
    const { locale } = useRouter()

    return literals[locale] || {}
}

export default prepareLiterals